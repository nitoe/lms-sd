# 🎒 LMS-SD — Learning Management System Sekolah Dasar

Aplikasi LMS berbasis web untuk siswa Sekolah Dasar kelas 1–6. Dibangun dengan HTML, CSS, dan Vanilla JavaScript murni, dengan Firebase sebagai backend autentikasi dan database.

---

## 🌐 Demo
**[Lihat Website →](https://nitoe.github.io/lms-sd)**

---

## ✨ Fitur Utama

| Fitur | Admin (Guru) | Siswa |
|---|---|---|
| Login & autentikasi | ✅ | ✅ |
| Kelola akun siswa | ✅ | — |
| Buat & edit materi pelajaran | ✅ | — |
| Buat & edit soal kuis | ✅ | — |
| Lihat laporan progres siswa | ✅ | — |
| Baca materi per kelas | — | ✅ |
| Kerjakan kuis interaktif | — | ✅ |
| Sistem poin & badge | — | ✅ |
| Leaderboard per kelas | — | ✅ |

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Backend & Auth**: [Firebase](https://firebase.google.com/) (Firestore + Authentication + Storage)
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions (otomatis)

---

## 📁 Struktur Folder

```
lms-sd/
│
├── index.html                  ← Halaman login (entry point)
│
├── admin/
│   ├── dashboard.html          ← Ringkasan statistik admin
│   ├── siswa.html              ← Kelola akun siswa
│   ├── materi.html             ← Buat & edit materi pelajaran
│   ├── kuis.html               ← Buat & edit soal kuis
│   └── laporan.html            ← Laporan progres seluruh siswa
│
├── siswa/
│   ├── dashboard.html          ← Beranda siswa (poin, badge)
│   ├── materi.html             ← Daftar & baca materi
│   ├── kuis.html               ← Kerjakan kuis
│   └── profil.html             ← Profil & riwayat belajar
│
└── assets/
    ├── css/
    │   ├── main.css            ← Style global
    │   ├── admin.css           ← Style panel admin
    │   └── siswa.css           ← Style UI ramah anak
    └── js/
        ├── firebase-config.js  ← Konfigurasi Firebase
        ├── auth.js             ← Autentikasi & routing
        ├── admin/              ← Script halaman admin
        └── siswa/              ← Script halaman siswa
```

---

## 🚀 Cara Menjalankan Lokal

1. Clone repository ini:
   ```bash
   git clone https://github.com/nitoe/lms-sd.git
   cd lms-sd
   ```

2. Buat file `assets/js/firebase-config.js` dan isi dengan konfigurasi Firebase kamu:
   ```js
   // Dapatkan dari: Firebase Console → Project Settings → Your Apps
   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_PROJECT.firebaseapp.com",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_PROJECT.appspot.com",
     messagingSenderId: "YOUR_SENDER_ID",
     appId: "YOUR_APP_ID"
   };
   ```

3. Buka `index.html` di browser (gunakan Live Server di VS Code, atau langsung buka file).

---

## 🗄️ Struktur Database Firestore

```
users/{uid}
  ├── nama: string
  ├── email: string
  ├── role: "admin" | "siswa"
  └── kelas: number (1–6, khusus siswa)

materi/{materi_id}
  ├── judul: string
  ├── konten: string (HTML)
  ├── mapel: string
  ├── kelas: number
  └── gambar_url: string

kuis/{kuis_id}
  ├── judul: string
  ├── kelas: number
  ├── mapel: string
  └── soal: Array<{ pertanyaan, pilihan, jawaban }>

progres/{uid}
  ├── materi_selesai: string[]
  ├── kuis_hasil: { [kuis_id]: { skor, tanggal } }
  ├── poin_total: number
  └── badge: string[]
```

---

## 🗺️ Roadmap Pengembangan

- [x] **Fase 1** — Setup repo, halaman login, Firebase Auth
- [ ] **Fase 2** — Panel admin (CRUD siswa, materi, kuis)
- [ ] **Fase 3** — Dashboard siswa (materi, kuis, nilai)
- [ ] **Fase 4** — Gamifikasi (poin, badge, leaderboard)
- [ ] **Fase 5** — Polish UI, bug fixing, deployment otomatis

---

## 👤 Developer

Dibuat dengan ❤️ oleh [@nitoe](https://github.com/nitoe)

---

## 📄 Lisensi

MIT License — bebas digunakan dan dimodifikasi.
