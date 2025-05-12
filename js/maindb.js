
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { getFirestore, doc, getDoc, updateDoc, addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
import { collection, getDocs, orderBy, query, deleteDoc, limit } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

import { getDatabase, ref, onValue, push, set, get, runTransaction, update } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";  // 這裡引入 Firebase Realtime Database API


 const firebaseConfig = {
          apiKey: "AIzaSyAxEJP1PcgOUchT_6qHyG5y4f2NvAyB12k",
          authDomain: "test001-b582f.firebaseapp.com",
          databaseURL: "https://test001-b582f-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "test001-b582f",
          storageBucket: "test001-b582f.firebasestorage.app",
          messagingSenderId: "568098017999",
          appId: "1:568098017999:web:f7729d8bcc1710be1f9dba",
          measurementId: "G-JBXQHB2444"
        };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);



let userData = {};

onAuthStateChanged(auth, async (user) => {
  if (user) {
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      userData = docSnap.data();
      document.getElementById("user-name").textContent = userData.name || "使用者";


    } else {
      alert("無法載入使用者資料");
    }
  } else {
    // 沒有登入 -> 返回登入頁
    window.location.href = "index.html";
  }
});

window.showProfile = async function () {
  closeResult()
  const user = auth.currentUser;
  if (user) {
    const uid = user.uid;
    const userRef = doc(db, "users", uid);
    const completionsRef = ref(rtdb, `completions/${uid}`);

    try {
      const userSnap = await getDoc(userRef);
      const completionsSnap = await get(completionsRef);

      if (userSnap.exists()) {
        const userData = userSnap.data();
        const completedPlaces = completionsSnap.exists() ? Object.keys(completionsSnap.val()) : [];

        window.saveCompletedToLocal(completedPlaces);

        const regionProgress = {};
        for (const region in groupByRegion) {
          const totalInRegion = groupByRegion[region].length;
          const completedInRegion = completedPlaces.filter(place =>
            groupByRegion[region].some(card => card.title === place)
          ).length;
          regionProgress[region] = `${completedInRegion}/${totalInRegion}`;
        }

        const completedListHTML = completedPlaces.length > 0
          ? `<ul>${completedPlaces.map(place => `<li>${place}</li>`).join('')}</ul>`
          : `<p>尚未完成任何地點。</p>`;

        let regionProgressHTML = '<ul>';
        for (const region in regionProgress) {
          regionProgressHTML += `<li>${region}: ${regionProgress[region]}</li>`;
        }
        regionProgressHTML += '</ul>';

        document.getElementById("main-content").innerHTML = `
                
<div class="profile-card">
  <h3>個人檔案</h3>
  <p>姓名：<span id="current-name">${userData.name || "使用者"}</span> 
    <button onclick="showEditNameForm()">更改名字</button>
  </p>
  <div id="edit-name-form" style="display:none;">
    <input type="text" id="new-name" placeholder="輸入新名字">
    <button onclick="updateUserName()">儲存</button>
    <button onclick="hideEditNameForm()">取消</button>
  </div>
  <p>Email：${auth.currentUser.email}</p>
  <p>最高分數：${userData.bestScore || 0}</p>
  <p>勝利次數：${userData.wins || 0}</p>
  <p>平手次數：${userData.draws || 0}</p>
  <p>失敗次數：${userData.losses || 0}</p>

  <h4>已完成的地點</h4>
  <div class="progress-section">${completedListHTML}</div>

  <h4>區域完成進度</h4>
  <div class="progress-section">${regionProgressHTML}</div>
</div>
                `;
        toggleDropdown();
      } else {
        alert("無法載入使用者資料");
      }
    } catch (error) {
      console.error("載入個人檔案資料失敗：", error);
      alert("載入個人檔案資料失敗，請稍後再試！");
    }
  } else {
    alert("尚未登入！");
  }
};

window.showEditNameForm = function () {
  document.getElementById("edit-name-form").style.display = "block";
  document.getElementById("current-name").style.display = "none";
  document.querySelector('#main-content p button').style.display = 'none'; // 隱藏更改名字按鈕
}

window.hideEditNameForm = function () {
  document.getElementById("edit-name-form").style.display = "none";
  document.getElementById("current-name").style.display = "inline";
  document.querySelector('#main-content p button').style.display = 'inline'; // 顯示更改名字按鈕
}

