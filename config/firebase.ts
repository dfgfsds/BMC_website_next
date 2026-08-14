import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDGB9tsMWcng-2LY0rCqAIcQ4Jp_nIeLyE",
  authDomain: "neural-ripple-504906-f6.firebaseapp.com",
  projectId: "neural-ripple-504906-f6",
  storageBucket: "neural-ripple-504906-f6.firebasestorage.app",
  messagingSenderId: "537746754440",
  appId: "1:537746754440:web:822c01232da15ede4d083d",
  measurementId: "G-MDVPTQNGRR"
};

// Initialize Firebase for SSR compatibility
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Optional: ensure prompt for account selection
googleProvider.setCustomParameters({
  prompt: 'select_account'
});

export { app, auth, googleProvider };
