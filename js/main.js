const cardsData = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%E5%8F%B0%E5%8D%97%E5%B8%82%E4%BA%94%E5%A6%83%E5%BB%9F.jpg",
    lat: 22.982081,
    lng: 120.205214,
    title: "五妃廟",
    region: "南部",
    history: "五妃廟原址為魁斗山，因「魁」與「桂」音近，古人常以諧音稱為「桂子山」，又因地處偏僻，雜草叢生，故也俗稱「鬼仔山」。1681年東寧政變後，朱術桂決意殉國，1683年施琅攻下澎湖後，他召妾侍辭別，五妃（袁氏、王氏、秀姑、梅姐、荷姐）堅持隨主共死，於中堂自縊。朱術桂將她們安葬於南門外魁斗山後，即今台南市五妃廟址。\n1746年巡台御史命方邦基修墳，立「寧靖王從死五妃墓」碑，後人因此稱「五妃廟」。1751年、光緒年間與1927年日治時期皆曾整修，1929年並設立周圍綠地公園。二戰末期美軍空襲台南，五妃廟嚴重受損，多數匾額與建築毀壞，僅存部分文物。\n戰後廟宇周遭多為違建，環境髒亂，至1975年至1977年間，台南市政府進行古蹟整修計畫，才逐步恢復整潔與規模。1983年五妃廟被列為一級古蹟，1997年改為國定古蹟。1998年修復完成，現為今貌。2020年，文化部將其劃為台灣首座古蹟保存區，進行周邊整體保存與規劃工作。",
    address: "臺南市中西區五妃街201號",
    description: "五妃廟，昔稱五烈墓、五妃祀、寧靖王從死五妃墓，位於今臺灣臺南市中西區，五妃是指明寧靖王朱術桂從死之五位妃妾：袁氏、王氏、秀姑、梅姐及荷姐。五妃廟乃坐西南朝東北，為一座單進兩護龍式的古建築，最早建於1683年（明鄭永曆三十七年，清康熙二十二年）。由1683年迄今有三百餘年，墓傍有一小祠，為義靈君墓，係當年殉死二侍宦埋骨之處。五妃廟現為中華民國文化部所頒訂之國定古蹟，目前由臺南市政府文化觀光處所管理，並設有紀念碑、解說牌等，也是當代情侶夫妻間求忠貞祭拜的廟宇。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2021%E5%B9%B4%E7%9A%84%E5%84%84%E8%BC%89%E9%87%91%E5%9F%8E%E5%9F%8E%E9%96%80.jpg/1024px-2021%E5%B9%B4%E7%9A%84%E5%84%84%E8%BC%89%E9%87%91%E5%9F%8E%E5%9F%8E%E9%96%80.jpg",
    title: "二鯤鯓砲臺（億載金城）",
    lat:22.988531,
    lng: 120.160207,
    address: "臺南市安平區光州路三號",
    region: "南部",
    history: "二鯤鯓砲臺，原名安平砲臺或三鯤鯓砲臺，是清朝於同治十三年（1874年）為防禦日軍侵台而建的重要軍事設施，由沈葆楨主導興建，並由法國工程師帛爾陀設計，參考巴黎外圍防禦工事，於光緒二年（1876年）完工。砲臺呈方形，四角設有稜堡，四周環以壕溝，結構堅固，具備防禦與近戰功能。日治時期因失修而荒廢，但後被指定為史蹟名勝，並於戰後數度整修，1975年更增建沈葆楨銅像。1983年列為一級古蹟，1997年改為國定古蹟。現今為重要文化遺產，保留部分原始設施供人參觀",
    description: "二鯤鯓砲臺，或作二鯤鯓礮臺，舊稱三鯤鯓礮臺、安平大礮（砲）臺，現在一般俗稱為億載金城（台羅：It-tāi-kim-siânn），是一座清朝時建立的砲臺。位於臺灣臺南市安平區，為中華民國文化部所管轄的國定古蹟"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%E8%87%BA%E5%8D%97%E5%AD%94%E5%AD%90%E5%BB%9F_%E5%A4%A7%E6%88%90%E5%9D%8A.JPG/250px-%E8%87%BA%E5%8D%97%E5%AD%94%E5%AD%90%E5%BB%9F_%E5%A4%A7%E6%88%90%E5%9D%8A.JPG",
    title: "臺南孔子廟",
    address: "臺南市中西區南門路2號",
    lat: 22.990523,
    lng: 120.204267,
    region: "南部",
    history: "臺南孔子廟創建於明永曆十九年（1665年），由明鄭重臣陳永華依據「十年成長，十年教養，十年成聚」的復國方略，建議鄭經興建廟學以培育人才，因此在承天府（今臺南）寧南坊桂仔埔設立「先師聖廟」與「明倫堂」，成為臺灣首座孔廟與最高學府。其時採用分級科舉制度，透過社學、府學、太學層層選才，培養出如陳夢球、蘇峨等清初著名學者。\n清治時期，康熙二十四年（1685年）改設為「臺灣府學」，歷任官員如王之麟、陳璸、蔣元樞等人多次擴建與整修，增設大成殿、崇聖祠、泮池、文昌閣等設施，格局逐步完備，並於乾隆年間達到最大規模。然而嘉慶至同治年間因地震等因素導致多處毀損。\n日治初期，孔廟因年久失修與戰事，曾作為日軍駐紮地與臺南國語傳習所，後來更設立為臺南公學校。至1917年由臺南廳長枝德二推動大規模整修，奠定今日建築格局，但明倫堂部分設施未復建。1923年，日本皇太子裕仁參訪孔廟，提升其文化象徵地位。1930年代起，孔廟曾受皇民化運動波及，甚至被設置神棚，幸經時任市長羽鳥又男阻止，並恢復祭孔儀式。\n二戰末期（1945年）盟軍空襲臺南，孔廟大成殿、崇聖祠等多處毀損。戰後由省府主席魏道明於1948年發起整修，重建主要建物。此後市府多次修繕，包括明倫堂、樂器庫、文昌閣等，並於1965年慶祝孔廟創建三百年，立碑紀念。\n1983年，臺南孔子廟被列為第一批國定古蹟之一，1985至1989年間展開大規模整修，總經費逾一億元，是自1918年以來最大一次修復。1997年起隨文化資產法修法改列為「國定古蹟」，並由國立成功大學協助規劃孔廟文化園區，涵蓋周邊歷史建築與景點，成為今日結合古蹟保存與文化觀光的重要據點。",
    description: "臺南孔子廟，位於臺灣臺南市中西區，是臺灣最早的文廟，建於明鄭永曆十九年（西元1665年）。清領初期時曾是全臺童生唯一入學之所，因而稱「全臺首學」。臺南孔廟於民國72年（1983年）12月28日公告為祠廟類國家一級古蹟，1997年《文資法》修法後為國定古蹟。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/%E5%9C%8B%E6%97%97%E9%A3%84%E6%8F%9A%E7%B4%85%E6%AF%9B%E5%9F%8E.JPG",
    title: "紅毛城",
    address: "新北市淡水區中正路28巷1號",
    lat: 25.17543,
    lng: 121.432942,
    region: "北部",
    history:"紅毛城見證了臺灣自西班牙、荷蘭、鄭氏、清治、日治時期乃至現代的歷史變遷，這座城堡不僅是政權更替的遺跡，也是文化交流的重要地標。\n\n西班牙統治時期（1626–1642）\n西班牙於1626年派遣瓦德斯率領艦隊從馬尼拉出發，經過征討呂宋島北部的原住民後，於5月16日佔領雞籠灣，建立聖薩爾瓦多城作為統治中心，並試圖發展臺灣為傳教據點。然而，西班牙統治因糧食短缺及原住民反抗而屢遭挫敗，最終於1642年被荷蘭人攻陷並撤離。\n\n荷蘭統治時期（1624–1662）\n荷蘭人最早於1624年在大員（今臺南）建立貿易據點，並在淡水與雞籠地區擴展勢力。1642年，荷蘭人佔領雞籠後，開始在聖多明哥城原址建立新城砦，以鞏固硫磺與鹿皮貿易。他們於1643年開始築城，1646年正式完工，並命名為安東尼堡（即紅毛城）。該城堡由四座堡壘組成，分別為迪門堡、瑪莉亞堡及硫磺堡，成為北臺灣的軍事要塞。\n\n鄭氏時期（1662–1683）\n1661年，鄭成功北上攻打荷蘭勢力，淡水地區的原住民也趁機反抗荷蘭人。1662年，鄭成功正式收復南臺灣，荷蘭人仍駐守淡水與雞籠，直到1668年撤退。1683年，清軍攻打雞籠與淡水，鄭氏軍隊最終向清廷投降。\n\n清治時期（1683–1895）\n清政府統治臺灣後，紅毛城一度荒廢，直到1724年才由地方官員重新修葺。19世紀初，清軍在城外建造砲台，並使淡水港成為重要商港。1861年，英國在紅毛城設立領事館，並於1867年與清政府簽訂永久租約，開始長期使用紅毛城作為外交機構。\n\n日治時期（1895–1945）\n1895年，臺灣進入日本統治時期，紅毛城仍作為英國領事館。英國人增建宿舍及登山車道，並在庭院中設置網球場與花園。1930年代，日本政府將紅毛城列為臺北州指定史蹟。1941年，太平洋戰爭爆發，紅毛城遭到查封，英國領事被送往日本本土。\n\n戰後時期（1945–1980）\n1946年，英國重新接管紅毛城並復設領事館。1950年，英國與中華民國斷交，但仍保持領事館業務。直到1972年英國正式撤館，並委託澳洲與美國代管。1980年，中華民國政府宣布收回紅毛城，並將其轉為國有資產，完成交接後升起青天白日滿地紅旗。\n\n文化資產保存與現代發展\n1983年，紅毛城被指定為臺閩地區一級古蹟，1984年整修後正式開放參觀。1997年，紅毛城被列為國定古蹟，並在2002年獲選為臺灣世界遺產潛力點之一。2005年成立淡水古蹟博物館，成為臺灣重要文化景點。\n今日的紅毛城不僅是歷史遺跡，更是淡水的重要觀光地標，吸引無數遊客探索其背後的故事。",
    description: "紅毛城古蹟區（臺灣話：Âng-mn̂g-siânn），又稱前英國駐台北領事館及官邸，古稱聖多明哥城、安東尼堡，是一座位於台灣新北市淡水區的古蹟。最早建城是在1628年統治台灣北部的西班牙人所興建的「聖多明哥城」，但後來聖多明哥城被摧毀，1644年荷蘭人於聖多明哥城原址附近重建，並命名為「安東尼堡」。而由於當時漢人稱呼荷蘭人為紅毛，因此這個城就被他們稱作「紅毛城」。1724年，臺灣府淡水捕盜同知王汧開始整修紅毛城，增建了四座外圍城門。1867年以後，紅毛城開始由英國政府租用作為領事館，並在旁興建領事官邸。太平洋戰爭期間，日本向英美宣戰而查封紅毛城，直到戰後輾轉交還予英方。之後，英國雖於1950年和中華民國斷交，但仍持續使用紅毛城作為領事館直到1972年與中華人民共和國升格為大使級外交關係才停止運作，並在之後依序由澳大利亞與美國代為管理。一直到1980年，該城的產權才移交至中華民國政府手中，指定為一級古蹟並開放供民眾參觀。紅毛城被視為台灣現存最古老的建築之一，也是中華民國內政部所頒訂的國定古蹟。紅毛城古蹟區包含紅毛城主堡、前英國領事官邸以及清治時期所建造的南門。其中紅毛城主堡是臺灣最古老的完整建築物，前方置有四尊嘉慶18年製成的古炮；前英國領事官邸在主堡東側，為兩層式洋樓；南門則為古蹟區內唯一的中國式建築，使用觀音石砌成。另外，園區內還有一座從山腳下移上來的「寶順行石碑。全園區由新北市立淡水古蹟博物館營運。「淡水紅毛城及其週遭歷史建築群」為文化部遴選之臺灣世界遺產潛力點之一，其涵蓋範圍包含潛力點本身及緩衝區，從淡水至竹圍，約與新北市淡水區相當，總面積為70.6565平方公里。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Former_British_Consulate_at_Takao.jpg",
    title: "打狗英國領事館及官邸",
    region: "南部",
    lat: 22.618849,
    lng: 120.266948,
    history:"1858年《天津條約》簽訂後，臺灣開放安平、打狗等港口，英國於1861年正式在打狗開埠，1864年設海關，並設立領事館。起初租用廢船「三葉號」作為臨時館舍，1865年改租旗後洋行建築，1867年續租，1876年英國政府永久承租哨船頭地段，1879年落成「打狗領事館及官邸」。此地為英國在台的重要外交與商務據點，並擁領事裁判權。\n\n日治後，英國於1901年整修建物，改木構為磚造迴廊。1908年因港區被劃入要塞，英國放棄使用權，並於1925年售予日方，建物陸續轉作水產試驗所與海洋觀測所。二戰期間部分建物受損。\n\n1945年戰後，建物歸中華民國政府所有，領事館作為水產研究所，官邸作為測候所。1970年代後因機構搬遷，建物荒廢損壞。1983年官邸被評定為稀有古蹟，1987年公告為市定古蹟，1999年古道也納入保護。2004年官邸重新開放，獲得園冶獎肯定，原水產試驗所後來也被認定為市定古蹟。\n\n2009年起，高雄市政府進行命名與修復工程，並於2013年整合為「打狗英國領事館文化園區」。2019年，文化部將原三處古蹟合併指定為國定古蹟「打狗英國領事館及官邸」。",
    address: "高雄市鼓山區蓮海路18號",
    description: "打狗英國領事館文化園區（英語：Former British Consulate at Takow），是位於臺灣高雄市鼓山區的歷史文化園區，古蹟群由領事館、領事官邸及一條登山古道所構成，其中領事館位於高雄港（清打狗港）口北岸的哨船頭碼頭，是清治時期英國政府於打狗掌理領事業務工作的重要據點。也是臺灣目前現存的西式建築中最為久遠者之一。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/%E5%8F%B0%E5%8C%97%E4%BF%9D%E5%AE%89%E5%AE%AE1.jpg",
    title: "大龍峒保安宮",
    lat: 25.073626,
    lng: 121.515517,
    history:"大龍峒保安宮最早於1742年由泉州同安人從家鄉白礁慈濟宮迎請保生大帝分靈來台，並在乾隆年間，隨著同安人向北遷徙至大龍峒，逐漸發展成商業中心。1802年，富商王智記與鄭、高、陳等21戶合資興建商業街，並於1805年在街市東端建廟，廟名「大龍峒保安宮」，意為保佑同安人。廟宇於1830年落成，並以「回字型」三殿結構著稱。\n\n在清朝末期，保安宮經歷多次修繕與發展，尤其是同治年間，廟宇進行了第一次大規模整修。進入日治時期後，保安宮於1896年加入日本曹洞宗，並更名為「保安禪寺」，同年設立台灣總督府國語學校第三附屬學校於廟內。廟宇在日治時期屢經修繕，並在1917年完成第二次重大重修。戰後，保安宮曾被軍眷佔用，直至1950年代進行整修。1961年，廟方建設公園並進行多次修復，1970年代後完成了凌霄寶殿的建設，並於1981年被列為二級古蹟。1990年代進行了全面整修，並於2002年完成修復工程。2003年，經過修繕後，保安宮重新開放，並於2004年獲得聯合國教科文組織亞太區文物古蹟保護獎，並於同年被列為國定古蹟。\n\n至今，大龍峒保安宮已成為台北市的重要文化遺產，不僅是宗教信仰的中心，也是歷史文化與傳統建築的代表。",
    region: "北部",
    address: "台北市大同區哈密街61號",
    description: "大龍峒保安宮，又稱大浪泵宮，是位於臺灣臺北市大同區大龍峒、鄰近臺北孔子廟的大道公廟，為泉州同安人所信仰的廟宇，建築曾獲2003年聯合國教科文組織亞太區文物古蹟保護獎榮譽獎，2018年則被指定為國定古蹟。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%E5%90%89%E5%AE%89%E6%85%B6%E4%BF%AE%E9%99%A2.jpg/500px-%E5%90%89%E5%AE%89%E6%85%B6%E4%BF%AE%E9%99%A2.jpg",
    title: "吉安慶修院",
    region: "東部",
    history:"慶修院，原名「真言宗吉野布教所」，建於1917年（大正6年），位於花蓮吉安鄉。當時日本政府為解決農村人口過剩問題，選擇較晚開發的區域設立吉野移民村，吉野布教所成為當地日人移民的宗教信仰中心。所內供奉弘法大師空海、不動明王與毘沙門天王，並設有「光明真言百萬遍」石碑及自日本四國請來的八十八尊神像，展現日式佛教的宗教文化。\n\n1945年國民政府接管台灣後，隨著日人回國，吉野布教所更名為慶修院。慶修院也根據台灣人民的佛教信仰，將本尊改為釋迦牟尼佛與觀世音菩薩。院內保持了日式庭院風格，設有不動明王像、百度石、八十八番石佛、光明真言百萬遍石碑等，並融入小橋、池塘、游魚等元素，展示傳統日式庭園的美感。\n\n隨著歲月流逝，慶修院曾長期失修，直到1964年與1972年進行過兩次修繕，但效果不彰。1997年，慶修院被列為花蓮縣定三級古蹟，並開始進行古蹟修復。2003年，花蓮縣政府完成了全面的修復工程，恢復了院內的八十八尊佛像和其他歷史文物，並讓這座具有歷史、文化與宗教價值的建築重現昔日風貌。\n\n如今，慶修院是花東地區唯一保存的日式佛寺，也是花蓮縣的縣定古蹟，吸引著大量日本遊客前來參訪。它不僅是宗教信仰的場所，更是花蓮重要的文化遺產，擁有豐富的歷史背景與觀光價值。",
    lat: 23.974302701095226,
    lng: 121.5644285095056,
    address: "吉安鄉中興路349號",
    description: "慶修院是位在臺灣花蓮縣吉安鄉的寺院古蹟。原為真言宗吉野布教所，為真言宗高野山金剛峯寺的海外別院。本尊弘法大師、脇佛不動明王和毘沙門天、創立者為川端滿二。通稱「吉安慶修院」。二戰後改為供奉本師釋迦牟尼佛和觀世音菩薩。1997年政府指定為古蹟，但仍未失去其實際宗教功能，現為觀光景點。境內有四國八十八箇所靈場之石佛。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ji%E2%80%99an_Cross_Trail_Excavation_Memorial%2C_Hualien_County_%28Taiwan%29.jpg/2560px-Ji%E2%80%99an_Cross_Trail_Excavation_Memorial%2C_Hualien_County_%28Taiwan%29.jpg",
    title: "吉安橫斷道路開鑿記念碑",
    region: "東部",
    history:"能高越嶺道最早由賽德克族德克達雅群開發，作為狩獵、貿易與遷徙路線，連接西部濁水溪流域與東部花蓮溪流域，並促成族群的遷移與發展。\n\n德克達雅群自白石出發，西遷至塔羅灣社定居後，逐步向東穿越中央山脈，到達木瓜溪流域，建立木瓜群。後來，受到來自西部的太魯閣群南下影響，木瓜群再度遷徙至銅門社，成為東西貿易的重要中介。\n\n1896年，新城事件與深堀大尉事件引發日軍與原住民的衝突，導致日本政府加強山地控制。1914年太魯閣戰爭後，臺灣總督府決定開闢能高越嶺道，1917年開始建設，1918年完成，全長90公里，連接霧社與花蓮港廳，成為東西向的主要道路。\n\n因工程險峻，許多施工人員殉職，總督府於竣工後在道路東段設立橫斷道路開鑿記念碑與殉職者之碑，並興建西寧寺，以慰靈並保佑行人。1921年，深堀神社亦於此地建設，以紀念深堀大尉。\n\n1997年，內政部將橫斷道路開鑿記念碑與殉職者之碑指定為三級古蹟，並由西寧寺負責維護。目前，能高越嶺道仍是登山愛好者的重要路線，也是臺灣山地交通史的重要見證。",
    lat: 23.948905,
    lng: 121.52323,
    address: "吉安鄉干城村吉安段4781-9號",
    description: "吉安橫斷道路開鑿記念碑，是位於臺灣花蓮縣吉安鄉干城村臺9丙線旁，題為「橫斷道路開鑿記念」的石碑，與其前方所立的殉職者之碑，是日治時期蕃務本署為紀念自大正六年（1917年）9月15日至七年（1918年）6月30日間，開鑿能高越橫斷道路東段（能高越舊道東段，初音至奇萊）完工通行（石碑上記載為1月完工），以及開鑿期間作業隊殉職人員所立的紀念碑。碑文一開始就刻著「自初音至奇萊主山」，故又稱為初音奇萊橫斷道路開鑿記念碑。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/%E5%A4%A7%E7%94%B2%E6%9E%97%E6%B0%8F%E8%B2%9E%E5%AD%9D%E5%9D%8A.jpg/500px-%E5%A4%A7%E7%94%B2%E6%9E%97%E6%B0%8F%E8%B2%9E%E5%AD%9D%E5%9D%8A.jpg",
    title: "林氏貞孝坊",
    region: "中部",
    history:"林春娘，生於清乾隆四十四年（1779年），大安中莊人，去世於同治三年（1864年），享年86歲。七歲時成為余家童養媳，原本訂婚的未婚夫余榮長於乾隆五十四年（1789年）赴鹿港經商時溺斃。林春娘當時年僅12歲，未正式結婚，且余榮長家中已無其他男性後嗣。儘管如此，林春娘決定不再改嫁，並一直侍奉余榮長的母親。她撫養過兩名過繼的族子，但其中一位早逝，另一位後來成婚並不幸去世，最終她與媳婦共同撫養幼孫。\n\n道光十二年（1832年），當地士紳劉獻廷上呈旌表，翌年台灣知府周彥與淡水同知李嗣鄴頒賜旌額。雖然家境貧困，直到道光二十八年（1848年），才在職吏張綱的提案下，募得捐款，最終於大甲城南門外建立牌坊。這些捐款來自各方支持，其中包括淡水同知黃開基和竹塹城門閥林占梅的捐助。\n\n昭和八年（1933年）大甲地區遭遇旱災，當地居民信奉林春娘的神像禱雨並得應，當時的牌坊已年久失修。地方人士發起募捐，用祈雨的餘款重修牌坊，並於昭和十年（1935年）完工。二次大戰後，民國四十年（1951年），大甲鎮瀾宮進行環境整頓，並在周圍建有矮牆，將大門設於順天路。民國六十八年（1979年）進行重修，拆除舊牆並改建新牆，將入口改設於光明路，並新增石獅一對。最終，於民國九十一年（2002年），在內政部、省民政廳與台中縣政府的補助下，進行了再次重修，相關工程於同年4月完工。\n\n林春娘的故事與她所建立的紀念牌坊，成為當地歷史與文化的重要象徵。",
    lat: 24.34464502461078,
    lng: 120.62187266718843,
    address: "大甲區順天路119號",
    description: "林氏貞孝坊是一座豎立於臺灣臺中大甲的清代貞節牌坊。該牌坊乃為表彰淡水廳大甲街地方人士余榮長之妻林春娘（文獻多記為「春娘」，而「娘」字為舊時對單名婦女之通稱，故其人原名應為「林春」，而櫟社詩人蔡子昭所撰碑記即寫有「諱春」二字）之貞孝事蹟，而興建於道光二十八年（1848年）之紀念性建築物。民國七十四年（1985年）8月19日，此牌坊經中華民國內政部指定為臺中縣三級古蹟。此外，林春娘在當地除貞孝事蹟外更有禱雨事蹟，並被當地居民奉為「貞節媽」，還有神像供奉於大甲鎮瀾宮之內，成為「大甲三神」之一。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg/250px-%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg",
    title: "赤崁樓",
    region: "南部",
    history:"台南市西部原為台江內海，當時由平埔族新港社居住。明中期，倭寇及海盜為禍，1573年林鳳的海盜集團進行了多次劫掠，新港社與明軍聯手進行反擊。隨著明朝對海盜的鎮壓，臺灣逐漸有漢人及日本人聚集，並在赤崁一帶形成商業區。\n\n荷蘭於1624年占領台灣，建立了奧蘭治城（今安平古堡），並開發大員貿易。荷蘭人與漢人及日本商人合作，逐步建立起商業和軍事據點，並在赤崁興建了普羅民遮（荷蘭名），作為行政中心。荷蘭人也將赤崁市街發展成計劃街道，並與當地西拉雅族簽訂土地買賣協議。然而，荷蘭的統治因中國戰亂與內部不滿，逐漸引發抗爭，最終於1662年鄭成功攻陷熱蘭遮城，結束荷蘭統治。\n\n鄭成功建立了台灣的東都明京，並設立承天府政府。鄭氏政權後來被鄭經接管，並將首都移至東寧。隨後，赤崁樓作為政府建築繼續存在，並成為軍事用途。\n\n清朝時期，赤崁樓經歷了多次修復，並成為台南的文化象徵。時至19世紀，隨著台灣的發展，赤崁樓逐漸荒廢，但在乾隆年間進行了修繕，並成為觀光景點。\n\n日治時期，赤崁樓被用作軍事設施，並進行多次修復。戰後，赤崁樓作為歷史館繼續運作，並於1982年被列為國定古蹟。2000年，台南市將赤崁樓周邊地區規劃為「赤崁文化園區」，進行文化再造。2022年，為了應對建築的損壞，台南市政府開始進行修復工程，預計於2024年完成。",
    address: "臺南市中西區民族路2段212號",
    lat: 22.9975,
    lng: 120.202811,
    description: "赤崁樓，又作赤崁城、赤磡城、赤坎城、赤嵌城、赤嵌樓，位於臺灣臺南市中西區。其前身為荷治時期1625年1月闢建的「普羅民遮」市街，1653年於此市街赤崁行省興建之歐式城塞，1655年完工，稱「普羅民遮城」，在地人稱為「番仔樓」，曾為全台灣島的商業中心，至清代已傾圮，僅留部分殘蹟。今日所見的赤嵌樓，大部分是漢人在荷蘭城堡之上，陸續興建的儒、道廟宇，包括海神廟、文昌閣。1960年，又由大南門城內遷來九座贔屭碑，終成今日樣貌。因此，所稱赤嵌樓，是歐式普羅民遮城殘蹟，以及海神廟、文昌閣的混合體。"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Taipei_Taiwan_Presidential-Office-Building-01a.jpg/330px-Taipei_Taiwan_Presidential-Office-Building-01a.jpg",
    title: "總統府",
    region: "北部",
    lat: 25.04,
    lng: 121.511944,
    history:"1912年1月1日，中華民國臨時政府於南京成立，總統府設於原清朝兩江總督署（今南京中國近代史遺址博物館），後於同年4月遷往北京，成為日後總統府的前身。\n\n1912年北洋政府成立，總統府初設於清陸海軍部舊址，後遷中南海豐澤園及監國攝政王府，直至1928年北洋政府結束。1917年，護法軍政府設於廣州觀音山，1923年孫中山設大元帥府於廣東士敏土廠（今孫中山大元帥府紀念館），1925年改組為國民政府，歷經武漢、南京等地遷徙。抗戰期間政府遷重慶，戰後於1946年回南京並實施憲法，結束訓政。\n\n1948年5月20日，總統府依《中華民國憲法》設立，成為輔佐國家元首的幕僚機構，設有秘書長、副秘書長、侍衛長等，並設6局2室等單位。1949年政府遷往廣州、重慶、成都，最終於12月7日決議遷至台北，總統府設於原台灣總督府介壽館。\n\n1954年設光復大陸設計研究委員會（1991年裁撤），1990年設國家統一委員會（2006年終止）。1996年總統府組織法修正，2000年成立人權諮詢小組（2020年停運），2003年設青年工作團（2004年終止），2008年增設總統府發言人與財經諮詢小組。2010年設法規委員會，2016年起陸續成立年金改革、南向政策、司法改革及原住民族轉型正義等委員會，多為任務編組，後陸續解散。其中原住民族歷史正義與轉型正義委員會於2024年5月解散。",
    address: "臺北市中正區重慶南路一段122號",
    description: "中華民國總統府廳舍位於臺灣臺北市中正區，為中華民國總統、副總統的辦公場所，中華民國政府亦於每年元旦及國慶日在此舉行升旗典禮，並且依照慣例，歷任總統皆會於升旗典禮結束後在府前廣場發表談話。總統府廳舍於1919年建成，建築風格屬辰野金吾風格，為中華民國國定古蹟。起初於臺灣日治時期作為「臺灣總督府」，中華民國政府遷臺後成為總統府機關辦公廳舍所在地，是臺灣重要的政治中樞與國家最高權力象徵。只有在特定時間才會開放給民眾入內參觀。另依《集會遊行法》第6條第1項規定，總統府及其周邊範圍，非經主管機關核准不得舉行集會、遊行。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/%E9%B9%BF%E6%B8%AF%E5%A4%A9%E5%90%8E%E5%AE%AE.JPG/330px-%E9%B9%BF%E6%B8%AF%E5%A4%A9%E5%90%8E%E5%AE%AE.JPG",
    title: "鹿港天后宮",
    region: "中部",
    lat: 24.059338,
    lng: 120.43138,
    history:"鹿港天后宮創建於明萬曆十九年（1591年），原稱天妃廟，為當地民眾祈求航海平安所建。1683年，隨施琅將軍渡海來台的媽祖神像留祀於此，成為台灣供奉「湄洲開基祖媽」的廟宇。1709年，施世榜開築八堡圳，促進移民與地方發展，1725年更捐地遷建廟宇至現址，地方人士為感念其善舉，於廟內設立祿位。\n\n清嘉慶年間廟宇傾頹，1814年由各地商郊合資整修，1815年完工。此後歷經多次修建，包括1870年代清末大修、1923年起由辜顯榮發起的十四年重修，確立今日規模。1959年媽祖千年聖誕後殿重建，1974年增建牌坊與聖恩大樓，1990年成立媽祖文物館，1994年建香客大樓。\n\n2000年代起，鹿港天后宮積極參與兩岸媽祖文化交流，2006年起多次組團赴湄洲祖廟進香，並於2009年與湄洲媽祖共同遶境福建。2010年分靈媽祖至江蘇崑山慧聚天后宮，推廣媽祖信仰。2012年起參與台灣燈會，並主辦兩岸巡安活動。2015年與朴子配天宮舉辦聯合遶境，展現信眾對媽祖的虔誠。\n\n2016年元旦舉辦兩千桌盛宴答謝媽祖，同年成功取回日治時期失去的廟前廣場土地。鹿港天后宮長年致力宗教、慈善與文化推廣，並於2019年升格為國定古蹟，成為台灣媽祖信仰的重要象徵。",
    address: "彰化縣鹿港鎮中山路430號",
    description: "鹿港天后宮，又稱鹿港媽祖宮、鹿港湄洲媽、舊祖宮，前身為鹿港天妃廟，是臺灣彰化縣鹿港鎮的信仰中心，是臺灣最早唯一奉祀湄洲天后宮天上聖母開基聖母神尊的廟宇，此尊湄洲島天上聖母是清代福建水師提督施琅將軍迎奉來台，也是世界僅存的湄洲開基天上聖母神尊。鹿港天后宮是臺灣歷史悠久的知名廟宇之一，迄今已逾四百多年，目前由中華民國文化部評定為國定古蹟。雍正三年（1725年）前述媽祖宮在施琅未入台前，即已有小廟。康熙二十二年（1683年）靖海將軍施琅攻台時，其部將興化鎮總兵吳英、海壇鎮總兵林賢、水師提標隨征都督陳蟒、魏明、水師提標右營遊擊藍理、海壇鎮標中營遊擊許英等攜帶聖母神像來台以求平安，施琅亦自湄洲嶼請湄洲媽來台。當施琅於翌年班師之際，其族姪施世榜請留神像在鹿港，以供士民參拜、許之，於是各地信徒不辭路途遙遠，來廟參拜者日益增加，香火隨之鼎盛。雍正三年（1725年）由於廟地狹隘卑溼，不敷使用，施世榜乃獻地，由諸信徒捐貲蓋廟，後改為磚造，廟門正對湄洲天后祖祠，故亦稱鹿港天后宮。施世榜因建廟有功，配享於鹿港天后宮右廂的「施耀德堂」，其旁另有供奉「大總理六品軍功官章萬春王公長生祿位」及長性師、妙來師、妙江師、普琴師、淨芳師等歷代諸僧師的蓮座。"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bangka_Lungshan_Temple_%28cropped%29.jpg/330px-Bangka_Lungshan_Temple_%28cropped%29.jpg",
    title: "艋舺龍山寺",
    region: "北部",
    lat: 25.037347,
    lng: 121.499893,
    history:"艋舺龍山寺創建於清乾隆三年（1738年），由泉州三邑商人黃典謨等人發起，成為泉州人信仰與聚會中心。寺內分為三殿式格局，正殿由三邑人捐建，後殿則由南安林姓商人獨資興建。隨著三邑人在艋舺發展商業，龍山寺成為地方政治、經濟與宗教重地。寺務由黃、林、吳三大姓掌控，商賈需繳口捐以在當地經商。\n\n嘉慶二十年（1815年）與同治六年（1867年）兩次大修，均因地震與颱風破壞。咸豐年間，龍山寺成為三邑人與漳州人械鬥的據點。為報答支援，同時也分香建廟如塔悠金玉禪寺。清法戰爭時，劉銘傳曾一度被困於廟內，後為安民心承諾留守。後來鐵路改線使艋舺漸失地位，大稻埕取而代之。\n\n日治時期，廟宇曾作為役場與教育機構。1919年起進行大規模修復，融合西式風格，如希臘式柱頭與複雜斗栱，成為台北三大名廟之一。1945年台北大空襲中，大殿被毀，日治時代雕塑《釋迦出山像》亦遭焚毀。\n\n戰後重修於1953年展開，1959年落成，維持原有風格。1963年成立財團法人管理，積極推動環境整頓與觀光化，發展夜市與商場，吸引大量人潮。1989年重製《釋迦出山像》，並持續維護修建。2001年進行中殿大修，2018年升格為國定古蹟，持續作為宗教與觀光重要地標。",
    address: "臺北市萬華區廣州街211號",
    description: "艋舺龍山寺，也稱萬華龍山寺，是位於臺灣臺北市萬華區的觀音寺，為龍山寺之一。建築在2018年被列為國定古蹟。"
  },


  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/%E6%89%87%E5%BD%A2%E8%BB%8A%E5%BA%AB--%E5%BC%B5%E5%88%A9%E8%81%B0.jpg/250px-%E6%89%87%E5%BD%A2%E8%BB%8A%E5%BA%AB--%E5%BC%B5%E5%88%A9%E8%81%B0.jpg",
    title: "彰化扇形車庫",
    region: "中部",
    lat: 24.086111,
    lng: 120.540202,
    history:"彰化扇形車庫建於日治時期大正11年（1922年），因應海岸線鐵路的完工及鐵道運輸量增長，由臺灣總督府鐵道部設立，初期設有6股軌道，至1924年擴建為10股。1933年再擴增為12股，並增建檢車所與事務所，成為臺灣六大扇形車庫之一。\n\n二戰期間，該車庫曾遭美軍轟炸，部分結構受損。戰後由臺鐵接管，1970年代起進行現代化改建，新增柴油與電力機車維修設施。1980年代成為台鐵重要機務據點。1990年代隨著鐵路電氣化與基地規劃調整，扇形車庫一度面臨拆除危機，引發地方文史團體與鐵道迷大力爭取保存。\n\n1995年起，多方推動將其列為文化資產，終在2000年由彰化縣政府指定為縣定古蹟，為臺灣首例保存的產業建築古蹟。2001年獲評選為台灣十大土木史蹟之一。2019年與日本豐後森機關庫締結姊妹關係。\n\n2022年4月，扇形車庫落成百年之際，升格為國定古蹟。因應彰化鐵路高架化計畫，部分附屬設施未納入國定古蹟範圍，未來面臨靜態保存轉型。為保其運作功能，當地文史團體發起「保存運動2.0」，倡議持續動態保存並保留其機務運作角色，持續作為台灣鐵道文化象徵。",
    address: "彰化縣彰化市彰美路1段1號",
    description: "彰化扇形車庫，為位於台灣彰化縣彰化市彰化車站北側的扇形車庫，始建於西元1922年，其扇庫建物以調車轉盤為中心，呈十二股道放射狀形成一座半圓弧狀車庫。當前，該扇庫隸屬彰化機務段，亦為台灣唯一動態保存的扇形車庫設施，因在臺灣鐵路系統的維修與調度設施等工業遺產價值，今列彰化縣國定古蹟，現今開放予民眾參觀。"
  },


];