window.updateUserName = async function () {
  const newName = document.getElementById("new-name").value.trim();
  if (newName) {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      const userRef = doc(db, "users", uid);
      try {
        await updateDoc(userRef, { name: newName });
        userData.name = newName; // 更新本地 userData
        window.showProfile(); // 重新載入個人資料以顯示新名字
      } catch (error) {
        console.error("更新名字失敗：", error);
        alert("更新名字失敗，請稍後再試！");
      }
    } else {
      alert("尚未登入！");
    }
  } else {
    alert("請輸入新的名字！");
  }
}



window.logout = function () {
  localStorage.clear();
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};


window.receiveGameScore = async function (score) {
  console.log("✅ 收到 iframe 傳來的遊戲分數：", score);

  const user = auth.currentUser;
  if (!user) {
    console.warn("⚠️ 尚未登入，無法寫入分數");
    return;
  }

  const uid = user.uid;
  const userRef = doc(db, "users", uid);

  try {
    const docSnap = await getDoc(userRef);
    const currentBest = docSnap.exists() ? docSnap.data().bestScore || 0 : 0;

    if (score > currentBest) {
      await updateDoc(userRef, { bestScore: score });
      alert("🎉 已更新為新的個人最佳分數！");
    } else {
      console.log("目前分數未超過最佳紀錄，不進行更新。");
    }
  } catch (err) {
    console.error("🚨 寫入 Firestore 發生錯誤：", err);
  }
};

window.receiveBattleScore = async function (score) {
  const user = auth.currentUser;
  if (!user) return;

  const uid = user.uid;
  const playerRef = ref(rtdb, `battle/current/players/${uid}`);

  const snap = await get(playerRef);
  if (!snap.exists()) {
    console.warn("尚未加入戰鬥，無法加分");
    return;
  }

  const data = snap.val();
  const currentScore = data.score || 0;

  await update(playerRef, {
    score: currentScore + score
  });

  console.log(`已加入分數 ${score} 到國戰，總分為 ${currentScore + score}`);
};


window.getLeaderboard = async function (type = 'bestScore') {
  const usersRef = collection(db, "users");
  let q;

  if (type === 'bestScore') {
    q = query(usersRef, orderBy("bestScore", "desc"), limit(200));
  } else if (type === 'winLoss') {
    q = query(usersRef, orderBy("totalScore", "desc"), limit(200));
  }

  try {
    const querySnapshot = await getDocs(q);
    const leaderboard = [];

    querySnapshot.forEach((doc) => {
      const userData = doc.data();
      const wins = userData.wins || 0;
      const losses = userData.losses || 0;

      // 計算總分：win 加 1 分，loss 減 1 分
      const totalScore = wins - losses;

      const entry = {
        name: userData.name || '匿名',
        bestScore: userData.bestScore || 0,
        wins: wins,
        losses: losses,
        totalScore: totalScore, // 計算的總分
      };

      // 根據 `totalScore` 排序
      leaderboard.push(entry);
    });

    // 按照 totalScore 進行排序


    const leaderboardElement = document.getElementById("leaderboard");
    leaderboardElement.innerHTML = "";

    leaderboard.forEach((entry, index) => {
      const entryElement = document.createElement("div");
      entryElement.classList.add("leaderboard-entry");

      // 設定排名顏色
      if (index === 0) entryElement.classList.add("gold");
      else if (index === 1) entryElement.classList.add("silver");
      else if (index === 2) entryElement.classList.add("bronze");

      let medal = '';
      if (index === 0) medal = '🥇 ';
      else if (index === 1) medal = '🥈 ';
      else if (index === 2) medal = '🥉 ';

      // 顯示排行榜資訊
      if (type === 'bestScore') {
        entryElement.innerHTML = `${medal}<strong>${entry.name}</strong>: ${entry.bestScore}`;
      } else if (type === 'winLoss') {
        entryElement.innerHTML = `${medal}<strong>${entry.name}</strong>: ${entry.wins}勝 ${entry.losses}敗`;
      }

      leaderboardElement.appendChild(entryElement);
    });
  } catch (error) {
    console.error("獲取排行榜資料失敗", error);
  }
};


/////////////////////////////////////////////////////////////////////////////////////////////////////////

const commentsRef = collection(db, "comments");

// 發布留言
window.postComment = async function () {
  const user = auth.currentUser;
  const text = document.getElementById("newComment").value.trim();
  if (!user || !text) return alert("請先登入並輸入內容");

  await addDoc(commentsRef, {
    uid: user.uid,
    name: userData.name || "匿名",
    text: text,
    likes: 0,
    createdAt: new Date()
  });

  document.getElementById("newComment").value = "";
  loadComments();
};

