# 🎒 LMS-SD — Learning Management System Sekolah Dasar

Aplikasi LMS berbasis web untuk siswa Sekolah Dasar kelas 1–6. Dibangun dengan HTML, CSS, dan Vanilla JavaScript, dengan Firebase sebagai backend.

[![GitHub Pages](https://img.shields.io/badge/Live-nitoe.github.io/lms--sd-green?style=flat-square&logo=github)](https://nitoe.github.io/lms-sd)

---

## 🌐 Demo
**[Buka Aplikasi → nitoe.github.io/lms-sd](https://nitoe.github.io/lms-sd)**

---

## ✨ Fitur

| Fitur | Admin (Guru) | Siswa |
|---|---|---|
| Login & autentikasi | ✅ | ✅ |
| Kelola akun siswa (CRUD) | ✅ | — |
| Buat & edit materi pelajaran | ✅ | — |
| Buat & edit soal kuis | ✅ | — |
| Laporan progres per siswa | ✅ | — |
| Baca materi per kelas | — | ✅ |
| Kerjakan kuis interaktif | — | ✅ |
| Sistem poin otomatis | — | ✅ |
| Koleksi badge (10 badge) | — | ✅ |
| Leaderboard per kelas | — | ✅ |
| Profil & riwayat nilai | — | ✅ |

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6 Modules)
- **Backend**: Firebase Authentication + Firestore Database
- **Hosting**: GitHub Pages

---

## 📁 Struktur Folder

```
lms-sd/
├── index.html                  ← Halaman login
├── 404.html                    ← Halaman error custom
│
├── admin/
│   ├── dashboard.html          ← Beranda admin
│   ├── siswa.html              ← Kelola siswa
│   ├── materi.html             ← Kelola materi
│   ├── kuis.html               ← Kelola kuis
│   └── laporan.html            ← Laporan progres siswa
│
├── siswa/
│   ├── dashboard.html          ← Beranda siswa
│   ├── materi.html             ← Baca materi
│   ├── kuis.html               ← Kerjakan kuis
│   ├── profil.html             ← Profil & badge
│   └── leaderboard.html        ← Papan peringkat
│
└── assets/
    └── js/
        ├── firebase-config.js  ← Konfigurasi Firebase
        └── auth.js             ← Autentikasi & route guard
```

---

## 🚀 Setup Lokal

1. Clone repo:
   ```bash
   git clone https://github.com/nitoe/lms-sd.git
   ```

2. Isi `assets/js/firebase-config.js` dengan konfigurasi Firebase project kamu.

3. Buka `index.html` di browser (gunakan Live Server).

---

## 🗺️ Roadmap

- [x] **Fase 1** — Login & Firebase Auth
- [x] **Fase 2** — Panel Admin (CRUD siswa, materi, kuis)
- [x] **Fase 3** — Dashboard Siswa (materi, kuis, profil, badge)
- [x] **Fase 4** — Laporan Admin & Leaderboard Siswa
- [x] **Fase 5** — Security Rules, Polish & Finishing

---

## 👤 Developer

Dibuat dengan ❤️ oleh [@nitoe](https://github.com/nitoe)