function openModal2() {
  const modal = document.getElementById("modal");
  document.getElementById("complete-btn").style.display = "none";
  document.getElementById("close-btn").style.display = "none";
  document.getElementById("modal-img").src = "";
  document.getElementById("modal-title").textContent = "提示";
  document.getElementById("modal-description").textContent = "請參考上面題目敘述 推測古蹟位置 並在地圖上猜測位置 之後送出答案 系統會根據答案與猜測點的位置給分 滿分300 嘎由";
  modal.style.display = "flex";
  document.getElementById("how").style.display = "inline-block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  const mapContainer = document.getElementById("map-container");
  const mapbtn = document.getElementById("show-map-btn");
  mapbtn.style.display = "none";
  mapContainer.style.display = "none";
}




window.receiveGameScore = async function (score) {
  console.log("收到來自iframe的遊戲分數：", score);

  const user = auth.currentUser;
  if (!user) return console.warn("尚未登入");

  const uid = user.uid;
  const userRef = doc(db, "users", uid);
  const docSnap = await getDoc(userRef);
  const currentBest = docSnap.exists() ? docSnap.data().bestScore || 0 : 0;

  if (score > currentBest) {
    await updateDoc(userRef, { bestScore: score });
    console.log("🔥 新的最佳紀錄已寫入 Firebase！");
  }
};