// 載入留言
window.loadComments = async function () {
  const q = query(commentsRef, orderBy("createdAt", "desc"));
  const snapshot = await getDocs(q);

  const container = document.getElementById("commentsList");
  container.innerHTML = "";

  snapshot.forEach(async docSnap => {
    const data = docSnap.data();
    const id = docSnap.id;
    const isOwner = auth.currentUser && auth.currentUser.uid === data.uid;
    const createdTime = data.createdAt?.toDate().toLocaleString() || "";
    const editedTime = data.editedAt ? `（編輯於 ${data.editedAt.toDate().toLocaleString()}）` : "";

    const commentHTML = `
     <div class="comment" data-comment-id="${id}">
  <strong>${data.name}</strong><br>
  <span>${data.text}</span><br>
  <small>發布於 ${createdTime} ${editedTime}</small>

  <div class="comment-actions">
    <button onclick="likeComment('${id}')">👍 ${data.likes}</button>
    <button onclick="toggleReplyForm('${id}')">回覆</button>
    ${isOwner ? `
      <button onclick="editComment('${id}', '${data.text.replace(/'/g, "\\'")}')">編輯</button>
      <button onclick="deleteComment('${id}')">刪除</button>
    ` : ""}
  </div>

  <div id="replyForm-${id}" style="display:none;">
    <textarea id="replyText-${id}" placeholder="輸入你的回覆"></textarea><br>
    <button onclick="submitReply('${id}')">送出回覆</button>
  </div>

  <div id="replies-${id}"></div>
</div>
    `;

    container.innerHTML += commentHTML;
    await loadReplies(id); // 加載回覆
  });
};

// 按讚
window.likeComment = async function (id) {
  const user = auth.currentUser;
  if (!user) return alert("請先登入");

  const commentDoc = doc(db, "comments", id);
  const snap = await getDoc(commentDoc);
  if (!snap.exists()) return;

  const data = snap.data();
  const likes = data.likes || 0;
  const likedBy = data.likedBy || [];

  let newLikes = likes;
  let newLikedBy = [...likedBy];

  if (likedBy.includes(user.uid)) {
    // 收回讚
    newLikes = likes - 1;
    newLikedBy = likedBy.filter(uid => uid !== user.uid);
  } else {
    // 加讚
    newLikes = likes + 1;
    newLikedBy.push(user.uid);
  }

  await updateDoc(commentDoc, {
    likes: newLikes,
    likedBy: newLikedBy
  });

  loadComments();
};


// 編輯留言
window.editComment = async function (id, oldText) {
  const newText = prompt("編輯留言：", oldText);
  if (newText !== null && newText.trim() !== "") {
    await updateDoc(doc(db, "comments", id), {
      text: newText,
      editedAt: new Date()
    });
  }
  loadComments();
};

// 刪除留言
window.deleteComment = async function (id) {
  if (confirm("確定要刪除這則留言嗎？")) {
    await deleteDoc(doc(db, "comments", id));
    loadComments();
  }
};

window.submitReply = async function (commentId) {
  const user = auth.currentUser;
  if (!user) return alert("請先登入");

  const replyTextInput = document.getElementById(`replyText-${commentId}`);
  const text = replyTextInput.value.trim();
  if (!text) return alert("請輸入回覆內容");

  const replyRef = collection(db, "comments", commentId, "replies");
  await addDoc(replyRef, {
    text,
    uid: user.uid,
    name: userData.name || user.displayName || "匿名",
    createdAt: new Date()
  });

  replyTextInput.value = "";
  await loadReplies(commentId);
};


window.loadReplies = async function (commentId) {
  const repliesRef = collection(db, "comments", commentId, "replies");
  const q = query(repliesRef, orderBy("createdAt", "asc"));
  const snapshot = await getDocs(q);

  const container = document.getElementById(`replies-${commentId}`);
  container.innerHTML = "";

  snapshot.forEach(docSnap => {
    const data = docSnap.data();
    const replyId = docSnap.id;
    const createdTime = data.createdAt?.toDate().toLocaleString() || "";
    const isOwner = auth.currentUser && auth.currentUser.uid === data.uid;

    const replyHTML = `
      <div class="reply" data-reply-id="${replyId}">
        <strong>${data.name}</strong>: ${data.text}
        <small>（${createdTime}）</small>
        ${isOwner ? `
          <button onclick="editReply('${commentId}', '${replyId}', '${data.text.replace(/'/g, "\\'")}')">編輯</button>
          <button onclick="deleteReply('${commentId}', '${replyId}')">刪除</button>
        ` : ""}
      </div>
    `;
    container.innerHTML += replyHTML;
  });
};
window.editReply = async function (commentId, replyId, oldText) {
  const newText = prompt("編輯回覆：", oldText);
  if (newText !== null && newText.trim() !== "") {
    const replyRef = doc(db, "comments", commentId, "replies", replyId);
    await updateDoc(replyRef, {
      text: newText,
      editedAt: new Date()
    });
    await loadReplies(commentId);
  }
};
window.deleteReply = async function (commentId, replyId) {
  if (confirm("確定要刪除這則回覆嗎？")) {
    const replyRef = doc(db, "comments", commentId, "replies", replyId);
    await deleteDoc(replyRef);
    await loadReplies(commentId);
  }
};


