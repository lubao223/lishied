// 引入 Firebase SDK 模組
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import {
  getFirestore,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  serverTimestamp,
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";


// Firebase 設定
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

// 初始化 Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

// 等待 DOM 載入後產生登入/註冊畫面
document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.innerHTML = `
    <style>
      .auth-box {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 2rem;
        border: 1px solid #ccc;
        border-radius: 12px;
        width: 300px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.1);
        font-family: sans-serif;
        text-align: center;
      }
      input {
        width: 100%;
        padding: 0.5rem;
        margin: 0.5rem 0;
        border-radius: 5px;
        border: 1px solid #ccc;
      }
      button {
        width: 100%;
        padding: 0.6rem;
        margin-top: 1rem;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
      }
      .switch {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: blue;
        cursor: pointer;
        text-decoration: underline;
        position: relative;
      }
    </style>
    <div class="auth-box" id="authBox">
      <h2>登入</h2>
      <input type="email" id="email" placeholder="帳號（Email）" />
      <input type="password" id="password" placeholder="密碼" />
      <button id="loginBtn">登入</button>
      <div class="switch" id="switchToRegister">沒有帳號？註冊</div>
    </div>
  `;
  document.body.appendChild(container);

  // 切換註冊畫面
  document.getElementById("switchToRegister").onclick = () => {
    document.getElementById("authBox").innerHTML = `
      <h2>註冊</h2>
      <input type="text" id="name" placeholder="名字" />
      <input type="email" id="email" placeholder="帳號（Email）" />
      <input type="password" id="password" placeholder="密碼" />
      <button id="registerBtn">註冊</button>
      <div class="switch" id="switchToLogin">已有帳號？登入</div>
    `;
    document.getElementById("switchToLogin").onclick = renderLoginForm;
    document.getElementById("registerBtn").onclick = register;
  };

  document.getElementById("loginBtn").onclick = login;
});

function renderLoginForm() {
  document.getElementById("authBox").innerHTML = `
    <h2>登入</h2>
    <input type="email" id="email" placeholder="帳號（Email）" />
    <input type="password" id="password" placeholder="密碼" />
    <button id="loginBtn">登入</button>
    <div class="switch" id="switchToRegister">沒有帳號？註冊</div>
  `;
  document.getElementById("switchToRegister").onclick = () => {
    document.getElementById("authBox").innerHTML = `
      <h2>註冊</h2>
      <input type="text" id="name" placeholder="名字" />
      <input type="email" id="email" placeholder="帳號（Email）" />
      <input type="password" id="password" placeholder="密碼" />
      <button id="registerBtn">註冊</button>
      <div class="switch" id="switchToLogin">已有帳號？登入</div>
    `;
    document.getElementById("switchToLogin").onclick = renderLoginForm;
    document.getElementById("registerBtn").onclick = register;
  };
  document.getElementById("loginBtn").onclick = login;
}

async function register() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    alert("請填寫所有欄位");
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;
    await setDoc(doc(db, "users", uid), { name, email ,createdAt: serverTimestamp(), });
    alert("註冊成功，請登入");
    renderLoginForm();
  } catch (error) {
    alert("註冊失敗：" + error.message);
  }
}

async function login() {
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;
  
    if (!email || !password) {
      alert("請填寫帳號與密碼");
      return;
    }
  
   
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const uid = userCredential.user.uid;
    
        // 登入成功後取得使用者資料
        const docSnap = await getDoc(doc(db, "users", uid));
    
        if (docSnap.exists()) {
          const userData = docSnap.data();
          await updateDoc(doc(db, "users", uid), {
            lastLogin: serverTimestamp(),  // 🔹 最後登入時間
          });
          if (uid === "lAYhQE6KpQWhBiqFxE8EYV9pN1J3") {
            alert("歡迎管理員 " + userData.name);
            window.location.href = "admin-dashboard.html"; // 進入後台
          } else {
            alert("登入成功，歡迎 " + userData.name);
            
            window.location.href = "main.html"; // 普通使用者頁面
          }
        } else {
          alert("找不到使用者資料");
        }
      } catch (error) {
        alert("登入失敗：" + error.message);
      }
  }
  



