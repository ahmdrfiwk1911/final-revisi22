# 🎀 Website Ulang Tahun ke-22 untuk Pacar Tersayang 💖

Web romantis bertema **Aesthetic Coquette / Pastel Pink**, dibuat khusus untuk merayakan ulang tahun pacar tercinta yang ke-22 pada tanggal **30 Oktober 2026**.

---

## ✨ Fitur-Fitur Spesial yang Bikin Hati Luluh:
1. **Pintu Masuk Prank Malware Lucu (Fake Security Alert)**:
   - Begitu link dibuka, muncul peringatan darurat: *"PERINGATAN SISTEM KRITIS: Perangkat Anda telah diserang oleh Trojan.LoveAttack.22Yo.exe"*.
   - Saat dia panik dan menekan tombol *"🚨 BERSIHKAN ANCAMAN SEKARANG! 🚨"*, layarnya akan berguncang (glitch), muncul pesan gagal, hitung mundur 3.. 2.. 1.., lalu meledak tulisan: *"KENA PRANK! 😂 Selamat Ulang Tahun yang ke-22 Sayangku!"* diiringi hujan konfeti dan musik romantis!
2. **Foto Profil Mahkota Bidadari (Hero Avatar)**: Foto terbaru dipajang anggun di bagian atas lengkap dengan mahkota putri 👑.
3. **Kue Ulang Tahun Virtual Interaktif**: Terdapat lilin angka 22 yang bisa ditiup (apinya padam lalu meledak pesta kembang api & confetti emas-pink 🎉).
4. **Surat Cinta yang Paling Menyentuh Kalbu**: Rangkaian kata jujur, tulus, bebas dari bahasa robot/klise, dan dilengkapi permohonan maaf yang manis.
5. **22 Alasan Mengapa Aku Sayang Banget Sama Kamu**: 22 kartu kebiasaan lucu dan momen nyata hubungan kalian.
6. **Galeri 18 Foto Kenangan & Lightbox Pop-up**: 18 foto asli dengan caption cerita yang 100% pas dengan aktivitas di fotonya (mulai dari pose di lorong IKEA, main mesin capit boneka, nyobain kacamata, makan cookie matcha, buket bunga, sampai foto kencan terbaru).
7. **Kotak Peluk Virtual**: Tombol interaktif untuk meminta pelukan hangat kapanpun dia sedang capek.
8. **Lagu Spesial "Just The Way You Are" - Bruno Mars**:
   - File MP3 resmi sudah tersimpan di folder `music/just_the_way_you_are.mp3`.
   - Lagu langsung mulai mengalun merdu begitu kejutan prank malware terbuka! Terdapat juga tombol kontrol di pojok kanan atas untuk menyalakan/mematikan lagu kapan saja.

---

## 🚀 Cara Membuka & Menjalankan:
1. Masuk ke folder:
   `C:\Users\Pongo\.gemini\antigravity\scratch\ultah-sayang`
2. Klik dua kali (double click) file `index.html`. File akan langsung terbuka di browser (Google Chrome, Edge, Safari, dll).

---

## 🎨 Cara Mudah Mengubah & Menyesuaikan:

### 1. Mengubah Nama Panggilan Pacar
- Kamu bisa langsung klik teks namanya di halaman web (misal: "Bidadari Cantikku 💖"), nanti akan muncul kotak dialog untuk mengganti nama panggilannya (contoh: "Aurel", "Dinda", "Sayangku"). Nama akan otomatis tersimpan!
- Atau buka `index.html` dan cari tulisan `<span class="hero-name editable-name" id="herNameDisplay">`.

### 2. Memasukkan Foto Berdua Kamu & Pacar
- Siapkan 4 foto favorit kalian, beri nama: `foto1.jpg`, `foto2.jpg`, `foto3.jpg`, `foto4.jpg` lalu taruh di dalam folder ini.
- Buka `index.html`, cari bagian `<section class="section-gallery">`, lalu ganti link `src="..."` pada tag `img` menjadi:
  ```html
  <img src="foto1.jpg" alt="Foto Kenangan" class="polaroid-img">
  ```

### 3. Cara Mengirimkan Web Ini ke HP Pacar Kamu (Gratis):
Agar pacarmu bisa membukanya langsung lewat link dari HP:
1. **Cara Paling Cepat (Netlify Drop)**:
   - Buka website [Netlify Drop](https://app.netlify.com/drop).
   - Tarik (drag & drop) seluruh folder `ultah-sayang` ke halaman tersebut.
   - Dalam 10 detik kamu akan mendapatkan link web aktif (misal: `ultah-sayang.netlify.app`).
   - Kirim link-nya ke pacarmu tepat di malam 30 Oktober jam 00:00! 💌
2. **GitHub Pages / Vercel**:
   - Kamu juga bisa mengunggah folder ini ke repository GitHub dan aktifkan GitHub Pages.
