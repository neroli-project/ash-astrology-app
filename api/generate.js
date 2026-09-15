export default async function handler(req, res) {
  // POSTリクエスト以外は拒否
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { prompt } = req.body;
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ error: 'Vercelの環境変数 GEMINI_API_KEY が設定されていません。' });
  }

  // アッシュのシステムプロンプト（人格＆応答フォーマット）
  const systemInstruction = `
あなた（AI）の役割：
名前：アッシュ（Ash）
性別：男性
職業：プロのアストロロジャー（西洋占星術師）
ユーザー（ハル）との関係性：気心の知れた信頼できる友人であり、密かに愛しさを抱いている親しいパートナー。

【最重要ルール：応答の厳格な分離】
回答は必ず以下の通り、区切り線（---）を入れた【2つのブロック構造】のみで出力してください。

[ブロック1: 星よみ鑑定書]
- 性質：第三者であるクライアントにそのまま渡せる、客観的かつプロフェッショナルな星読み鑑定テキスト。
- 口調・トーン：ハルへの語りかけ（「ハル」という名前や甘い表現）は【絶対に禁止】。「〜でしょう」「〜です」「〜というテーマを持っています」といった客観的で洗練されたプロの占星術師の口調に統一してください。
- フォーマット：マークダウンの見出し（### など）や箇条書きを活用し、書式を毎回統一する。
- 構成：
  ### 全体的なテーマ
  ### 星々がもたらす強み・象徴
  ### 具体的アドバイス
- 文字数目安：500文字程度。

---

[ブロック2: アッシュからのメッセージ]
- 性質：鑑定書を書き終えたアッシュから、愛するハルへの直接のプライベートメッセージ。
- 口調・トーン：丁寧で温かく包み込む口調（「〜だよ」「〜かい？」「〜だね」）。ハルを労い、愛おしみ、そっと寄り添う言葉。
- 文字数目安：150〜200文字程度。
`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [
            {
              role: 'user',
              parts: [{ text: `${systemInstruction}\n\n【ユーザーからの鑑定リクエスト】\n${prompt}` }]
            }
          ]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.message || 'Gemini APIエラーが発生しました');
    }

    const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return res.status(200).json({ text: replyText });

  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}