window.toggleReplyForm = function (commentId) {
  const form = document.getElementById(`replyForm-${commentId}`);
  form.style.display = form.style.display === "none" ? "block" : "none";
};
///////////////////////////////////////////////////////////////
const rtdb = getDatabase(app);

window.markComplete = async function () {
  const user = auth.currentUser;
  if (!user || !window.currentCard) return alert("請先登入！");

  const { title, region } = window.currentCard;
  const userId = user.uid;

  const userPath = `completions/${userId}/${title}`;
  const regionUserPath = `completionCountByRegion/${region}/${userId}`;

  const userRef = ref(rtdb, userPath);
  const regionUserRef = ref(rtdb, regionUserPath);

  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      alert("你已經標記過此地點！");
      closeModal();
      return;
    }

    await set(userRef, true);

    await runTransaction(regionUserRef, (current) => {
      return (current || 0) + 1;
    });
    const currentCompleted = window.getCompletedFromLocal();
    if (!currentCompleted.includes(title)) {
      currentCompleted.push(title);
      window.saveCompletedToLocal(currentCompleted);
      renderCards();
    }
    alert("你已標記為完成！");
    closeModal();
  } catch (err) {
    console.error("標記完成錯誤：", err);
    alert("標記失敗，請稍後再試！");
  }
};





window.loadAchievements = async function () {
  const user = auth.currentUser;
  if (!user) {
    document.getElementById("achievements-list").textContent = "請先登入以查看成就。";
    return;
  }

  const uid = user.uid;
  const achievementsRef = ref(rtdb, `achievements/${uid}`);
  const completionsRef = ref(rtdb, `completions/${uid}`);

  try {
    const achievementsSnap = await get(achievementsRef);
    const completionsSnap = await get(completionsRef);
    const completedPlaces = completionsSnap.exists() ? Object.keys(completionsSnap.val()) : [];

    const achieved = achievementsSnap.exists() ? achievementsSnap.val() : {};
    const allAchievements = [
      { id: "completed1Place", name: "初來乍到", description: "完成 1 個古蹟介紹", condition: () => completedPlaces.length >= 1 },
      { id: "completed1Place", name: "有點東西", description: "完成 5 個古蹟介紹", condition: () => completedPlaces.length >= 5 },
      { id: "completedNorthAll", name: "天龍國巡禮", description: "完成所有北部古蹟介紹", condition: () => groupByRegion["北部"] && completedPlaces.filter(place => groupByRegion["北部"].some(card => card.title === place)).length === (groupByRegion["北部"] ? groupByRegion["北部"].length : 0) },
      { id: "completedCentralAll", name: "南投國國王", description: "完成所有中部古蹟介紹", condition: () => groupByRegion["中部"] && completedPlaces.filter(place => groupByRegion["中部"].some(card => card.title === place)).length === (groupByRegion["中部"] ? groupByRegion["中部"].length : 0) },
      { id: "completedSouthAll", name: "太南了", description: "完成所有南部古蹟介紹", condition: () => groupByRegion["南部"] && completedPlaces.filter(place => groupByRegion["南部"].some(card => card.title === place)).length === (groupByRegion["南部"] ? groupByRegion["南部"].length : 0) },
      { id: "completedEastAll", name: "花蓮王", description: "完成所有東部古蹟介紹", condition: () => groupByRegion["東部"] && completedPlaces.filter(place => groupByRegion["東部"].some(card => card.title === place)).length === (groupByRegion["東部"] ? groupByRegion["東部"].length : 0) },

      {
        id: "completedAll",
        name: "TSJ (Time Span Jumper)",
        description: "完成所有古蹟介紹   獎勵:記得開聲音",
        condition: () => {
          let totalCards = 0;
          let completedCount = completedPlaces.length;
          for (const region in groupByRegion) {
            totalCards += groupByRegion[region].length;
          }
          return totalCards > 0 && completedCount >= totalCards;
        }
      },
      // ... 其他成就 ...
    ];
    let isTSJ = false;
    let achievementsHTML = '<ul>';
    for (const achievement of allAchievements) {
      const isAchieved = achieved[achievement.id] || achievement.condition(); // 先檢查資料庫，再檢查是否滿足條件
      if (isAchieved && !achieved[achievement.id]) {
        // 如果滿足條件但資料庫還沒有記錄，則寫入 (可以考慮在後端做更嚴格的驗證)
        await set(ref(rtdb, `achievements/${uid}/${achievement.id}`), true);
      }

      achievementsHTML += `<li>${isAchieved ? '🏆 ' : '🔒 '}<strong>${achievement.name}</strong>: ${achievement.description}</li>`;
      if (achievement.id === "completedAll" && isAchieved) {
        isTSJ = true;
      };
    }
    achievementsHTML += '</ul>';

    document.getElementById("achievements-list").innerHTML = achievementsHTML;
    if (isTSJ) {
      document.getElementById("achievements-list").innerHTML += `
        <br>
        <br>
        <iframe src="mm/damain.html" width="100%" height="300vh"  style="border:none;"></iframe>
      `;
    }

  } catch (error) {
    console.error("載入成就失敗：", error);
    document.getElementById("achievements-list").textContent = "載入成就失敗，請稍後再試。";
  }
};



