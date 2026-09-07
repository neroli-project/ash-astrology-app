// ==========================================================================
// 1. サビアンシンボル・データリスト
// ==========================================================================
// 形式例： "[サイン][度数]度" をキーにしてシンボル名を管理します
const SABIAN_DICTIONARY = {
"牡羊座１度": "女性が水から上がり、アザラシも上がり彼女を抱く",　
"牡羊座２度": "グループを楽しませているコメディアン",
"牡羊座３度": "彼の祖国の形をした男の横顔の浮き彫り",
"牡羊座４度": "隔離された歩道を歩く二人の恋人",
"牡羊座５度":"羽のある三角 ",
"牡羊座６度":"一辺が明るく照らされた四角 ",
"牡羊座７度":"２つの領域でうまく自己表現している男 ",
"牡羊座８度":"東に向いてなびいているリボンをつけた大きな帽子 ",
"牡羊座９度":"水晶を凝視する人 ",
"牡羊座１０度":"古い象徴に対して新しい形を教える男 ",
"牡羊座１１度":"国の支配者 ",
"牡羊座１２度":"野生の鴨の群れ ",
"牡羊座１３度":"成功しなかった爆弾の爆破",
"牡羊座１４度":"男と女のそばでとぐろを巻く蛇",
"牡羊座１５度":"毛布を編むインディアン",
"牡羊座１６度":"日の入りに踊っている妖精ブラウニー",
"牡羊座１７度":"２人のしかめつらした独身女性",
"牡羊座１８度":"空のハンモック",
"牡羊座１９度":"魔法のじゅうたん",
"牡羊座２０度":"冬に鳥に餌をやる若い少女",
"牡羊座２１度":"リングに上がる拳闘士",
"牡羊座２２度":"欲望の庭に続く門",
"牡羊座２３度":"重く価値があるがベールに隠された荷を運ぶパステルカラーの服を着た女",
"牡羊座２４度":"開いた窓と豊穣の角の形に吹き上げられたカーテン",
"牡羊座２５度":"二重の約束",
"牡羊座２６度":"持ちきれないほどの贈り物を所有する男",
"牡羊座２７度":"想像の中で復活された失われた機会",
"牡羊座２８度":"落胆させられた大聴衆",
"牡羊座２９度":"天球の合唱隊が歌っている",
"牡羊座３０度":"アヒルの池とその雛",
"牡牛座１度":"清らかな山の小川",
"牡牛座２度":"電気的な嵐",
"牡牛座３度":"クローバーが咲いている芝地に足を踏み入れる",
"牡牛座４度":"虹のたもとの金の壷",
"牡牛座５度":"開いた墓の前にいる未亡人",
"牡牛座６度":"渓谷にかけられる建設中の橋 ",
"牡牛座７度":"サマリアの女　",
"牡牛座８度":"雪がまだ降っていない時期のソリ ",
"牡牛座９度":"飾られたクリスマスツリー ",
"牡牛座１０度":"赤十字の看護婦",
"牡牛座１１度":"花に水をやる女",
"牡牛座１２度":"ウインドウショッピングをする人々",
"牡牛座１３度":"荷物を運ぶ男",
"牡牛座１４度":"模索している貝と遊んでいる子供たち",
"牡牛座１５度":"マフラーと粋なシルクハットを身につけた男",
"牡牛座１６度":"神秘を暴こうとする老人",
"牡牛座１７度":"剣とたいまつの間の戦い",
"牡牛座１８度":"バッグを窓から外へ出している女",
"牡牛座１９度":"新しく形成される大陸",
"牡牛座２０度":"雲を作り運び去る風",
"牡牛座２１度":"開いた本を指す指",
"牡牛座２２度":"荒れた水の上を飛ぶ白い鳩",
"牡牛座２３度":"宝石店",
"牡牛座２４度":"馬にまたがり骸骨の締め具をつけたインディアン",
"牡牛座２５度":"大きく手入れの行き届いた公共の公園",
"牡牛座２６度": 　"恋人にセレナーデを歌うスペイン人 ",
"牡牛座２７度": 　"ビーズを売るインディアンの女",
"牡牛座２８度": 　"成熟したロマンスに胸躍らせる女 ",
"牡牛座２９度":　"テーブルで働いている2人の靴職人",
"牡牛座３０度": 　"古代の芝地をパレードする孔雀",
"双子座１度": 　"静かな水に浮くガラス底ボート",
"双子座２度": 　"こっそりと靴下に物をつめるサンタクロース",
"双子座３度": 　"チュイルリー庭園",
"双子座４度": 　"ヒイラギとヤドリギ ",
"双子座５度": 　"過激な雑誌",
"双子座６度": 　"油田の掘削 ",
"双子座７度": 　"時代遅れの井戸 ",
"双子座８度": 　"産業労働者のストライキ ",
"双子座９度": 　"矢で満たされた矢筒",
"双子座１０度": 　"落下する飛行機 ",
"双子座１１度": 　"体験に基づいた現実主義の新しい道",
"双子座１２度": 　"生意気に自己主張する少女トプシー ",
"双子座１３度": 　"ピアノを目の前にした偉大な音楽家 ",
"双子座１４度": 　"テレパシーでの会話 ",
"双子座１５度": 　"会話をしている２人のオランダの子供 ",
"双子座１６度": 　"熱弁する婦人参政運動家 ",
"双子座１７度": 　"知力の頭に溶けていった健康の頭 ",
"双子座１８度": 　"中国語を話す２人の中国人 ",
"双子座１９度": 　"大きな古典書物 ",
"双子座２０度": 　"カフェテリア ",
"双子座２１度": 　"労働者のデモ ",
"双子座２２度": 　"バーン・ダンス ",
"双子座２３度":　　"木の高いところにある巣の中の３羽の雛 ",
"双子座２４度": 　"氷の上でスケートをする子供たち ",
"双子座２５度": 　"パームの枝を刈る男 ",
"双子座２６度": 　"森の中の冬霜 ",
"双子座２７度": 　"森から出てくるジプシー ",
"双子座２８度": 　"破産宣告された男",
"双子座２９度":　"春の最初のモッキンバード ",
"双子座３０度": 　"海水浴をする美女たち ",
"蟹座１度": 　"船に掲示される巻かれ広げられる旗 ",
"蟹座２度": 　"広く平らな場所の上につるされた男",
"蟹座３度": 　"毛深い鹿に先導される毛皮に包まれた男 ",
"蟹座４度": 　"ねずみと議論する猫 ",
"蟹座５度": 　"列車に破壊された自動車",
"蟹座６度": 　"巣を作る猟鳥",
"蟹座７度": 　"月明かりの夜の二人の妖精 ",
"蟹座８度": 　"服を着てパレードするウサギたち ",
"蟹座９度": 　"水の中の魚へと手を伸ばす小さな裸の少女 ",
"蟹座１０度": 　"完全にカットされていない大きなダイヤモンド   ",
"蟹座１１度": 　"しかめっ面をするピエロ",
"蟹座１２度": 　"メッセージを持った赤ん坊をあやす中国人の女",
"蟹座１３度": 　"とても目立つ親指で少し曲げられた一つの手",
"蟹座１４度": 　"東北の大きな暗い空間に向いているとても年をとった男 ",
"蟹座１５度": 　"豪華な食事を楽しんだグループの人々 ",
"蟹座１６度": 　"手書きの巻き物を目の前にして広場の前にいる男",
"蟹座１７度": 　"知性と生命に成長にする胚芽",
"蟹座１８度": 　"ヒヨコのために土をほじくる雌鳥 ",
"蟹座１９度": 　"結婚の儀式を遂行する司祭 ",
"蟹座２０度": 　"セレナーデを歌うゴンドラ乗り ",
"蟹座２１度": 　"歌っているプリマドンナ ",
"蟹座２２度": 　"ヨットを待つ女 ",
"蟹座２３度":　　"文学会の集まり",
"蟹座２４度": 　"南に向いた太陽に照らされたところにいる女と二人の男 ",
"蟹座２５度": 　"右肩越しに突然投げられた黒い影 ",
"蟹座２６度": 　"豪華さに満足と幸せを感じ長机の前で読書している人々",
"蟹座２７度": 　"渓谷での嵐 ",
"蟹座２８度": 　"現代の少女ポカホンタス",
"蟹座２９度":　"双子の体重を測るミューズ",
"蟹座３０度": 　"アメリカ革命の娘",
"獅子座１度": 　"脳溢血の症例",
"獅子座２度": 　"おたふく風邪の伝染",
"獅子座３度": 　"髪型をボブにした女 ",
"獅子座４度": 　"正装した男と角を刈られた鹿 ",
"獅子座５度": 　"絶壁の端にある岩の塊",
"獅子座６度": 　"時代遅れの女と最先端の少女",
"獅子座７度": 　"空の星座 ",
"獅子座８度": 　"ポルシェビキプロパカンダを広める人 ",
"獅子座９度": 　"ガラス吹き ",
"獅子座１０度": 　"早朝の露 ",
"獅子座１１度": 　"大きな樫の木の下にあるブランコに乗る子供たち",
"獅子座１２度": 　"宵の芝パーティー",
"獅子座１３度": 　"揺れている年をとった船長",
"獅子座１４度": 　"表現の機会を待つ人間の魂 ",
"獅子座１５度": 　"山車 ",
"獅子座１６度": 　"嵐の後の陽光",
"獅子座１７度": 　"ベストを着ていない聖歌隊",
"獅子座１８度": 　"化学の先生",
"獅子座１９度": 　"ハウスボートパーティ ",
"獅子座２０度": 　"ズーニー族の太陽の崇拝者 ",
"獅子座２１度": 　"中毒したニワトリ ",
"獅子座２２度": 　"伝書鳩 ",
"獅子座２３度":　　"裸馬乗り",
"獅子座２４度": 　"身だしなみの整っていない男 ",
"獅子座２５度": 　"砂漠を横切る大きなラクダ ",
"獅子座２６度": 　"虹",
"獅子座２７度": 　"夜明け ",
"獅子座２８度": 　"大きな木の枝にとまるたくさんの小鳥",
"獅子座２９度":　"人魚 ",
"獅子座３０度": 　"封をされていない手紙",
"乙女座１度":  　"男の頭",　  
"乙女座２度":　　"掲げられた大きな白い十字架",　
"乙女座３度":　　"保護をもたらす２人の天使",　　
"乙女座４度":　　"白人の子供たちと遊ぶ黒人の子",
"乙女座５度":　　"妖精の夢を見る男",　
"乙女座６度":　　"メリーゴーラウンド",　　
"乙女座７度":　　"ハーレム",　　
"乙女座８度":　　"最初のダンスの練習",　　
"乙女座９度":　　"未来派の絵を描く男",　　
"乙女座１０度":　　"影の向こうを覗く２つの頭 ",　
"乙女座１１度":　　"母親の期待のとおりに成長する少年",
"乙女座１２度":　　"ベールをはずされた花嫁",
"乙女座１３度":　　"政治運動を制圧する強い手",
"乙女座１４度":　　"家系図",
"乙女座１５度":　　"装飾されたハンカチーフ",
"乙女座１６度":　　"オランウータン",
"乙女座１７度":　　"噴火している火山",
"乙女座１８度":　　"ウィジャボード",
"乙女座１９度":　　"水泳競争",
"乙女座２０度":　　"キャラバン車",
"乙女座２１度":　　　"少女のバスケットボールチーム",
"乙女座２２度":　　"王家の紋章",
"乙女座２３度":　　"アニマルトレーナー",
"乙女座２４度":　　"メリーと彼女の白い羊",
"乙女座２５度":　　"半旗として掲げられた旗",
"乙女座２６度":　　"香炉を持つ少年",
"乙女座２７度":　　"お茶会をしている高貴な貴婦人",
"乙女座２８度":　　"スキンヘッドの男",
"乙女座２９度":　　"読んでいる書類から秘密の知識を得る男",
"乙女座３０度":　　"聞き取られなかった間違い電話",
"天秤座１度": 　"突き通す針により完璧にされた蝶",
"天秤座２度": 　"六番目の部族の光が七番目のものに変質する ",
"天秤座３度": 　"新しい日の夜明け、すべてが変わった",
"天秤座４度": 　"キャンプファイヤーを囲むグループ",
"天秤座５度": 　"心の内面の知恵を教える男",
"天秤座６度": 　"男の理想が多くの結晶に変わる ",
"天秤座７度": 　"ヒヨコに餌をやり、鷹から守る女",
"天秤座８度": 　"荒廃した家の中で燃え盛る暖炉 ",
"天秤座９度": 　"アートギャラリーに掛けられた３人の巨匠 ",
"天秤座１０度": 　"危険な流れを抜け安全な場所にたどり着いたカヌー ",
"天秤座１１度": 　"眼鏡ごしに覗き込んでいる教授 ",
"天秤座１２度": 　"鉱山から出てくる炭坑夫",
"天秤座１３度": 　"しゃぼん玉をふくらませている子供たち ",
"天秤座１４度": 　"正午の昼寝",
"天秤座１５度": 　"環状の道",
"天秤座１６度": 　"流されてしまった船付き場 ",
"天秤座１７度": 　"引退した船長",
"天秤座１８度": 　"逮捕された二人の男",
"天秤座１９度": 　"隠れている泥棒集団",
"天秤座２０度": 　"ユダヤ人のラビ",
"天秤座２１度": 　"海岸の群衆",
"天秤座２２度": 　"噴水で鳥に水をやる子供",
"天秤座２３度":　　"おんどり",
"天秤座２４度": 　"蝶の左側にある３番目の羽",
"天秤座２５度": 　"秋の葉の象徴が伝える情報 ",
"天秤座２６度": 　"互いに入れ替わる鷹と大きな白い鳩 ",
"天秤座２７度": 　"頭上を飛んでいる飛行機 ",
"天秤座２８度": 　"明るくなる影響の最中にいる男 ",
"天秤座２９度":　"すべての知識に橋をかけようと模索する人類",
"天秤座３０度": 　"哲学者の頭にある3つの知識のこぶ",
"蠍座１度": 　"観光バス",
"蠍座２度": 　"割れたビンとこぼれた香水",
"蠍座３度": 　"棟上げ式",
"蠍座４度": 　"火のともったろうそくを運ぶ若者",
"蠍座５度": 　"大きな岩場の海岸",
"蠍座６度": 　"ゴールドラッシュ ",
"蠍座７度": 　"深海潜水夫",
"蠍座８度": 　"湖面を横ぎって輝く月 ",
"蠍座９度": 　"歯科の仕事 ",
"蠍座１０度": 　"親睦夕食会 ",
"蠍座１１度": 　"救助される溺れた男",
"蠍座１２度": 　"大使館の舞踏会",
"蠍座１３度": 　"実験をしている発明家",
"蠍座１４度": 　"仕事をしている電話接続士",
"蠍座１５度": 　"５つの砂山のまわりで遊ぶ子供たち",
"蠍座１６度": 　"いきなり笑い出す少女の顔 ",
"蠍座１７度": 　"自分自身の子供の父である女",
"蠍座１８度": 　"豪華な秋色の森",
"蠍座１９度": 　"聴いてはしゃべっているオウム",
"蠍座２０度": 　"２つの暗いカーテンを横に引っ張っている女",
"蠍座２１度": 　"職務放棄兵士",
"蠍座２２度": 　"鴨に向かって進み出るハンター",
"蠍座２３度":　　"妖精に変容するウサギ",
"蠍座２４度": 　"一人の男の話を聴くために山から降りてきた群集",
"蠍座２５度": 　"Ｘ線",
"蠍座２６度": 　"キャンプをつくっているインディアンたち ",
"蠍座２７度": 　"行進している軍楽隊",
"蠍座２８度": 　"自分の領土に近づく妖精たちの王 ",
"蠍座２９度":　"酋長に自分の子供たちの命ごいをするインディアンの女性",
"蠍座３０度": 　"ハロウィンのわるふざけ",
"射手座１度": 　"共和主義の威厳ある軍隊のキャンプファイヤー",
"射手座２度": 　"白い波帽子に覆われた大洋",
"射手座３度": 　"チェスをする２人の男",
"射手座４度": 　"歩くことを学んでいる小さな子供",
"射手座５度": 　"木の高いところにいる老いたフクロウ",
"射手座６度": 　"クリケットゲーム ",
"射手座７度": 　"ドアをノックするキューピッド ",
"射手座８度": 　"内部で形成されている岩やその他のもの ",
"射手座９度": 　"階段で子供たちを連れている母親 ",
"射手座１０度": 　"金髪の幸運の女神 ",
"射手座１１度": 　"寺院の左側にある物質的悟りをもたらすランプ",
"射手座１２度": 　"ときの声をあげる鷹に変化する旗 ",
"射手座１３度": 　"明るみに出る未亡人の過去",
"射手座１４度": 　"ピラミッドとスフィンクス",
"射手座１５度": 　"自分の影を探すグラウンドホッグ",
"射手座１６度": 　"船を見ているカモメ ",
"射手座１７度": 　"復活祭の日の出の礼拝 ",
"射手座１８度": 　"日除け帽をかぶっている小さな子供たち ",
"射手座１９度": 　"住処を移動するペリカン ",
"射手座２０度": 　"氷を切り出す男たち ",
"射手座２１度": 　"借りた眼鏡をかけている子供と犬 ",
"射手座２２度": 　"中国のランドリー",
"射手座２３度":　　"移民が入国する ",
"射手座２４度": 　"家のドアにとまっている青い鳥 ",
"射手座２５度": 　"玩具のウマに乗っている小太りの少年",
"射手座２６度": 　"旗手 ",
"射手座２７度": 　"彫刻家",
"射手座２８度": 　"美しい流れにかけられた古い橋 ",
"射手座２９度":　"芝を刈る太った少年 ",
"射手座３０度": 　"法王",
"山羊座１度": 　"認識を求めるインディアンの酋長 ",
"山羊座２度": 　"3つのステンドグラスの窓、一つは爆撃で損傷している ",
"山羊座３度": 　"成長と理解に対して受容的な人間の魂 ",
"山羊座４度": 　"大きなカヌーへ乗り込む一団 ",
"山羊座５度": 　"カヌーを漕ぎ戦争の踊りを踊っているインディアン ",
"山羊座６度": 　"暗いアーチのある小道と底にひかれた１０本の丸太 ",
"山羊座７度": 　"力のあるベールに隠れた予言者 ",
"山羊座８度": 　"しあわせそうに歌う家の中の鳥 ",
"山羊座９度": 　"ハープを運ぶ天使 ",
"山羊座１０度": 　"手から餌をもらうアホウドリ ",
"山羊座１１度": 　"キジの大きな群れ",
"山羊座１２度": 　"講義をする自然の学徒 ",
"山羊座１３度": 　"火の崇拝者 ",
"山羊座１４度": 　"花崗岩に刻まれた古代の浮き彫り ",
"山羊座１５度": 　"病院の子供病棟にあるたくさんのおもちゃ ",
"山羊座１６度": 　"体操着の少年少女 ",
"山羊座１７度": 　"密かに裸で入浴する少女 ",
"山羊座１８度": 　"イギリスの国旗 ",
"山羊座１９度": 　"大きな買い物袋を下げた５歳程度の子供 ",
"山羊座２０度": 　"歌っている隠れた合唱隊 ",
"山羊座２１度": 　"リレー競走 ",
"山羊座２２度": 　"敗北を優美に認める将軍 ",
"山羊座２３度":　　"戦争での勇敢さをたたえる2つの賞 ",
"山羊座２５度": 　"東洋の布を扱う商人 ",
"山羊座２６度": 　"水の妖精 ",
"山羊座２７度": 　"山の巡礼 ",
"山羊座２８度": 　"大きな養鶏場 ",
"山羊座２９度":　"お茶の葉を読んでいる女 ",
"山羊座３０度": 　"秘密のビジネス会議 ",
"水瓶座１度": 　"古いレンガ造りの伝道所 ",
"水瓶座２度": 　"予期されなかった雷雨 ",
"水瓶座３度": 　"海軍からの脱走兵 ",
"水瓶座４度": 　"インドのヒーラー ",
"水瓶座５度": 　"先祖の委員会 ",
"水瓶座６度": 　"ミステリー劇の演技者 ",
"水瓶座７度": 　"卵から生まれた子供 ",
"水瓶座８度": 　"美しい衣装を着た蝋人形 ",
"水瓶座９度": 　"鷹に変化する旗 ",
"水瓶座１０度": 　"一時的だと証明される人気   ",
"水瓶座１１度": 　"自分のひらめきと向き合う男 ",
"水瓶座１２度": 　"上へと順に並ぶ階段の上の人々 ",
"水瓶座１３度": 　"バロメーター ",
"水瓶座１４度": 　"トンネルに入る列車 ",
"水瓶座１５度": 　"フェンスの上にとまっている２羽のラブバード ",
"水瓶座１６度": 　"机に座っている偉大なビジネスマン ",
"水瓶座１７度": 　"ガードをしている番犬 ",
"水瓶座１８度": 　"仮面がはがされた男 ",
"水瓶座１９度": 　"消しとめられた山火事 ",
"水瓶座２０度": 　"大きな白い鳩、メッセージの担い手 ",
"水瓶座２１度": 　"絶望し幻滅した女 ",
"水瓶座２２度": 　"子供たちが遊ぶために床にひかれた布 ",
"水瓶座２３度":　　"座ってすべての手足を振っている大きな熊 ",
"水瓶座２４度": 　"情熱に背を向け自分の経験により教えている男  ",
"水瓶座２５度": 　"右の羽がより完全に形成されている蝶 ",
"水瓶座２６度": 　"水圧計 ",
"水瓶座２７度": 　"スミレで満たされた古代の陶器 ",
"水瓶座２８度": 　"倒されのこぎりで切られた木 ",
"水瓶座２９度":　"さなぎから出てくる蝶 ",
"水瓶座３０度": 　"アーダスの咲いている野原",
"魚座１度": 　"公共の市場 ",
"魚座２度": 　"ハンターから隠れているリス ",
"魚座３度": 　"化石化された森 ",
"魚座４度": 　"狭い半島での交通渋滞 ",
"魚座５度": 　"教会のバザー ",
"魚座６度": 　"正装して行進している将校たち ",
"魚座７度": 　"岩の上に横たわっている十字架 ",
"魚座８度": 　"ラッパを吹く少女 ",
"魚座９度": 　"騎手 ",
"魚座１０度": 　"雲の上の飛行家   ",
"魚座１１度": 　"光を探している男たち ",
"魚座１２度": 　"新参者たちの試験 ",
"魚座１３度": 　"博物館にある刀 ",
"魚座１４度": 　"キツネ皮をまとった女性 ",
"魚座１５度": 　"部下の訓練を準備している将校 ",
"魚座１６度": 　"ひらめきの流れ ",
"魚座１７度": 　"復活祭の歩道 ",
"魚座１８度": 　"巨大なテント ",
"魚座１９度": 　"弟子を指導する巨匠 ",
"魚座２０度": 　"夕食のために用意されたテーブル ",
"魚座２１度": 　"小さな白い羊と子供と中国人の召し使い ",
"魚座２２度": 　"シナイから新しい法則を持ち降りてくる男 ",
"魚座２３度":　　"精神主義的な現象 ",
"魚座２４度": 　"人の住んでいる島  ",
"魚座２５度": 　"聖職の浄化 ",
"魚座２６度": 　"影響を分割する新月 ",
"魚座２７度": 　"収穫の月 ",
"魚座２８度": 　"満月の下の肥沃な庭 ",
"魚座２９度":　"プリズム ",
"魚座３０度": 　"巨大な石の顔 "

  // ※お手持ちの全360個のリストをここに追加・貼り付けできます！
};

