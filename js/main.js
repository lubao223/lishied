

const cardsData = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/4b/%E5%8F%B0%E5%8D%97%E5%B8%82%E4%BA%94%E5%A6%83%E5%BB%9F.jpg",
    lat: 22.982081,
    lng: 120.205214,
    title: "五妃廟",
    region: "南部",
    address: "臺南市中西區五妃街201號",
    description: "五妃廟，昔稱五烈墓、五妃祀、寧靖王從死五妃墓，位於今臺灣臺南市中西區，五妃是指明寧靖王朱術桂從死之五位妃妾：袁氏、王氏、秀姑、梅姐及荷姐。五妃廟乃坐西南朝東北，為一座單進兩護龍式的古建築，最早建於1683年（明鄭永曆三十七年，清康熙二十二年）。由1683年迄今有三百餘年，墓傍有一小祠，為義靈君墓，係當年殉死二侍宦埋骨之處。五妃廟現為中華民國文化部所頒訂之國定古蹟，目前由臺南市政府文化觀光處所管理，並設有紀念碑、解說牌等，也是當代情侶夫妻間求忠貞祭拜的廟宇。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2021%E5%B9%B4%E7%9A%84%E5%84%84%E8%BC%89%E9%87%91%E5%9F%8E%E5%9F%8E%E9%96%80.jpg/1024px-2021%E5%B9%B4%E7%9A%84%E5%84%84%E8%BC%89%E9%87%91%E5%9F%8E%E5%9F%8E%E9%96%80.jpg",
    title: "二鯤鯓砲臺（億載金城）",
    lat: 22.988531,  // 二鯤鯓砲臺（億載金城）的緯度
    lng: 120.160207,  // 二鯤鯓砲臺（億載金城）的經度
    address: "臺南市安平區光州路三號",
    region: "南部",
    description: "二鯤鯓砲臺，或作二鯤鯓礮臺，舊稱三鯤鯓礮臺、安平大礮（砲）臺，現在一般俗稱為億載金城（台羅：It-tāi-kim-siânn），是一座清朝時建立的砲臺。位於臺灣臺南市安平區，為中華民國文化部所管轄的國定古蹟"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/%E8%87%BA%E5%8D%97%E5%AD%94%E5%AD%90%E5%BB%9F_%E5%A4%A7%E6%88%90%E5%9D%8A.JPG/250px-%E8%87%BA%E5%8D%97%E5%AD%94%E5%AD%90%E5%BB%9F_%E5%A4%A7%E6%88%90%E5%9D%8A.JPG",
    title: "臺南孔子廟",
    address: "臺南市中西區南門路2號",
    lat: 22.990523,  // 臺南孔子廟的緯度
    lng: 120.204267,  // 臺南孔子廟的經度
    region: "南部",
    description: "臺南孔子廟，位於臺灣臺南市中西區，是臺灣最早的文廟，建於明鄭永曆十九年（西元1665年）。清領初期時曾是全臺童生唯一入學之所，因而稱「全臺首學」。臺南孔廟於民國72年（1983年）12月28日公告為祠廟類國家一級古蹟，1997年《文資法》修法後為國定古蹟。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6b/%E5%9C%8B%E6%97%97%E9%A3%84%E6%8F%9A%E7%B4%85%E6%AF%9B%E5%9F%8E.JPG",
    title: "紅毛城",
    address: "	新北市淡水區中正路28巷1號",
    lat: 25.17543,
    lng: 121.432942,
    region: "北部",
    description: "紅毛城古蹟區（臺灣話：Âng-mn̂g-siânn），又稱前英國駐台北領事館及官邸，古稱聖多明哥城、安東尼堡，是一座位於台灣新北市淡水區的古蹟。最早建城是在1628年統治台灣北部的西班牙人所興建的「聖多明哥城」，但後來聖多明哥城被摧毀，1644年荷蘭人於聖多明哥城原址附近重建，並命名為「安東尼堡」。而由於當時漢人稱呼荷蘭人為紅毛，因此這個城就被他們稱作「紅毛城」。1724年，臺灣府淡水捕盜同知王汧開始整修紅毛城，增建了四座外圍城門。1867年以後，紅毛城開始由英國政府租用作為領事館，並在旁興建領事官邸。太平洋戰爭期間，日本向英美宣戰而查封紅毛城，直到戰後輾轉交還予英方。之後，英國雖於1950年和中華民國斷交，但仍持續使用紅毛城作為領事館直到1972年與中華人民共和國升格為大使級外交關係才停止運作，並在之後依序由澳大利亞與美國代為管理。一直到1980年，該城的產權才移交至中華民國政府手中，指定為一級古蹟並開放供民眾參觀。紅毛城被視為台灣現存最古老的建築之一，也是中華民國內政部所頒訂的國定古蹟。紅毛城古蹟區包含紅毛城主堡、前英國領事官邸以及清治時期所建造的南門。其中紅毛城主堡是臺灣最古老的完整建築物，前方置有四尊嘉慶18年製成的古炮；前英國領事官邸在主堡東側，為兩層式洋樓；南門則為古蹟區內唯一的中國式建築，使用觀音石砌成。另外，園區內還有一座從山腳下移上來的「寶順行石碑。全園區由新北市立淡水古蹟博物館營運。「淡水紅毛城及其週遭歷史建築群」為文化部遴選之臺灣世界遺產潛力點之一，其涵蓋範圍包含潛力點本身及緩衝區，從淡水至竹圍，約與新北市淡水區相當，總面積為70.6565平方公里。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/2/27/Former_British_Consulate_at_Takao.jpg",
    title: "打狗英國領事館及官邸",
    region: "南部",
    lat: 22.618849,
    lng: 120.266948,
    address: "高雄市鼓山區蓮海路18號",
    description: "打狗英國領事館文化園區（英語：Former British Consulate at Takow），是位於臺灣高雄市鼓山區的歷史文化園區，古蹟群由領事館、領事官邸及一條登山古道所構成，其中領事館位於高雄港（清打狗港）口北岸的哨船頭碼頭，是清治時期英國政府於打狗掌理領事業務工作的重要據點。也是臺灣目前現存的西式建築中最為久遠者之一。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/6/69/%E5%8F%B0%E5%8C%97%E4%BF%9D%E5%AE%89%E5%AE%AE1.jpg",
    title: "大龍峒保安宮",
    lat: 25.073626,
    lng: 121.515517,
    region: "北部",
    address: "台北市大同區哈密街61號",
    description: "大龍峒保安宮，又稱大浪泵宮，是位於臺灣臺北市大同區大龍峒、鄰近臺北孔子廟的大道公廟，為泉州同安人所信仰的廟宇，建築曾獲2003年聯合國教科文組織亞太區文物古蹟保護獎榮譽獎，2018年則被指定為國定古蹟。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/%E5%90%89%E5%AE%89%E6%85%B6%E4%BF%AE%E9%99%A2.jpg/500px-%E5%90%89%E5%AE%89%E6%85%B6%E4%BF%AE%E9%99%A2.jpg",
    title: "吉安慶修院",
    region: "東部",
    lat: 23.974302701095226,
    lng: 121.5644285095056,
    address: "吉安鄉中興路349號",
    description: "慶修院是位在臺灣花蓮縣吉安鄉的寺院古蹟。原為真言宗吉野布教所，為真言宗高野山金剛峯寺的海外別院。本尊弘法大師、脇佛不動明王和毘沙門天、創立者為川端滿二。通稱「吉安慶修院」。二戰後改為供奉本師釋迦牟尼佛和觀世音菩薩。1997年政府指定為古蹟，但仍未失去其實際宗教功能，現為觀光景點。境內有四國八十八箇所靈場之石佛。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Ji%E2%80%99an_Cross_Trail_Excavation_Memorial%2C_Hualien_County_%28Taiwan%29.jpg/2560px-Ji%E2%80%99an_Cross_Trail_Excavation_Memorial%2C_Hualien_County_%28Taiwan%29.jpg",
    title: "吉安橫斷道路開鑿記念碑",
    region: "東部",
    lat: 23.948905,
    lng: 121.52323,
    address: "吉安鄉干城村吉安段4781-9號",
    description: "吉安橫斷道路開鑿記念碑，是位於臺灣花蓮縣吉安鄉干城村臺9丙線旁，題為「橫斷道路開鑿記念」的石碑，與其前方所立的殉職者之碑，是日治時期蕃務本署為紀念自大正六年（1917年）9月15日至七年（1918年）6月30日間，開鑿能高越橫斷道路東段（能高越舊道東段，初音至奇萊）完工通行（石碑上記載為1月完工），以及開鑿期間作業隊殉職人員所立的紀念碑。碑文一開始就刻著「自初音至奇萊主山」，故又稱為初音奇萊橫斷道路開鑿記念碑。"
  }, {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/%E5%A4%A7%E7%94%B2%E6%9E%97%E6%B0%8F%E8%B2%9E%E5%AD%9D%E5%9D%8A.jpg/500px-%E5%A4%A7%E7%94%B2%E6%9E%97%E6%B0%8F%E8%B2%9E%E5%AD%9D%E5%9D%8A.jpg",
    title: "林氏貞孝坊",
    region: "中部",
    lat: 24.34464502461078,
    lng: 120.62187266718843,
    address: "大甲區順天路119號",
    description: "林氏貞孝坊是一座豎立於臺灣臺中大甲的清代貞節牌坊。該牌坊乃為表彰淡水廳大甲街地方人士余榮長之妻林春娘（文獻多記為「春娘」，而「娘」字為舊時對單名婦女之通稱，故其人原名應為「林春」，而櫟社詩人蔡子昭所撰碑記即寫有「諱春」二字）之貞孝事蹟，而興建於道光二十八年（1848年）之紀念性建築物。民國七十四年（1985年）8月19日，此牌坊經中華民國內政部指定為臺中縣三級古蹟。此外，林春娘在當地除貞孝事蹟外更有禱雨事蹟，並被當地居民奉為「貞節媽」，還有神像供奉於大甲鎮瀾宮之內，成為「大甲三神」之一。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg/250px-%E5%8F%B0%E5%8D%97_%E8%B5%A4%E5%B4%81%E6%A8%93.jpg",
    title: "赤崁樓",
    region: "南部",
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
    address: "臺北市中正區重慶南路一段122號",
    description: "中華民國總統府廳舍位於臺灣臺北市中正區，為中華民國總統、副總統的辦公場所，中華民國政府亦於每年元旦及國慶日在此舉行升旗典禮，並且依照慣例，歷任總統皆會於升旗典禮結束後在府前廣場發表談話。總統府廳舍於1919年建成，建築風格屬辰野金吾風格，為中華民國國定古蹟。起初於臺灣日治時期作為「臺灣總督府」，中華民國政府遷臺後成為總統府機關辦公廳舍所在地，是臺灣重要的政治中樞與國家最高權力象徵。只有在特定時間才會開放給民眾入內參觀。另依《集會遊行法》第6條第1項規定，總統府及其周邊範圍，非經主管機關核准不得舉行集會、遊行。"
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/%E9%B9%BF%E6%B8%AF%E5%A4%A9%E5%90%8E%E5%AE%AE.JPG/330px-%E9%B9%BF%E6%B8%AF%E5%A4%A9%E5%90%8E%E5%AE%AE.JPG",
    title: "鹿港天后宮",
    region: "中部",
    lat: 24.059338,
    lng: 120.43138,
    address: "彰化縣鹿港鎮中山路430號",
    description: "鹿港天后宮，又稱鹿港媽祖宮、鹿港湄洲媽、舊祖宮，前身為鹿港天妃廟，是臺灣彰化縣鹿港鎮的信仰中心，是臺灣最早唯一奉祀湄洲天后宮天上聖母開基聖母神尊的廟宇，此尊湄洲島天上聖母是清代福建水師提督施琅將軍迎奉來台，也是世界僅存的湄洲開基天上聖母神尊。鹿港天后宮是臺灣歷史悠久的知名廟宇之一，迄今已逾四百多年，目前由中華民國文化部評定為國定古蹟。雍正三年（1725年）前述媽祖宮在施琅未入台前，即已有小廟。康熙二十二年（1683年）靖海將軍施琅攻台時，其部將興化鎮總兵吳英、海壇鎮總兵林賢、水師提標隨征都督陳蟒、魏明、水師提標右營遊擊藍理、海壇鎮標中營遊擊許英等攜帶聖母神像來台以求平安，施琅亦自湄洲嶼請湄洲媽來台。當施琅於翌年班師之際，其族姪施世榜請留神像在鹿港，以供士民參拜、許之，於是各地信徒不辭路途遙遠，來廟參拜者日益增加，香火隨之鼎盛。雍正三年（1725年）由於廟地狹隘卑溼，不敷使用，施世榜乃獻地，由諸信徒捐貲蓋廟，後改為磚造，廟門正對湄洲天后祖祠，故亦稱鹿港天后宮。施世榜因建廟有功，配享於鹿港天后宮右廂的「施耀德堂」，其旁另有供奉「大總理六品軍功官章萬春王公長生祿位」及長性師、妙來師、妙江師、普琴師、淨芳師等歷代諸僧師的蓮座。"
  },

  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bangka_Lungshan_Temple_%28cropped%29.jpg/330px-Bangka_Lungshan_Temple_%28cropped%29.jpg",
    title: "艋舺龍山寺",
    region: "北部",
    lat: 25.037347,
    lng: 121.499893,
    address: "臺北市萬華區廣州街211號",
    description: "艋舺龍山寺，也稱萬華龍山寺，是位於臺灣臺北市萬華區的觀音寺，為龍山寺之一。建築在2018年被列為國定古蹟。"
  },


  {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/%E6%89%87%E5%BD%A2%E8%BB%8A%E5%BA%AB--%E5%BC%B5%E5%88%A9%E8%81%B0.jpg/250px-%E6%89%87%E5%BD%A2%E8%BB%8A%E5%BA%AB--%E5%BC%B5%E5%88%A9%E8%81%B0.jpg",
    title: "彰化扇形車庫",
    region: "中部",
    lat: 24.086111,
    lng: 120.540202,
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
  mapbtn.style.display = "inline-block";
  const mapContainer = document.getElementById("map-container");
  mapContainer.style.display = "none";
  const card = groupByRegion[region][regionIndex];

  window.currentCard = card;
  document.getElementById("modal-img").src = card.image;
  document.getElementById("modal-title").textContent = card.title;
  document.getElementById("modal-description").textContent = card.description;

  modal.style.display = "flex";
  document.getElementById("complete-btn").style.display = "inline-block";
  document.getElementById("close-btn").style.display = "inline-block";
  document.getElementById("how").style.display = "none";

  
document.getElementById("show-map-btn").onclick = () => {

  const mapContainer = document.getElementById("map-container");
  mapContainer.style.display = "block";
  showMapAndStreetView(card.lat, card.lng, card.title);
};





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
}
