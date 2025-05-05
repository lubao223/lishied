
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
        import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
        import { getFirestore, doc, getDoc , updateDoc,addDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";
        import { collection, getDocs, orderBy, query ,deleteDoc } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

        import { getDatabase, ref, onValue,push,set ,get,runTransaction} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-database.js";  // 這裡引入 Firebase Realtime Database API
        
        
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
        
        window.showProfile = async function() {
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
                  <h3>個人檔案</h3>
                  <p>姓名：<span id="current-name">${userData.name || "使用者"}</span> <button onclick="showEditNameForm()">更改名字</button></p>
                  <div id="edit-name-form" style="display:none;">
                    <input type="text" id="new-name" placeholder="輸入新名字">
                    <button onclick="updateUserName()">儲存</button>
                    <button onclick="hideEditNameForm()">取消</button>
                  </div>
                  <p>Email：${auth.currentUser.email}</p>
                  <p>最高分數：${userData.bestScore || 0}</p>
        
                  <h4>已完成的地點</h4>
                  ${completedListHTML}
        
                  <h4>區域完成進度</h4>
                  ${regionProgressHTML}
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
        
        window.showEditNameForm = function (){
          document.getElementById("edit-name-form").style.display = "block";
          document.getElementById("current-name").style.display = "none";
          document.querySelector('#main-content p button').style.display = 'none'; // 隱藏更改名字按鈕
        }
        
        window.hideEditNameForm= function() {
          document.getElementById("edit-name-form").style.display = "none";
          document.getElementById("current-name").style.display = "inline";
          document.querySelector('#main-content p button').style.display = 'inline'; // 顯示更改名字按鈕
        }
        
        window.updateUserName = async function(){
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
        
        window.logout = function() {
            localStorage.clear();
          signOut(auth).then(() => {
            window.location.href = "index.html";
          });
        };

        
        window.receiveGameScore = async function(score) {
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

          window.getLeaderboard = async function() {
            const usersRef = collection(db, "users"); // 假設 Firebase 中有一個 "users" 集合
            const q = query(usersRef, orderBy("bestScore", "desc")); // 按照 bestScore 進行倒序排序
          
            try {
              const querySnapshot = await getDocs(q);
              const leaderboard = [];
              
              // 將每個用戶的 bestScore 和 name 推入 leaderboard 陣列
              querySnapshot.forEach((doc) => {
                const userData = doc.data();
                leaderboard.push({
                  name: userData.name,
                  bestScore: userData.bestScore
                });
              });
          
              // 顯示排行榜
              const leaderboardElement = document.getElementById("leaderboard");
leaderboardElement.innerHTML = ""; // 清空目前顯示的內容

leaderboard.forEach((entry, index) => {
  const entryElement = document.createElement("div");
  entryElement.classList.add("leaderboard-entry");

  // 根據名次設定顏色樣式
  if (index === 0) {
    entryElement.classList.add("gold");
  } else if (index === 1) {
    entryElement.classList.add("silver");
  } else if (index === 2) {
    entryElement.classList.add("bronze");
  }

  entryElement.innerHTML = `<strong>${entry.name}</strong>: ${entry.bestScore}`;
  leaderboardElement.appendChild(entryElement);
});

          
            } catch (error) {
              console.error("無法載入排行榜資料", error);
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
        <small>發布於 ${createdTime} ${editedTime}</small><br>
        <button onclick="likeComment('${id}')">👍 ${data.likes}</button>
        <button onclick="toggleReplyForm('${id}')">回覆</button>
        <div id="replyForm-${id}" style="display:none;">
          <textarea id="replyText-${id}" placeholder="輸入你的回覆"></textarea>
          <button onclick="submitReply('${id}')">送出回覆</button>
        </div>
        <div id="replies-${id}"></div>
        ${isOwner ? `
          <button onclick="editComment('${id}', '${data.text.replace(/'/g, "\\'")}')">編輯</button>
          <button onclick="deleteComment('${id}')">刪除</button>
        ` : ""}
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

window.markComplete = async function() {
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





window.loadAchievements = async function() {
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
      { id: "completedNorthAll", name: "天龍國巡禮", description: "完成所有北部古蹟介紹", condition: () => groupByRegion["北部"] && completedPlaces.filter(place => groupByRegion["北部"].some(card => card.title === place)).length === (groupByRegion["北部"] ? groupByRegion["北部"].length : 0) },
      { id: "completedCentralAll", name: "小小年紀所向無敵神秘公權力", description: "完成所有中部古蹟介紹", condition: () => groupByRegion["中部"] && completedPlaces.filter(place => groupByRegion["中部"].some(card => card.title === place)).length === (groupByRegion["中部"] ? groupByRegion["中部"].length : 0) },
      { id: "completedSouthAll", name: "到南部弄假牙", description: "完成所有南部古蹟介紹", condition: () => groupByRegion["南部"] && completedPlaces.filter(place => groupByRegion["南部"].some(card => card.title === place)).length === (groupByRegion["南部"] ? groupByRegion["南部"].length : 0) },
      { id: "completedEastAll", name: "花蓮王", description: "完成所有東部古蹟介紹", condition: () => groupByRegion["東部"] && completedPlaces.filter(place => groupByRegion["東部"].some(card => card.title === place)).length === (groupByRegion["東部"] ? groupByRegion["東部"].length : 0) },
      
      {
        id: "completedAll",
        name: "恭喜成為 TSJ (Time Span Jumper)",
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
        <iframe src="mm/damain.html" width="100%" height="300vh" style="border:none;"></iframe>
      `;
    }

  } catch (error) {
    console.error("載入成就失敗：", error);
    document.getElementById("achievements-list").textContent = "載入成就失敗，請稍後再試。";
  }
};



window.saveCompletedToLocal = function(completedPlaces) {
  try {
    const completedString = JSON.stringify(completedPlaces);
    localStorage.setItem('completedPlaces', completedString);
    console.log("已完成地點已儲存至 localStorage:", completedPlaces);
  } catch (error) {
    console.error("儲存已完成地點至 localStorage 失敗:", error);
  }
};

window.getCompletedFromLocal = function() {
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