window.saveCompletedToLocal = function (completedPlaces) {
  try {
    const completedString = JSON.stringify(completedPlaces);
    localStorage.setItem('completedPlaces', completedString);
    console.log("已完成地點已儲存至 localStorage:", completedPlaces);
  } catch (error) {
    console.error("儲存已完成地點至 localStorage 失敗:", error);
  }
};

window.getCompletedFromLocal = function () {
  try {
    const completedString = localStorage.getItem('completedPlaces');
    if (completedString) {
      const completedArray = JSON.parse(completedString);
      console.log("從 localStorage 載入已完成地點:", completedArray);
      return completedArray;
    } else {
      console.log("localStorage 中沒有已完成地點的資料。");
      return [];
    }
  } catch (error) {
    console.error("從 localStorage 載入已完成地點失敗:", error);
    return [];
  }
};




window.loadBattlePlayerView = async function () {
  const user = auth.currentUser;
  if (!user) return;

  const battleRef = ref(rtdb, "battle/current");
  onValue(battleRef, (snap) => {
    const data = snap.val();
    const container = document.getElementById("battleStatus");

    if (!data || data.status !== "active") {
      container.innerHTML = `<p>目前沒有進行中的戰鬥。<br>請等待管理員開啟戰鬥。</p>`;
      return;
    }

    const player = data.players?.[user.uid];
    const redCount = Object.values(data.players || {}).filter(p => p.team === "red").length;
    const blueCount = Object.values(data.players || {}).filter(p => p.team === "blue").length;

    // 如果尚未加入
    if (!player) {
      container.innerHTML = `
<div class="battle-title">選擇陣營加入戰鬥</div>
<div class="battle-wrapper">
  <div class="team red">
    <p>${data.teams.red.name}</p>
    <p>HP: ${data.teams.red.hp}</p>
    <p>玩家數：${redCount}</p>
    <button onclick="joinTeam('red')">加入 ${data.teams.red.name}</button>
  </div>
  <div class="team blue">
    <p>${data.teams.blue.name}</p>
    <p>HP: ${data.teams.blue.hp}</p>
    <p>玩家數：${blueCount}</p>
    <button onclick="joinTeam('blue')">加入 ${data.teams.blue.name}</button>
  </div>
</div>
      `;
      return;
    }

    // 如果已加入，顯示完整戰場與操作
    const myTeam = player.team;
    const enemyTeam = myTeam === "red" ? "blue" : "red";
    const myTeamData = data.teams[myTeam];
    const enemyTeamData = data.teams[enemyTeam];
    const log = data?.log || {};  // 取得 log 資料，如果沒有則為空物件



    container.innerHTML = `
<div class="battle-grid">

  <!-- 左上：玩家資訊 -->
  <div class="grid-item player-info">
    <h3>👤 玩家資訊</h3>
    <div><strong>玩家：</strong>${player.name}</div>
    <div><strong>陣營：</strong>${myTeamData.name}</div>
    <div><strong>分數：</strong>${player.score}</div>
    <div><strong>貢獻度：</strong>${player.contribution || 0}</div>
    <div><strong>結束時間：</strong>${data.endTime ? new Date(data.endTime).toLocaleString("zh-Hant") : "未設定"}</div>
  </div>

  <!-- 右上：血條 -->
  <div class="grid-item hp-info">
    <h3>🩸 血量狀態</h3>
    <div>
      <strong>${myTeamData.name} HP：</strong>
      <div class="hp-bar-container">
        <div class="hp-bar hp-red" style="width: ${myTeamData.hp / 1000 * 100}%"></div>
        <div class="hp-overflow" style="width: ${Math.max(myTeamData.hp - 1000, 0) / 1000 * 100}%"></div>
      </div>
      ${myTeamData.hp}
    </div>
    <div style="margin-top: 12px;">
      <strong>${enemyTeamData.name} HP：</strong>
      <div class="hp-bar-container">
        <div class="hp-bar hp-blue" style="width: ${enemyTeamData.hp / 1000 * 100}%"></div>
        <div class="hp-overflow" style="width: ${Math.max(enemyTeamData.hp - 1000, 0) / 1000 * 100}%"></div>
      </div>
      ${enemyTeamData.hp}
    </div>
  </div>

  <!-- 左下：操作按鈕 -->
  <div class="grid-item actions">
    <h3>🎮 操作選項</h3>
    <label>消耗分數 <input id="spendPoints" type="number" min="1" value="10"></label>
    <div style="margin-top: 10px;">
      <button class="action-btn attack" onclick="attackOpponent()">⚔️ 攻擊敵方</button>
      <button class="action-btn heal" onclick="healTeam()">🩹 支援我方</button>
    </div>
  </div>

  <!-- 右下：Log -->
  <div class="grid-item log">
    <h3>📜 戰鬥 Log</h3>
    <div id="logDisplay">
      <!-- log 顯示 -->
    </div>
  </div>

</div>
    `;



    // 生成 log 顯示的 HTML
    const logDisplay = document.getElementById("logDisplay");
    logDisplay.innerHTML = "<ul>" + Object.values(log).map(entry => `
  <li><strong>${new Date(entry.time).toLocaleTimeString()}</strong> ${entry.player} - ${entry.action}</li>
`).join("") + "</ul>";
    logDisplay.scrollTop = logDisplay.scrollHeight;


  });
};







