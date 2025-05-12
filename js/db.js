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
  document.removeEventListener("keydown", handleEnterKey);
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
    background-color: #fff;
  }
  .password-container {
    position: relative; /* 讓眼睛按鈕可以相對於此容器定位 */
  }
  input[type="text"],
  input[type="email"],
  input[type="password"] {
    width: 100%; /* 恢復寬度 100% */
    padding: 0.5rem 2.5rem 0.5rem 0.5rem; /* 右邊增加 padding，留空間給圖示 */
    margin: 0.5rem 0;
    border-radius: 5px;
    border: 1px solid #ccc;
    box-sizing: border-box; /* 確保 padding 和 border 不會增加元素總寬度 */
  }
  .password-toggle {
    position: absolute;
    right: 0.5rem; /* 調整右邊的距離 */
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    user-select: none; /* 防止文字被選取 */
    font-size: 1.2em; /* 調整圖示大小 */
    color: #555; /* 調整圖示顏色 */
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
  .error-message {
    color: red;
    font-size: 0.85rem;
    margin-top: 0.5rem;
    min-height: 1.2em;
  }
    </style>
    <div class="auth-box">
      <h2>${mode === "login" ? "登入" : "註冊"}</h2>
      ${mode === "register" ? '<input type="text" id="name" placeholder="名字" />' : ""}
      <input type="email" id="email" placeholder="帳號（不用真實存在 只要格式正確即可）" />
      <div class="password-container">
        <input type="password" id="password" placeholder="密碼  (包含6個以上字元)" />
        <span class="password-toggle" id="togglePassword">
          <i class="fas fa-eye"></i>
        </span>
      </div>
      <div class="error-message" id="auth-error"></div>
      <button id="${mode === "login" ? "loginBtn" : "registerBtn"}">${mode === "login" ? "登入" : "註冊"}</button>
      <div class="switch" id="switchForm">
        ${mode === "login" ? "沒有帳號？註冊" : "已有帳號？登入"}
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById(mode === "register" ? "name" : "email")?.focus();
  }, 0);

  document.getElementById("switchForm").addEventListener("click", () => {
    renderAuthForm(mode === "login" ? "register" : "login");
  });

  const passwordInput = document.getElementById("password");
  const togglePasswordButton = document.getElementById("togglePassword");
  const eyeIcon = togglePasswordButton.querySelector("i");

  togglePasswordButton.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    eyeIcon.classList.toggle("fa-eye");
    eyeIcon.classList.toggle("fa-eye-slash");
  });

  if (mode === "login") {
    document.getElementById("loginBtn").addEventListener("click", login);
  } else {
    document.getElementById("registerBtn").addEventListener("click", register);
  }

  // 使用命名函式綁定 keydown（避免多次綁定）
  document.addEventListener("keydown", handleEnterKey);

  // 定義在外面
  function handleEnterKey(e) {
    if (e.key === "Enter") {
      if (mode === "login") login();
      else register();
    }
  }
}



// 初始化時可以呼叫 renderAuthForm('login') 或 renderAuthForm('register')
// 例如：

async function register() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const errorEl = document.getElementById("auth-error");

  if (!name || !email || !password) {
    errorEl.textContent = "請填寫所有欄位";
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
    errorEl.textContent = "註冊失敗：" + error.message;
  }
}

async function login() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const loginBtn = document.getElementById("loginBtn");
  const errorEl = document.getElementById("auth-error");

  if (!email || !password) {
    errorEl.textContent = "請填寫帳號與密碼";
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
      errorEl.textContent = "找不到使用者資料";
    }
  } catch (error) {
    errorEl.textContent = "登入失敗：" + error.message;
  } finally {
    loginBtn.disabled = false;
    loginBtn.textContent = "登入";
  }
}
