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
getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

document.addEventListener("DOMContentLoaded", () => {
  const container = document.createElement("div");
  container.id = "authContainer";
  document.body.appendChild(container);
  renderAuthForm("login");
});

function renderAuthForm(mode) {
  const container = document.getElementById("authContainer");
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
      }
    </style>
    <div class="auth-box">
      <h2>${mode === "login" ? "登入" : "註冊"}</h2>
      ${mode === "register" ? '<input type="text" id="name" placeholder="名字" />' : ""}
      <input type="email" id="email" placeholder="帳號（Email）" />
      <input type="password" id="password" placeholder="密碼" />
      <button id="${mode === "login" ? "loginBtn" : "registerBtn"}">${mode === "login" ? "登入" : "註冊"}</button>
      <div class="switch" id="switchForm">
        ${mode === "login" ? "沒有帳號？註冊" : "已有帳號？登入"}
      </div>
    </div>
  `;

  document.getElementById("switchForm").addEventListener("click", () => {
    renderAuthForm(mode === "login" ? "register" : "login");
  });

  if (mode === "login") {
    document.getElementById("loginBtn").addEventListener("click", login);
  } else {
    document.getElementById("registerBtn").addEventListener("click", register);
  }
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
    const { user } = await createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", user.uid), {
      name,
      email,
      createdAt: serverTimestamp(),
    });
    alert("註冊成功，請登入");
    renderAuthForm("login");
  } catch (error) {
    alert("註冊失敗：" + error.message);
  }
}

async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const loginBtn = document.getElementById("loginBtn");

  if (!email || !password) {
    alert("請填寫帳號與密碼");
    return;
  }

  loginBtn.disabled = true;
  loginBtn.textContent = "登入中...";

  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password);
    const docSnap = await getDoc(doc(db, "users", user.uid));

    if (docSnap.exists()) {
      const userData = docSnap.data();
      const isAdmin = user.uid === "lAYhQE6KpQWhBiqFxE8EYV9pN1J3";
      alert(`歡迎 ${isAdmin ? "管理員 " : ""}${userData.name}`);
      window.location.href = isAdmin ? "admin-dashboard.html" : "main.html";
    } else {
      alert("找不到使用者資料");
    }
  } catch (error) {
    alert("登入失敗：" + error.message);
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = "登入";
  }
}
