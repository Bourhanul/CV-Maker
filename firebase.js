import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyA0iV0baKVc8JNVWNvAVQ_ouoz3AS8ALRM",
  authDomain: "professional-cv-maker-15db8.firebaseapp.com",
  projectId: "professional-cv-maker-15db8",
  storageBucket: "professional-cv-maker-15db8.appspot.com",
  messagingSenderId: "36825813541",
  appId: "1:36825813541:web:62a772cbc1738a7fbd25cc"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// ✅ Signup
window.signup = () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Signup successful");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// ✅ Login
window.login = () => {
  const email = document.getElementById("auth-email").value;
  const password = document.getElementById("auth-password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert("Login successful");
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// ✅ Google Login
window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .then(() => {
      window.location.href = "dashboard.html";
    })
    .catch(err => alert(err.message));
};

// ✅ Keep login on refresh
onAuthStateChanged(auth, user => {
  if (user) console.log("Logged in:", user.email);
});