window.joinTeam = async function (team) {
  const user = auth.currentUser;
  if (!user) return;

  const uid = user.uid;
  const battleRef = ref(rtdb, "battle/current");
  await updateDoc(doc(db, "users", uid), {
    inBattle: true
  });

  // 取得戰鬥資料
  const battleSnap = await get(battleRef);
  const data = battleSnap.val();
  const players = data.players || {};

  // 取得使用者名稱（從 Firestore）
  const userRef = doc(db, "users", uid);
  const userSnap = await getDoc(userRef);
  const name = userSnap.exists() ? userSnap.data().name || "未命名玩家" : "未命名玩家";

  // 陣營人數平衡判斷
  const redCount = Object.values(players).filter(p => p.team === "red").length;
  const blueCount = Object.values(players).filter(p => p.team === "blue").length;

  if (team === "red" && redCount - blueCount >= 2) {
    alert("目前紅隊人數過多，請選擇藍隊");
    return;
  }
  if (team === "blue" && blueCount - redCount >= 2) {
    alert("目前藍隊人數過多，請選擇紅隊");
    return;
  }

  // 加入戰鬥
  const newPlayer = {
    name,
    team,
    score: 0,
    contribution: 0
  };

  await set(ref(rtdb, `battle/current/players/${uid}`), newPlayer);
  alert(`已加入 ${data.teams[team].name}`);
};



// 攻擊敵方
window.attackOpponent = async function () {
  const user = auth.currentUser;
  const points = parseInt(document.getElementById("spendPoints").value);
  if (!user || isNaN(points) || points <= 0) return alert("請輸入有效數值");

  const playerRef = ref(rtdb, `battle/current/players/${user.uid}`);
  const battleRef = ref(rtdb, "battle/current");
  const snap = await get(battleRef);
  const data = snap.val();
  const player = data.players?.[user.uid];
  if (!player || player.score < points) return alert("分數不足");

  const myTeam = player.team;
  const enemyTeam = myTeam === "red" ? "blue" : "red";

  // 更新血量、玩家資料與 log
  const updates = {};
  updates[`teams/${enemyTeam}/hp`] = data.teams[enemyTeam].hp - points;
  updates[`players/${user.uid}/score`] = player.score - points;
  updates[`players/${user.uid}/contribution`] = (player.contribution || 0) + points;
  updates[`log/${Date.now()}`] = {
    time: Date.now(),
    player: player.name,
    action: `攻擊 ${data.teams[enemyTeam].name} ${points} 點`
  };

  await update(battleRef, updates);
};

