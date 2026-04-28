// ================================================
// AUTH.JS — Logika autentikasi LMS-SD
// Dipakai oleh: index.html, semua halaman admin & siswa
// ================================================

import { auth, db } from "./firebase-config.js";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";


// ── Utilitas: ubah nama siswa jadi format email ──────────────
// Contoh: "Budi Santoso" kelas 3  →  "budisantoso.k3@lms-sd.app"
export function namaKeEmail(nama, kelas) {
  const bersih = nama
    .toLowerCase()
    .replace(/\s+/g, "")          // hapus spasi
    .replace(/[^a-z0-9]/g, "");  // hapus karakter aneh
  return `${bersih}.k${kelas}@lms-sd.app`;
}


// ── Login Admin ──────────────────────────────────────────────
export async function loginAdmin(email, password) {
  // 1. Login ke Firebase Auth
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  // 2. Cek role di Firestore
  const snap = await getDoc(doc(db, "users", user.uid));
  if (!snap.exists() || snap.data().role !== "admin") {
    await signOut(auth);
    throw new Error("Akun ini bukan admin.");
  }

  // 3. Redirect ke dashboard admin
  window.location.href = "/lms-sd/admin/dashboard.html";
}


// ── Login Siswa ──────────────────────────────────────────────
export async function loginSiswa(nama, kelas, password) {
  const email = namaKeEmail(nama, kelas);

  // 1. Login ke Firebase Auth
  const { user } = await signInWithEmailAndPassword(auth, email, password);

  // 2. Cek role di Firestore
  const snap = await getDoc(doc(db, "users", user.uid));
  if (!snap.exists() || snap.data().role !== "siswa") {
    await signOut(auth);
    throw new Error("Akun siswa tidak ditemukan.");
  }

  // 3. Redirect ke dashboard siswa
  window.location.href = "/lms-sd/siswa/dashboard.html";
}


// ── Logout ───────────────────────────────────────────────────
export async function logout() {
  await signOut(auth);
  window.location.href = "/lms-sd/index.html";
}


// ── Route Guard: hanya admin yang boleh masuk ────────────────
// Pakai di semua halaman admin/ dengan:
//   import { guardAdmin } from "../assets/js/auth.js";
//   guardAdmin();
export function guardAdmin() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return window.location.href = "/lms-sd/index.html";
    const snap = await getDoc(doc(db, "users", user.uid));
    if (!snap.exists() || snap.data().role !== "admin") {
      window.location.href = "/lms-sd/index.html";
    }
  });
}


// ── Route Guard: hanya siswa yang boleh masuk ────────────────
// Pakai di semua halaman siswa/ dengan:
//   import { guardSiswa } from "../assets/js/auth.js";
//   guardSiswa();
export function guardSiswa() {
  onAuthStateChanged(auth, async (user) => {
    if (!user) return window.location.href = "/lms-sd/index.html";
    const snap = await getDoc(doc(db, "users", user.uid));
    if (!snap.exists() || snap.data().role !== "siswa") {
      window.location.href = "/lms-sd/index.html";
    }
  });
}


// ── Ambil data user yang sedang login ────────────────────────
export async function getCurrentUserData() {
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (!user) return resolve(null);
      try {
        const snap = await getDoc(doc(db, "users", user.uid));
        resolve(snap.exists() ? { uid: user.uid, ...snap.data() } : null);
      } catch (e) {
        reject(e);
      }
    });
  });
}
