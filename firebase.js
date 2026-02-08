// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyA0iV0baKVc8JNVWNvAVQ_ouoz3AS8ALRM",
  authDomain: "professional-cv-maker-15db8.firebaseapp.com",
  projectId: "professional-cv-maker-15db8",
  storageBucket: "professional-cv-maker-15db8.appspot.com",
  messagingSenderId: "36825813541",
  appId: "1:36825813541:web:62a772cbc1738a7fbd25cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Login
window.googleLogin = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Login success:", result.user);
      window.location.href = "dashboard.html"; // next page
    })
    .catch((error) => {
      console.error("Login error:", error.message);
    });
};

// Keep login on refresh
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User logged in:", user.email);
  } else {
    console.log("User not logged in");
  }
});

// Logout
window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};