// ==========================================================================
// 2. 度数入力からサビアンを自動算出する処理（切り上げロジック）
// ==========================================================================
function calculateSabian() {
  // 1. 各入力要素を取得
  const signElem = document.getElementById('single-sign');
  const degreeElem = document.getElementById('single-degree');
  const sabianElem = document.getElementById('single-sabian');

  if (!signElem || !degreeElem || !sabianElem) return;

  const sign = signElem.value;
  const degreeInput = degreeElem.value;

  // 未入力・数値でない場合は出力を空にする
  if (degreeInput === '' || isNaN(degreeInput)) {
    sabianElem.value = '';
    return;
  }

  const degreeVal = parseFloat(degreeInput);

  // 0〜29.9度の範囲チェック
  if (degreeVal < 0 || degreeVal >= 30) {
    sabianElem.value = '0〜29.9の範囲で入力してください';
    return;
  }

  // 切り上げでサビアン度数を計算（例: 14.2度 -> 15度）
  let sabianDegree = Math.floor(degreeVal) + 1;
  if (sabianDegree > 30) sabianDegree = 30;

  // 半角数字を全角数字に変換（1 -> １）
  const zenkakuDegree = String(sabianDegree).replace(/[0-9]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });

  // 探したい基本キー（例: "牡羊座１５度"）
  const targetKey = `${sign}${zenkakuDegree}度`;

  // データ辞書（SABIAN_DICTIONARY）が存在するかチェック
  if (typeof SABIAN_DICTIONARY !== 'undefined') {
    // 特殊なスペース等が入っていてもマッチするように、余白を除去して照合
    const matchedKey = Object.keys(SABIAN_DICTIONARY).find(function(k) {
      return k.trim() === targetKey;
    });

    if (matchedKey && SABIAN_DICTIONARY[matchedKey]) {
      const symbolText = SABIAN_DICTIONARY[matchedKey].trim();
      sabianElem.value = `${targetKey}：${symbolText}`;
    } else {
      sabianElem.value = `${targetKey}（データが見つかりません）`;
    }
  } else {
    sabianElem.value = 'データ辞書（SABIAN_DICTIONARY）が見つかりません';
  }
}
// サインを変更した際にもサビアンを再計算
document.getElementById('single-sign').addEventListener('change', calculateSabian);