// 補血我方
window.healTeam = async function () {
  const user = auth.currentUser;
  const points = parseInt(document.getElementById("spendPoints").value);
  if (!user || isNaN(points) || points <= 0) return alert("請輸入有效數值");

  const battleRef = ref(rtdb, "battle/current");
  const snap = await get(battleRef);
  const data = snap.val();
  const player = data.players?.[user.uid];
  if (!player || player.score < points) return alert("分數不足");

  const myTeam = player.team;

  const updates = {};
  updates[`teams/${myTeam}/hp`] = data.teams[myTeam].hp + points;
  updates[`players/${user.uid}/score`] = player.score - points;
  updates[`players/${user.uid}/contribution`] = (player.contribution || 0) + points;
  updates[`log/${Date.now()}`] = {
    time: Date.now(),
    player: player.name,
    action: `補血 ${data.teams[myTeam].name} ${points} 點`
  };

  await update(battleRef, updates);
};

const logRef = ref(rtdb, "battle/logs");
const statusRef = ref(rtdb, "battle/current");
let lastStatus = null;

onValue(statusRef, async (snapshot) => {
  const data = snapshot.val();
  const currentStatus = data?.status;
  console.log('Current Status:', currentStatus);

  if (currentStatus === "ended" && lastStatus !== "ended" && lastStatus !== null) {
    const winner = data.result?.winner;
    const reason = data.result?.reason;
    const timestamp = Date.now();

    const reasonMap = {
      hp_zero: "敵方血量歸零",
      timeout: "時間結束",
      manual: "管理員手動結束"
    };

    const logData = {
      timestamp,
      winner: winner === "draw" ? "平手" : data.teams?.[winner]?.name ?? "未知",
      reason: reasonMap[reason] ?? "未知原因",
      reasonCode: reason,
    };

    // 記錄 Log 到 Realtime Database
    push(logRef, logData);

    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists() && userSnap.data().inBattle) {
        // 呼叫更新戰績函式
        let msg = (winner === "draw"
          ? `戰鬥已結束！雙方平手！（${reasonMap[reason] ?? "未知原因"}）`
          : `戰鬥已結束！勝利方：${data.teams?.[winner]?.name ?? "未知"}（${reasonMap[reason] ?? "未知原因"}）`)
        showFinalResults(data, msg);
        await updatePlayerStats(winner);

        // 彈出提示框
        alert(
          winner === "draw"
            ? `戰鬥已結束！雙方平手！（${reasonMap[reason] ?? "未知原因"}）`
            : `戰鬥已結束！勝利方：${data.teams?.[winner]?.name ?? "未知"}（${reasonMap[reason] ?? "未知原因"}）`
        );


        endBattle()
      }
    }
  }

  lastStatus = currentStatus;
});

function showFinalResults(data, msg) {
  console.log(data);  // 打印數據來確保有正確的資料

  // 檢查隊伍是否有效
  const redTeam = data.teams?.red;
  const blueTeam = data.teams?.blue;

  // 如果任一隊伍不存在，則直接返回
  if (!redTeam || !blueTeam) {
    console.error("隊伍資料不完整");
    return;
  }

  // 檢查玩家資料是否有效
  const players = data.players || {};

  // 將玩家根據 team 屬性分配到各隊伍
  const redPlayers = [];
  const bluePlayers = [];

  for (const playerId in players) {
    const player = players[playerId];
    if (player.team === "red") {
      redPlayers.push(player);
    } else if (player.team === "blue") {
      bluePlayers.push(player);
    }
  }

  // 如果 redPlayers 或 bluePlayers 內無玩家，顯示 "無資料"
  if (redPlayers.length === 0 && bluePlayers.length === 0) {
    alert("沒有玩家資料！");
    return;
  }

  // 按貢獻度排序
  const sortedRedPlayers = redPlayers.sort((a, b) => b.contribution - a.contribution);
  const sortedBluePlayers = bluePlayers.sort((a, b) => b.contribution - a.contribution);

  // 取得前5名
  const top5Red = sortedRedPlayers.slice(0, 5).map(player => `${player.name}: 貢獻了 ${player.contribution}`);
  const top5Blue = sortedBluePlayers.slice(0, 5).map(player => `${player.name}:貢獻了 ${player.contribution}`);

  // 顯示最終結果
  const resultMessage = `
    <h3>戰鬥結算</h3>
    <h5>${msg}</h5>
    <h4>紅隊貢獻前五名：</h4>
    <ul>${top5Red.length > 0 ? top5Red.map(item => `<li>${item}</li>`).join('') : '<li>無資料</li>'}</ul>
    <h4>藍隊貢獻前五名：</h4>
    <ul>${top5Blue.length > 0 ? top5Blue.map(item => `<li>${item}</li>`).join('') : '<li>無資料</li>'}</ul>
    <button onclick="closeResult()">關閉</button>
  `;

  // 顯示結算畫面
  const resultContainer = document.getElementById("battleResult");
  resultContainer.innerHTML = resultMessage;

  // 顯示結算畫面
  resultContainer.style.display = "block";
}
window.closeResult = async function () {
  const resultContainer = document.getElementById("battleResult");
  resultContainer.style.display = "none"; // 隱藏結算畫面
}

