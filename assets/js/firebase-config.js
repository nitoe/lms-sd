// ================================================
// KONFIGURASI FIREBASE — LMS-SD
// File ini berisi koneksi ke project Firebase kita
// ================================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth }        from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore }   from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey:            "AIzaSyBF2ziZnmbIQBrnhXvNhyffSBG5XIpTiUg",
  authDomain:        "lms-sd.firebaseapp.com",
  projectId:         "lms-sd",
  storageBucket:     "lms-sd.firebasestorage.app",
  messagingSenderId: "224969859267",
  appId:             "1:224969859267:web:863f9670f923c0154c8276",
  measurementId:     "G-7J5RF2RQWX"
};

// Inisialisasi Firebase
const app  = initializeApp(firebaseConfig);

// Ekspor layanan yang akan dipakai di seluruh aplikasi
export const auth = getAuth(app);
export const db   = getFirestore(app);