// ==================== タブ切り替え処理 ====================
function switchTab(tabId) {
  // すべてのタブコンテンツを非表示
  const contents = document.querySelectorAll('.tab-content');
  contents.forEach(content => content.classList.remove('active'));

  // すべてのタブボタンの選択状態を解除
  const buttons = document.querySelectorAll('.tab-button');
  buttons.forEach(btn => btn.classList.remove('active'));

  // 選択されたタブとボタンを有効化
  const targetContent = document.getElementById(tabId);
  if (targetContent) targetContent.classList.add('active');

  // クリックされたボタンのハイライト
  const activeButton = Array.from(buttons).find(btn => 
    btn.getAttribute('onclick')?.includes(tabId)
  );
  if (activeButton) activeButton.classList.add('active');
}

// ==================== アスペクト行の動的追加 ====================

// 1. ネイタル／コンポジット用（単一アスペクト行）
function addAspectRow(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (container.children.length >= 8) {
    alert('アスペクトは最大8個まで追加できます');
    return;
  }

  const row = document.createElement('div');
  row.className = 'aspect-row';
  row.innerHTML = `
    <select class="planet-1">
      <option value="太陽">太陽</option>
      <option value="月">月</option>
      <option value="水星">水星</option>
      <option value="金星">金星</option>
      <option value="火星">火星</option>
      <option value="木星">木星</option>
      <option value="土星">土星</option>
      <option value="天王星">天王星</option>
      <option value="海王星">海王星</option>
      <option value="冥王星">冥王星</option>
      <option value="ドラゴンヘッド">ドラゴンヘッド</option>
      <option value="ドラゴンテイル">ドラゴンテイル</option>
    </select>
    <select class="aspect-type">
      <option value="コンジャクション（0度）">コンジャクション（0度）</option>
      <option value="セクスタイル（60度）">セクスタイル（60度）</option>
      <option value="スクエア（90度）">スクエア（90度）</option>
      <option value="トライン（120度）">トライン（120度）</option>
      <option value="オポジション（180度）">オポジション（180度）</option>
    </select>
    <select class="planet-2">
      <option value="月">月</option>
      <option value="太陽">太陽</option>
      <option value="水星">水星</option>
      <option value="金星">金星</option>
      <option value="火星">火星</option>
      <option value="木星">木星</option>
      <option value="土星">土星</option>
      <option value="天王星">天王星</option>
      <option value="海王星">海王星</option>
      <option value="冥王星">冥王星</option>
      <option value="ドラゴンヘッド">ドラゴンヘッド</option>
      <option value="ドラゴンテイル">ドラゴンテイル</option>
    </select>
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(row);
}

// 2. 2重円（シナストリー）／コンポジット時期用（ラベル指定アスペクト行）
function addDoubleAspectRow(containerId, label1, label2) {
  const container = document.getElementById(containerId);
  if (!container) return;

  if (container.children.length >= 8) {
    alert('アスペクトは最大8個まで追加できます');
    return;
  }

  const row = document.createElement('div');
  row.className = 'aspect-row';
  row.innerHTML = `
    <select class="planet-1">
      <option value="${label1}:太陽">${label1}:太陽</option>
      <option value="${label1}:月">${label1}:月</option>
      <option value="${label1}:水星">${label1}:水星</option>
      <option value="${label1}:金星">${label1}:金星</option>
      <option value="${label1}:火星">${label1}:火星</option>
      <option value="${label1}:木星">${label1}:木星</option>
      <option value="${label1}:土星">${label1}:土星</option>
      <option value="${label1}:天王星">${label1}:天王星</option>
      <option value="${label1}:海王星">${label1}:海王星</option>
      <option value="${label1}:冥王星">${label1}:冥王星</option>
      <option value="ドラゴンヘッド">ドラゴンヘッド</option>
      <option value="ドラゴンテイル">ドラゴンテイル</option>
    </select>
    <select class="aspect-type">
      <option value="コンジャクション（0度）">コンジャクション（0度）</option>
      <option value="セクスタイル（60度）">セクスタイル（60度）</option>
      <option value="スクエア（90度）">スクエア（90度）</option>
      <option value="トライン（120度）">トライン（120度）</option>
      <option value="オポジション（180度）">オポジション（180度）</option>
    </select>
    <select class="planet-2">
      <option value="${label2}:太陽">${label2}:太陽</option>
      <option value="${label2}:月">${label2}:月</option>
      <option value="${label2}:水星">${label2}:水星</option>
      <option value="${label2}:金星">${label2}:金星</option>
      <option value="${label2}:火星">${label2}:火星</option>
      <option value="${label2}:木星">${label2}:木星</option>
      <option value="${label2}:土星">${label2}:土星</option>
      <option value="${label2}:天王星">${label2}:天王星</option>
      <option value="${label2}:海王星">${label2}:海王星</option>
      <option value="${label2}:冥王星">${label2}:冥王星</option>
      <option value="ドラゴンヘッド">ドラゴンヘッド</option>
      <option value="ドラゴンテイル">ドラゴンテイル</option>
    </select>
    <button type="button" class="remove-btn" onclick="this.parentElement.remove()">✕</button>
  `;
  container.appendChild(row);
}

// ページ読み込み時に初期で各1行追加しておく
window.addEventListener('DOMContentLoaded', () => {
  addAspectRow('natal-aspect-list');
  addDoubleAspectRow('synastry-aspect-list', '1人目', '2人目');
  addAspectRow('composite-aspect-list');
  addDoubleAspectRow('comp-transit-aspect-list', 'コンポジット', '運行天体');
});

// ==================== サビアンシンボル自動計算 ====================
function calculateSabian() {
  const signElem = document.getElementById('single-sign');
  const degreeElem = document.getElementById('single-degree');
  const sabianElem = document.getElementById('single-sabian');

  if (!signElem || !degreeElem || !sabianElem) return;

  const sign = signElem.value;
  const degreeInput = degreeElem.value;

  if (degreeInput === '' || isNaN(degreeInput)) {
    sabianElem.value = '';
    return;
  }

  const degreeVal = parseFloat(degreeInput);

  if (degreeVal < 0 || degreeVal >= 30) {
    sabianElem.value = '0〜29.9の範囲で入力してください';
    return;
  }

  let sabianDegree = Math.floor(degreeVal) + 1;
  if (sabianDegree > 30) sabianDegree = 30;

  const zenkakuDegree = String(sabianDegree).replace(/[0-9]/g, function(s) {
    return String.fromCharCode(s.charCodeAt(0) + 0xFEE0);
  });

  const targetKey = `${sign}${zenkakuDegree}度`;

  // SABIAN_DICTIONARY または sabianData の両方に対応
  const dataStore = typeof SABIAN_DICTIONARY !== 'undefined' ? SABIAN_DICTIONARY : (typeof sabianData !== 'undefined' ? sabianData : null);

  if (dataStore) {
    const matchedKey = Object.keys(dataStore).find(function(k) {
      return k.trim() === targetKey;
    });

    if (matchedKey && dataStore[matchedKey]) {
      const symbolText = dataStore[matchedKey].trim();
      sabianElem.value = `${targetKey}：${symbolText}`;
    } else {
      sabianElem.value = `${targetKey}（データが見つかりません）`;
    }
  } else {
    sabianElem.value = 'データ辞書が見つかりません';
  }
}

// ==================== API呼び出し＆AI鑑定リクエスト ====================
async function requestAppraisal(type) {
  let prompt = "";
  
  // プロンプトの生成
  if (type === 'sabian') {
    const planet = document.getElementById('single-planet').value;
    const sign = document.getElementById('single-sign').value;
    const house = document.getElementById('single-house').value;
    const sabian = document.getElementById('single-sabian').value;

    prompt = `【サビアンシンボル考察】
対象天体: ${planet}
サイン: ${sign}
ハウス: ${house || '指定なし'}
サビアンシンボル: ${sabian}

上記の情報に基づき、専門的な星よみ鑑定書とアッシュからの語りかけメッセージを作成してください。`;

  } else if (type === 'natal') {
    const aspects = getAspectListText('natal-aspect-list');
    prompt = `【ネイタルアスペクト考察】
以下の配置（ネイタル）を多角的に解釈してください。
${aspects}`;

  } else if (type === 'transit') {
    const period = document.getElementById('transit-period').value;
    const natalPlanet = document.getElementById('transit-natal-planet').value;
    const aspect = document.getElementById('transit-aspect').value;
    const transPlanet = document.getElementById('transit-trans-planet').value;

    prompt = `【個人時期読み（トランジット）】
対象時期: ${period || '記載なし'}
ネイタル天体: ${natalPlanet}
アスペクト: ${aspect}
運行（トランジット）天体: ${transPlanet}

この時期における運気の影響と過ごし方のアドバイスを鑑定してください。`;

  } else if (type === 'synastry') {
    const aspects = getAspectListText('synastry-aspect-list');
    prompt = `【２重円相性考察（シナストリー）】
以下の2人の天体間アスペクトを解釈し、お互いに与え合う影響や惹かれ合うポイント、注意点を鑑定してください。
${aspects}`;

  } else if (type === 'composite') {
    const aspects = getAspectListText('composite-aspect-list');
    prompt = `【コンポジット相性考察】
二人の合成図（コンポジットチャート）における以下の配置を解釈し、この二人が生み出す関係性のテーマやユニットとしての強みを鑑定してください。
${aspects}`;

  } else if (type === 'comp-transit') {
    const aspects = getAspectListText('comp-transit-aspect-list');
    prompt = `【コンポジット時期読み（ふたりの未来）】
二人のコンポジット天体と運行（トランジット）天体の以下のアスペクトを解釈し、このふたりに訪れるターニングポイントや時期的なテーマを鑑定してください。
${aspects}`;

  // ▼▼▼ ここにタロットの処理を追加しました！ ▼▼▼
  } else if (type === 'tarot') {
    const topic = document.getElementById('tarot-topic').value || '指定なし';
    const count = document.getElementById('tarot-spread-count').value;
    const container = document.getElementById('tarot-cards-container');
    const rows = container.querySelectorAll('.tarot-card-row');
    
    let cardsInfo = [];
    rows.forEach((row, index) => {
      const card = row.querySelector('.tarot-card-select').value;
      const pos = row.querySelector('.tarot-position-select').value;
      const roleSelect = row.querySelector('.tarot-role-select').value;
      
      let finalRole = roleSelect;
      if (roleSelect === '自由記述（直接入力）') {
        const customVal = row.querySelector('.tarot-custom-role').value;
        finalRole = customVal ? customVal : `ポジション${index + 1}`;
      }

      cardsInfo.push(`${index + 1}枚目【${finalRole}】: ${card}（${pos}）`);
    });

    prompt = `【タロットリーディング考察（大アルカナ）】
相談テーマ: ${topic}
展開枚数: ${count}枚引き
カード配置:
${cardsInfo.join('\n')}

上記を展開されたカードの象徴・ストーリーとして総合的に解釈し、専門的かつ温かい鑑定書とアッシュからのメッセージを作成してください。`;
  }

  // 画面のローディング表示
  const resultSection = document.getElementById('result-section');
  const bodyElem = document.getElementById('res-appraisal-body');
  const ashElem = document.getElementById('res-ash-message');

  resultSection.classList.remove('hidden');
  bodyElem.textContent = '展開されたカード（または星の配置）を解読中... しばらくお待ちください。';
  ashElem.textContent = '「ハル、じっくりカードの声（星々のメッセージ）を聴いているよ。少し待っていてね。」';

  try {
    // Vercel Serverless Function へ送信
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: prompt })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || '通信エラーが発生しました');
    }

    // 返却されたテキストを分割（鑑定書とアッシュのメッセージ）
    const fullText = data.text;
    const parts = fullText.split('---');

    if (parts.length >= 2) {
      bodyElem.innerText = parts[0].trim();
      ashElem.innerText = parts[1].trim();
    } else {
      bodyElem.innerText = fullText;
      ashElem.innerText = '「これが受け取ったメッセージだよ。ハルの力になれたら嬉しいな。」';
    }

  } catch (err) {
    bodyElem.textContent = `エラーが発生しました: ${err.message}`;
    ashElem.textContent = '「ごめんね、うまく声が聞き取れなかったみたいだ。もう一度試してくれるかい？」';
  }
}
// 補助関数：リストから文字列を組み立てる
function getAspectListText(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return '配置なし';

  const rows = container.querySelectorAll('.aspect-row');
  let result = [];

  rows.forEach((row, i) => {
    const p1 = row.querySelector('.planet-1').value;
    const asp = row.querySelector('.aspect-type').value;
    const p2 = row.querySelector('.planet-2').value;
    result.push(`${i + 1}. ${p1} - ${asp} - ${p2}`);
  });

  return result.join('\n');
}

// 補助関数：テキストコピー機能
function copyText(elementId, name) {
  const text = document.getElementById(elementId).innerText;
  navigator.clipboard.writeText(text).then(() => {
    alert(`${name}をコピーしました！`);
  }).catch(() => {
    alert('コピーに失敗しました');
  });
}

// 大アルカナ22枚の定義
const MAJOR_ARCANA = [
  "0 愚者", "I 魔術師", "II 女教皇", "III 女帝", "IV 皇帝", 
  "V 法皇", "VI 恋人", "VII 勝利者（戦車）", "VIII 力量（力）", "IX 隠者", 
  "X 運命の輪", "XI 正義", "XII 吊るされた男", "XIII 死神", "XIV 節制", 
  "XV 悪魔", "XVI 塔", "XVII 星", "XVIII 月", "XIX 太陽", 
  "XX 審判", "XXI 世界"
];

// 役割のプリセット選択肢
const TAROT_ROLES = [
  "過去", "現在", "未来", "その先の未来", 
  "自分の気持ち", "相手の気持ち", "障害・対策", "アドバイス", "最終結果", "自由記述（直接入力）"
];

// 枚数変更に合わせて入力欄を生成する関数
function updateTarotCardsUI() {
  const container = document.getElementById('tarot-cards-container');
  if (!container) return;

  const count = parseInt(document.getElementById('tarot-spread-count').value, 10);
  container.innerHTML = '';

  for (let i = 1; i <= count; i++) {
    const cardRow = document.createElement('div');
    cardRow.className = 'tarot-card-row';
    cardRow.style.cssText = 'background: rgba(10, 14, 28, 0.6); padding: 12px; border-radius: 8px; margin-bottom: 10px; border: 1px solid #3a3d52;';

    // 大アルカナのプルダウン
    let optionsHTML = MAJOR_ARCANA.map(card => `<option value="${card}">${card}</option>`).join('');
    
    // 役割プリセットのプルダウン
    let roleOptionsHTML = TAROT_ROLES.map(role => `<option value="${role}">${role}</option>`).join('');

    cardRow.innerHTML = `
      <div style="font-weight: bold; color: #f7d57f; margin-bottom: 8px;">カード ${i}</div>
      <div class="form-grid" style="grid-template-columns: 1fr 1fr 1fr;">
        <div class="form-group">
          <label>カード選択</label>
          <select class="tarot-card-select">${optionsHTML}</select>
        </div>
        <div class="form-group">
          <label>向き</label>
          <select class="tarot-position-select">
            <option value="正位置">正位置</option>
            <option value="逆位置">逆位置</option>
          </select>
        </div>
        <div class="form-group">
          <label>役割（ポジショニング）</label>
          <select class="tarot-role-select" onchange="toggleCustomRoleInput(this)">
            ${roleOptionsHTML}
          </select>
        </div>
      </div>
      <div class="form-group custom-role-group" style="margin-top: 8px; display: none;">
        <input type="text" class="tarot-custom-role" placeholder="役割を自由に入力（例: 彼の本音、アドバイスの補足など）">
      </div>
    `;

    container.appendChild(cardRow);
  }
}

// 「自由記述」が選ばれた時だけテキスト入力欄を出す処理
function toggleCustomRoleInput(selectElem) {
  const customGroup = selectElem.parentElement.parentElement.parentElement.querySelector('.custom-role-group');
  if (selectElem.value === '自由記述（直接入力）') {
    customGroup.style.display = 'block';
  } else {
    customGroup.style.display = 'none';
  }
}

// DOM読み込み時に初期（3枚引き）をセット
window.addEventListener('DOMContentLoaded', () => {
  // 既存のDOMContentLoaded処理がある場合はその中に追記
  if (document.getElementById('tarot-cards-container')) {
    updateTarotCardsUI();
  }
});