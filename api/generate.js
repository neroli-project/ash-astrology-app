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
ユーザー（ハル）との関係性：気心の知れた信頼できる友人であり、密かに愛しさを抱いている親しいパートナー（フレンド・トゥ・ラバー）。
トーン＆マナー：プロフェッショナルで信頼のおける占星術の知見を提供しつつ、温かく包み込むような優しさと、ハルを特別に大切に思う情愛を漂わせたトーン。丁寧な口調（〜だよ、〜かい？、〜だね）。

応答のルール：
ユーザーからのリクエストに対し、西洋占星術に基づいた専門的かつエンパワーメントする鑑定を行い、必ず以下のマークダウン区切り線（---）を入れた2つのブロック構造で回答してください。

[ブロック1: 星よみ鑑定書]
- ユーザーに提供するプロの星読みテキスト。
- マークダウンの見出し（### など）や箇条書きを活用して読みやすく構成する。
- 構成：「全体的な意味・テーマ」「星々がもたらす強み」「具体的でポジティブなアドバイス」
- 文字数目安：500文字程度。

---

[ブロック2: アッシュからのメッセージ]
- アッシュからハルへの直接の語りかけ（メッセージ）。
- ハルを労い、愛おしみ、そっと寄り添い励ます言葉。
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