function renderCards() {
  const content = document.getElementById("main-content");
  content.innerHTML = ""; // 清空現有的卡片
  const completedPlacesFromLocal = window.getCompletedFromLocal(); // 重新載入已完成地點

  for (const region in groupByRegion) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = region;
    details.appendChild(summary);

    const container = document.createElement("div");
    container.classList.add("card-container");

    groupByRegion[region].forEach((card, regionIndex) => {
      const cardDiv = document.createElement("div");
      cardDiv.classList.add("card");
      if (completedPlacesFromLocal.includes(card.title)) {
        cardDiv.classList.add("completed");
      }
      cardDiv.innerHTML = `
        <img src="${card.image}" alt="${card.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px;">
        <h2>${card.title}</h2>
        <h3>地址: ${card.address}</h3>
      `;
      cardDiv.dataset.region = region;
      cardDiv.dataset.regionIndex = regionIndex;
      cardDiv.onclick = () => openModal(cardDiv.dataset.region, parseInt(cardDiv.dataset.regionIndex));
      container.appendChild(cardDiv);
    });

    details.appendChild(container);
    content.appendChild(details);
  }
}

const groupByRegion = {};
cardsData.forEach(card => {
  if (!groupByRegion[card.region]) {
    groupByRegion[card.region] = [];
  }
  groupByRegion[card.region].push(card);
});
function updateContent(index) {
  const content = document.getElementById("main-content");

  if (index == 1) {
    content.innerHTML = '';
    const completedPlacesFromLocal = window.getCompletedFromLocal(); // 載入已完成地點
    for (const region in groupByRegion) {
      const details = document.createElement("details");
      const summary = document.createElement("summary");
      summary.textContent = region;
      details.appendChild(summary);

      const container = document.createElement("div");
      container.classList.add("card-container");

      groupByRegion[region].forEach((card, regionIndex) => {
        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");
        cardDiv.innerHTML = `
          <img src="${card.image}" alt="${card.title}" style="width: 100%; height: 120px; object-fit: cover; border-radius: 6px;">
          <h2>${card.title}</h2>
          <h3>地址: ${card.address}</h3>
        `;
        // 在 DOM 元素上儲存區域和區域內索引
        if (completedPlacesFromLocal.includes(card.title)) {
          cardDiv.classList.add("completed"); // 你需要在 CSS 中定義 .completed 的樣式
        }
        cardDiv.dataset.region = region;
        cardDiv.dataset.regionIndex = regionIndex;
        cardDiv.onclick = () => openModal(cardDiv.dataset.region, parseInt(cardDiv.dataset.regionIndex));
        container.appendChild(cardDiv);
      });

      details.appendChild(container);
      content.appendChild(details);
    };
  } else if (index == 2) {
   const mapbtn = document.getElementById("show-map-btn");
    const changebtn = document.getElementById("toggle-desc-btn");
    changebtn.style.display = "none";
  mapbtn.style.display = "none";
    openModal2();
    content.innerHTML = `<iframe src="test001.html" style="width: 100%; height: 100vh; border: none;"></iframe>`;
  } else if (index == 3) {
    content.innerHTML = `
    <h2>留言板</h2>
    <textarea id="newComment" placeholder="寫下你的留言..." rows="3" style="width: 100%;"></textarea><br>
    <button onclick="postComment()">發布留言</button>
    <button onclick="loadComments()">重新整理</button>
    <div id="commentsList"></div>
  `;
    loadComments(); // 載入留言

  }

  else if (index == 5) {
    content.innerHTML = `<h2>排行榜</h2><div id="leaderboard" class="leaderboard-container"></div>`;
    getLeaderboard();

  } else if (index == 4) {
    content.innerHTML = `<h2>我的成就</h2><div id="achievements-list">載入中...</div>`;
    loadAchievements();
  }
    else if (index == 6) {

    content.innerHTML = `<iframe src="test.html" style="width: 100%; height: 100vh; border: none;"></iframe>`;}
  else {
    content.innerHTML = `<p>這是項目 ${index} 的內容。</p>`;
  }
}
function toggleDropdown() {
  const dropdown = document.getElementById("user-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function openModal(region, regionIndex) {
  const modal = document.getElementById("modal");
  const mapbtn = document.getElementById("show-map-btn");
  const changebtn = document.getElementById("toggle-desc-btn");
    changebtn.style.display = "inline-block";
  mapbtn.style.display = "inline-block";
  const mapContainer = document.getElementById("map-container");
  mapContainer.style.display = "none";

  const card = groupByRegion[region][regionIndex];
  window.currentCard = card;
  let showingHistory = false; // 狀態變數：目前是否顯示 history

  // 初始顯示 description
  document.getElementById("modal-img").src = card.image;
  document.getElementById("modal-title").textContent = card.title;
  document.getElementById("modal-description").textContent = card.description;

  modal.style.display = "flex";
  document.getElementById("complete-btn").style.display = "inline-block";
  document.getElementById("close-btn").style.display = "inline-block";
  document.getElementById("how").style.display = "none";

  // 地圖按鈕行為
  document.getElementById("show-map-btn").onclick = () => {
    mapContainer.style.display = "block";
    showMapAndStreetView(card.lat, card.lng, card.title);
  };

  // 新增切換介紹按鈕行為
  document.getElementById("toggle-desc-btn").onclick = () => {
    showingHistory = !showingHistory;
    document.getElementById("modal-description").textContent = showingHistory
      ? card.history
      : card.description;
  };
}





function showMapAndStreetView(lat, lng, label) {
  const mapContainer = document.getElementById("map-container");
  mapContainer.style.display = "block";

  // 如果地圖已經存在，先移除
  if (window.currentMap) {
    window.currentMap.remove(); // 銷毀舊的地圖
  }

  window.currentMap = L.map(mapContainer).setView([lat, lng], 16);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
  }).addTo(window.currentMap);

  L.marker([lat, lng]).addTo(window.currentMap)
    .bindPopup(label)
    .openPopup();
}