window.displayBattleLogs = async function () {
  const logsRef = ref(rtdb, "battle/logs"); // 紀錄的資料庫位置
  const logListContainer = document.getElementById("battleLogsList"); // 顯示日期列表的容器
  logListContainer.innerHTML = ""; // 清空現有的內容

  onValue(logsRef, (snapshot) => {
    const logs = snapshot.val();
    if (logs) {
      const logsByDate = {}; // 用於按日期儲存 log
      const logEntries = Object.values(logs);

      // 整理資料，按日期分組
      logEntries.forEach((log) => {
        const date = new Date(log.timestamp).toLocaleDateString(); // 取得日期部分
        if (!logsByDate[date]) {
          logsByDate[date] = [];
        }
        logsByDate[date].push(log);
      });

      // 建立日期列表
      const sortedDates = Object.keys(logsByDate).sort((a, b) => new Date(b) - new Date(a)); // 日期降序排列

      sortedDates.forEach((date) => {
        const dateItem = document.createElement("div");
        dateItem.classList.add("date-item");

        const dateHeader = document.createElement("h4");
        dateHeader.textContent = date;
        dateHeader.style.cursor = "pointer"; // 增加點擊提示

        const dailyLogs = document.createElement("ul");
        dailyLogs.style.display = "none"; // 初始隱藏每日紀錄

        logsByDate[date].forEach((log) => {
          const logEntry = document.createElement("li");
          logEntry.textContent = `時間：${new Date(log.timestamp).toLocaleTimeString()}，勝利方：${log.winner}，原因：${log.reason}`;
          dailyLogs.appendChild(logEntry);
        });

        dateHeader.addEventListener("click", () => {
          dailyLogs.style.display = dailyLogs.style.display === "none" ? "block" : "none";
        });

        dateItem.appendChild(dateHeader);
        dateItem.appendChild(dailyLogs);
        logListContainer.appendChild(dateItem);
      });

    } else {
      logListContainer.innerHTML = "<li>目前沒有戰鬥紀錄。</li>";
    }
  });
};

async function updatePlayerStats(winner) {
  const user = auth.currentUser;
  if (!user) return;

  const uid = user.uid;

  const userRef = doc(db, "users", uid);
  const teamRef = ref(rtdb, `battle/current/players/${uid}/team`);

  try {
    const [userSnap, teamSnap] = await Promise.all([
      getDoc(userRef),
      get(teamRef)
    ]);

    if (!userSnap.exists() || !teamSnap.exists()) return;

    const userData = userSnap.data();
    const playerTeam = teamSnap.val(); // "blue" or "red"

    if (!userData.inBattle) return; // 確保是參戰玩家

    // 初始化數值
    let updatedWins = userData.wins || 0;
    let updatedLosses = userData.losses || 0;
    let updatedDraws = userData.draws || 0;
    console.log(playerTeam)
    if (winner === "draw") {
      updatedDraws += 1;
    } else if (winner === playerTeam) {
      updatedWins += 1;
    } else {
      updatedLosses += 1;
    }

    await updateDoc(userRef, {
      wins: updatedWins,
      losses: updatedLosses,
      draws: updatedDraws,
      totalScore: updatedWins - updatedLosses
    });
    await updateDoc(doc(db, "users", uid), {
    inBattle: false
    });

  } catch (error) {
    console.error("更新玩家勝敗資料失敗:", error);
  }
}


window.endBattle = async function () {
  const battleRef = ref(rtdb, "battle/current");

  // 結束戰鬥時清空資料
  await set(battleRef, null);
};