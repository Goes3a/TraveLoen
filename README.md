# TraveLoen

Rekap keuangan perjalanan dinas: Agenda → Traveler → Expense → Dashboard / Invoice PDF.
Dibungkus jadi aplikasi Android (APK) dengan Capacitor.

## Cara mendapatkan APK (tanpa install apa pun di laptop)

APK dibuat otomatis oleh GitHub (gratis). Cukup upload folder ini sekali.

1. Buat akun di https://github.com (gratis), lalu klik **New repository**. Beri nama `traveloen`, pilih Private, klik **Create repository**.
2. Di halaman repository klik **uploading an existing file**.
3. Ekstrak `TraveLoen-project.zip`, lalu seret SEMUA isi foldernya (termasuk folder `www`, `.github`, `scripts`, dan file `package.json`, `package-lock.json`, `capacitor.config.json`) ke halaman upload. Klik **Commit changes**.
   - Bila folder `.github` tidak ikut terupload (folder tersembunyi), klik **Add file → Create new file**, ketik nama `.github/workflows/build-apk.yml`, tempel isi file `build-apk.yml` dari zip, lalu Commit.
4. Buka tab **Actions**. Proses "Build APK" jalan sekitar 5-10 menit.
5. Setelah centang hijau, klik proses tersebut, turun ke bagian **Artifacts**, unduh **TraveLoen-APK** (berupa zip berisi `app-debug.apk`).
6. Kirim `app-debug.apk` ke HP, buka, dan izinkan "Install dari sumber tidak dikenal" bila diminta.

## Catatan pemakaian

- Data tersimpan di HP (lokal). Gunakan **Cadangan Data** di Dashboard untuk menyimpan file JSON, dan **Pulihkan** untuk memuatnya kembali.
- Data dari versi web lama tidak ikut pindah otomatis. Pindahkan manual bila perlu.
- Sharing punya tiga mode: Rata, Persen (total harus 100%), Nominal (total harus sama dengan Price). Sisa pembulatan rupiah masuk ke traveler pertama dalam daftar.
- Role Admin/User hanya mengatur tampilan, bukan keamanan.

## Mencoba di komputer

    node scripts/serve.js

lalu buka http://localhost:5173.
