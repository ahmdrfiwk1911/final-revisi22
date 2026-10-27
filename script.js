/* ========================================================
   ULTAH SAYANG - INTERACTIVE SCRIPT
   Untuk Ulang Tahun ke-22 Pacar Tercinta (30 Oktober 2026)
   ======================================================== */

// --- 22 Reasons Why I Love You Data (Natural, Real, & Personal) ---
const reasonsData = [
  { icon: "🌸", text: "Caramu tiba-tiba nyariin tangan aku pas kita lagi jalan berdua." },
  { icon: "✨", text: "Muka kamu pas lagi ketawa lepas sampai matanya menyipit, lucu banget." },
  { icon: "💖", text: "Cara kamu excited banget kalau lagi cerita hal random yang kamu alamin seharian." },
  { icon: "🧸", text: "Kamu yang selalu inget hal-hal kecil tentang aku, bahkan hal sepele yang aku sendiri lupa." },
  { icon: "👀", text: "Suara manja kamu pas lagi ngantuk atau baru bangun tidur." },
  { icon: "💌", text: "Kesabaran kamu yang luar biasa pas ngadepin sifat aku yang kadang keras kepala dan kurang peka." },
  { icon: "🎀", text: "Cara kamu tetep perhatian dan nanyain makan meskipun lagi ngambek sama aku." },
  { icon: "🌙", text: "Kamu yang selalu jadi orang pertama yang pengen aku kabarin pas lagi seneng atau lagi capek." },
  { icon: "🍓", text: "Muka gemes kamu pas lagi makan makanan favorit yang kamu pengenin dari lama." },
  { icon: "🤝", text: "Pelukan kamu yang selalu beneran berhasil bikin rasa capek aku hilang seketika." },
  { icon: "🌟", text: "Kamu nggak pernah nuntut hal yang aneh-aneh dan selalu ngehargain hal sekecil apapun yang aku kasih." },
  { icon: "🌷", text: "Cara kamu nenangin aku pas kepala aku lagi penuh dan overthinking sendiri." },
  { icon: "☕", text: "Karena kamu selalu mau dengerin keluhan aku tanpa pernah ngehakimi." },
  { icon: "🕊️", text: "Momen-momen pas kita cuma diem-dieman atau di jalan tapi rasanya tetep nyaman banget." },
  { icon: "💎", text: "Cara kamu mandang aku yang selalu bikin aku ngerasa bener-bener dihargai dan disayang." },
  { icon: "🎨", text: "Kamu yang selalu rajin ngingetin aku buat jaga kesehatan dan jangan telat makan." },
  { icon: "🌻", text: "Karena kamu selalu percaya sama aku, bahkan di saat aku sendiri lagi ragu sama diri sendiri." },
  { icon: "🥞", text: "Selera humor kita yang nyambung dan recehnya sama." },
  { icon: "🎶", text: "Cara kamu nunjukkin rasa sayang dengan caramu sendiri yang sederhana tapi tulus banget." },
  { icon: "🏡", text: "Karena nemenin kamu jalan atau sekadar ngobrol tuh bener-bener nggak pernah ngebosenin." },
  { icon: "💍", text: "Karena sama kamu, aku ngerasa nggak perlu pura-pura jadi orang lain." },
  { icon: "👑", text: "Dan yang paling penting: karena kamu adalah kamu, orang yang selalu pengen aku jagain sampai kapanpun." }
];

// --- Audio Synthesizer (Romantic Music Box Melodies) ---
let audioCtx = null;
let isMusicPlaying = false;
let musicInterval = null;

// Soft romantic melody chords (Pachelbel / Lofi Romantic Arpeggio)
const notes = [
  // C4, E4, G4, B4, C5, D5, E5, G5
  261.63, 329.63, 392.00, 493.88, 523.25, 587.33, 659.25, 783.99
];

const melodyPattern = [
  // Gentle dreamy arpeggios
  [0, 2, 4, 6],
  [1, 3, 5, 7],
  [0, 2, 4, 5],
  [2, 4, 6, 7],
  [0, 3, 4, 6],
  [1, 2, 5, 6]
];

function initAudio() {
  if (!audioCtx) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioCtx = new AudioContext();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
}

function playSoftTone(freq, duration = 1.2, volume = 0.08) {
  if (!audioCtx) return;
  try {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = 'sine'; // Soft celestial chime
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(volume, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch (e) {
    console.error("Audio error:", e);
  }
}

function playCelebrationFanfare() {
  initAudio();
  const chimeNotes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
  chimeNotes.forEach((note, index) => {
    setTimeout(() => {
      playSoftTone(note, 1.8, 0.15);
    }, index * 120);
  });
}

function startRomanticMusic() {
  const bgm = document.getElementById('bgmAudio');
  const icon = document.getElementById('musicIcon');
  const label = document.getElementById('musicLabel');

  if (bgm) {
    bgm.volume = 0.7;
    bgm.play().then(() => {
      isMusicPlaying = true;
      if (icon) icon.textContent = '🔊';
      if (label) label.textContent = 'Just The Way You Are 🎵';
    }).catch((err) => {
      console.log('Autoplay waiting for user gesture:', err);
    });
  }
}

function stopRomanticMusic() {
  const bgm = document.getElementById('bgmAudio');
  const icon = document.getElementById('musicIcon');
  const label = document.getElementById('musicLabel');

  if (bgm) {
    bgm.pause();
    isMusicPlaying = false;
    if (icon) icon.textContent = '🎵';
    if (label) label.textContent = 'Putar Lagu Bruno Mars';
  }
}

function toggleMusic() {
  const bgm = document.getElementById('bgmAudio');
  if (bgm && !bgm.paused) {
    stopRomanticMusic();
  } else {
    startRomanticMusic();
  }
}

// --- Dynamic Name Customization ---
function initNameEditor() {
  const nameDisplay = document.getElementById('herNameDisplay');
  const savedName = localStorage.getItem('ultah_pacar_name');
  if (savedName) {
    nameDisplay.textContent = savedName;
  }

  nameDisplay.addEventListener('click', () => {
    const currentName = nameDisplay.textContent.replace(' 💖', '').trim();
    const newName = prompt('Ubah nama panggilan pacar kamu:', currentName);
    if (newName && newName.trim() !== '') {
      const cleanName = newName.trim();
      nameDisplay.textContent = `${cleanName} 💖`;
      localStorage.setItem('ultah_pacar_name', `${cleanName} 💖`);
    }
  });
}

// --- Interactive Cake & Blowing Candle ---
function initCake() {
  const blowBtn = document.getElementById('blowCandleBtn');
  const flame1 = document.getElementById('flame1');
  const flame2 = document.getElementById('flame2');
  const wishMessage = document.getElementById('wishMessage');

  blowBtn.addEventListener('click', () => {
    flame1.classList.add('extinguished');
    flame2.classList.add('extinguished');
    wishMessage.classList.remove('hidden');

    blowBtn.disabled = true;
    blowBtn.style.opacity = '0.7';
    blowBtn.innerHTML = '<span>Lilin Sudah Ditiup! Harapanmu Terkabul 💖</span>';

    // Sound effect & massive confetti
    playCelebrationFanfare();
    triggerMassiveConfetti();
  });
}

// --- Render 22 Reasons Why I Love You ---
function initReasons() {
  const container = document.getElementById('reasonsGrid');
  container.innerHTML = '';

  reasonsData.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = 'reason-card';
    card.innerHTML = `
      <span class="reason-number">#${index + 1}</span>
      <div class="reason-icon">${item.icon}</div>
      <p class="reason-text">${item.text}</p>
    `;

    card.addEventListener('click', (e) => {
      playSoftTone(440 + index * 20, 0.4, 0.08);
      createFloatingHeart(e.clientX || window.innerWidth / 2, e.clientY || window.innerHeight / 2);
      card.style.transform = 'scale(0.97)';
      setTimeout(() => {
        card.style.transform = '';
      }, 150);
    });

    container.appendChild(card);
  });
}

// --- Virtual Hug Button & Counter ---
function initHugCounter() {
  const hugBtn = document.getElementById('sendHugBtn');
  const hugCountEl = document.getElementById('hugCount');
  
  let count = parseInt(localStorage.getItem('ultah_hug_count') || '1024', 10);
  hugCountEl.textContent = count.toLocaleString('id-ID');

  const sweetWords = [
    'Peluk erat! 🤗',
    'Sayang banget ❤️',
    'Semangat cantiknya aku!',
    'Jangan capek-capek yaa 🥰',
    'Kangeen 🥺',
    'Muachhh 💋',
    'Proud of you selalu! ✨'
  ];

  hugBtn.addEventListener('click', (e) => {
    count++;
    hugCountEl.textContent = count.toLocaleString('id-ID');
    localStorage.setItem('ultah_hug_count', count.toString());

    initAudio();
    playSoftTone(659.25, 0.5, 0.1);

    // Burst multiple floating hearts with sweet words
    for (let i = 0; i < 8; i++) {
      setTimeout(() => {
        const rect = hugBtn.getBoundingClientRect();
        const startX = rect.left + rect.width / 2 + (Math.random() * 120 - 60);
        const startY = rect.top + (Math.random() * 20 - 10);
        const randomWord = sweetWords[Math.floor(Math.random() * sweetWords.length)];
        createFloatingHeart(startX, startY, randomWord);
      }, i * 80);
    }
  });
}

function createFloatingHeart(x, y, customText = '💖') {
  const heart = document.createElement('div');
  heart.className = 'floating-heart';
  heart.textContent = customText;
  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1600);
}

// --- Background Floating Particles (Canvas) ---
function initParticleCanvas() {
  const canvas = document.getElementById('particleCanvas');
  const ctx = canvas.getContext('2d');

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const particleCount = Math.min(35, Math.floor(window.innerWidth / 30));

  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 14 + 10,
      speedX: Math.random() * 1 - 0.5,
      speedY: Math.random() * 1 + 0.6,
      rotation: Math.random() * 360,
      rotSpeed: Math.random() * 2 - 1,
      type: Math.random() > 0.4 ? 'petal' : 'heart',
      opacity: Math.random() * 0.5 + 0.2
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach((p) => {
      p.y += p.speedY;
      p.x += Math.sin(p.y * 0.01) * 0.8 + p.speedX;
      p.rotation += p.rotSpeed;

      if (p.y > height + 20) {
        p.y = -20;
        p.x = Math.random() * width;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.type === 'heart') {
        ctx.fillStyle = '#f472b6';
        ctx.font = `${p.size}px serif`;
        ctx.fillText('💖', 0, 0);
      } else {
        // Soft pink petal
        ctx.fillStyle = '#fbcfe8';
        ctx.beginPath();
        ctx.ellipse(0, 0, p.size / 2, p.size, Math.PI / 4, 0, 2 * Math.PI);
        ctx.fill();
      }

      ctx.restore();
    });

    requestAnimationFrame(render);
  }

  render();
}

// --- Confetti Engine ---
let confettiParticles = [];
let confettiAnimationId = null;

function triggerMassiveConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#f472b6', '#ec4899', '#db2777', '#fde047', '#ffffff', '#fda4af'];
  const confettiCount = 140;

  confettiParticles = [];
  for (let i = 0; i < confettiCount; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
      w: Math.random() * 12 + 6,
      h: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 24,
      vy: (Math.random() - 0.8) * 22,
      gravity: 0.35,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);

  function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let activeCount = 0;

    confettiParticles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += p.gravity;
      p.vx *= 0.98;
      p.rotation += p.rotSpeed;
      p.opacity -= 0.005;

      if (p.opacity > 0 && p.y < canvas.height + 50) {
        activeCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (activeCount > 0) {
      confettiAnimationId = requestAnimationFrame(loop);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
  }

  loop();
}

// --- Photos Gallery Data (18 Real Sweet Memories) ---
const galleryPhotos = [
  {
    src: "images/IMG_20250621_182104769_BURST0008.jpg",
    title: "cuu amaayy kamu di foto ini 🛒",
    date: "21 Juni 2025",
    desc: "first time ke ikea bareng kamu, disini kita muter-muter membayangkan rumah impian kita nanti."
  },
  {
    src: "images/IMG_20250801_203958_653.jpg",
    title: "Muka Nunggu Makanan 🍜",
    date: "1 Agustus 2025",
    desc: "Muka cemberut nahan laper pas nunggu pesenan makanan nggak dateng-dateng."
  },
  {
    src: "images/IMG_20250811_152613_808.jpg",
    title: "Mirror Selfie di grammars cihapit 🪞",
    date: "11 Agustus 2025",
    desc: "Main ke grammars cihapit tempat para skena banyak duit ngumpul, tapi kita cuman liat liat doang gaada uang soalnya haha"
  },
  {
    src: "images/IMG_20251003_194622_617.jpg",
    title: "Pose Kuntum Bunga 🌸",
    date: "3 Oktober 2025",
    desc: "Dress kamu cantik disini dan pas sama kamu yang cantik banget, jadi pengen peluk kamu terus."
  },
  {
    src: "images/IMG_20251112_191647_656.jpg",
    title: "Nyobain Topi Kebesaran 👒",
    date: "12 November 2025",
    desc: "disini kamu sangat lucu kayak bayikk terus pipinya ituloh pengen aku mam"
  },
  {
    src: "images/IMG_20251203_165329_361.jpg",
    title: "Menang Capit Boneka! 🧸",
    date: "3 Desember 2025",
    desc: "gasengaja aku menang capit boneka dapet 2 lagi, boneka nya masing masing kita punya"
  },
  {
    src: "images/IMG_20251203_173513_294.jpg",
    title: "Kacamata Hitam Kece 😎",
    date: "3 Desember 2025",
    desc: "disini nyobain kacamata berdua nothing special tapi kita berdua keren "
  },
  {
    src: "images/IMG_20260112_210646_548.jpg",
    title: "City Light & Gadis Cantik 🌃",
    date: "12 Januari 2026",
    desc: "Lagi dingin-dingin pertama kali ngedate ke cartil motornya gakuat nanjak hahahah"
  },
  {
    src: "images/IMG_20260309_184039_411.jpg",
    title: "Pose Bibir Monyong di Jalanan 🍜",
    date: "9 Maret 2026",
    desc: "Lagi jalan malam di depan kedai ramen, tiba-tiba pasang muka duck face gemes."
  },
  {
    src: "images/IMG_20260429_185624_433.jpg",
    title: "Korban Kucing Pasrah 🐱",
    date: "29 April 2026",
    desc: "Pas lagi makan di angkringan joss, nemu kucing terus digendong sampe kucingnya pasrah melotot."
  },
  {
    src: "images/IMG_20260626_150322_834.jpg",
    title: "Pamer Rambut Baru 💇‍♀️",
    date: "26 Juni 2026",
    desc: "Disini rambut kamu sangat elegan dan cantik, one of my fave photo of you"
  },
  {
    src: "images/IMG_20260801_170128_391.jpg",
    title: "Dapet Cookie Matcha Favorit 🍪",
    date: "1 Agustus 2026",
    desc: "Seneng banget dapet Endorphins cookie matcha, dipamerin di depan muka sambil senyum girang."
  },
  {
    src: "images/IMG_20260801_215758_637.jpg",
    title: "Bunga Buat Kesayangan 💐",
    date: "1 Agustus 2026",
    desc: "Senyum paling manis waktu aku kasih buket bunga malam-malam di pinggir jalan."
  },
  {
    src: "images/IMG_20260815_194904_474.jpg",
    title: "Kompak Melet Bareng 🤪",
    date: "15 Agustus 2026",
    desc: "Nungguin makanan foto bareng dulu"
  },
  {
    src: "images/IMG_20260823_134902_930.jpg",
    title: "Nongkrong di Djaya Mandiri ☕",
    date: "23 Agustus 2026",
    desc: "Beres dari Taman hutan raya makan siang di Djaya Mandiri, salah satu outfit favorit aku yang pernah kamu pake."
  },
  {
    src: "images/IMG_20260830_150032_394.jpg",
    title: "Pose Manis Topang Pipi ✨",
    date: "30 Agustus 2026",
    desc: "Cantik dan anggun banget pas ngedate pake cardigan rajut hijau emerald ini."
  },
  {
    src: "images/IMG_20261006_151723_725.jpg",
    title: "Matcha Date di Noisy Matcha 🍵",
    date: "6 Oktober 2026",
    desc: "ngedate di noisy matcha, aku kayak beres sekolahan, jomplang banget sama kamu"
  },
  {
    src: "images/IMG_20261020_172043_109.jpg",
    title: "Tatapannya Bikin Meleleh 💖",
    date: "20 Oktober 2026",
    desc: "Tatapan paling teduh dari si cantik yang sekarang resmi berusia 22 tahun."
  }
];

let currentLightboxIndex = 0;

function initGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';

  galleryPhotos.forEach((photo, idx) => {
    const card = document.createElement('div');
    card.className = 'polaroid-card';
    card.innerHTML = `
      <span class="polaroid-date-badge">${photo.date}</span>
      <div class="polaroid-img-wrapper">
        <img src="${photo.src}" alt="${photo.title}" class="polaroid-img" loading="lazy">
      </div>
      <div class="polaroid-caption">
        <h4>${photo.title}</h4>
        <p>${photo.desc}</p>
      </div>
    `;

    card.addEventListener('click', () => {
      openLightbox(idx);
    });

    grid.appendChild(card);
  });

  initLightboxControls();
}

function openLightbox(index) {
  currentLightboxIndex = index;
  updateLightboxContent();
  const modal = document.getElementById('lightboxModal');
  modal.classList.add('active');
  playSoftTone(587.33, 0.3, 0.08);
}

function closeLightbox() {
  const modal = document.getElementById('lightboxModal');
  modal.classList.remove('active');
}

function updateLightboxContent() {
  const photo = galleryPhotos[currentLightboxIndex];
  if (!photo) return;

  const imgEl = document.getElementById('lightboxImg');
  const titleEl = document.getElementById('lightboxTitle');
  const dateEl = document.getElementById('lightboxDate');
  const descEl = document.getElementById('lightboxDesc');

  imgEl.src = photo.src;
  imgEl.alt = photo.title;
  titleEl.textContent = photo.title;
  dateEl.textContent = `📅 ${photo.date}`;
  descEl.textContent = photo.desc;
}

function showNextPhoto() {
  currentLightboxIndex = (currentLightboxIndex + 1) % galleryPhotos.length;
  updateLightboxContent();
  playSoftTone(659.25, 0.25, 0.06);
}

function showPrevPhoto() {
  currentLightboxIndex = (currentLightboxIndex - 1 + galleryPhotos.length) % galleryPhotos.length;
  updateLightboxContent();
  playSoftTone(523.25, 0.25, 0.06);
}

function initLightboxControls() {
  const modal = document.getElementById('lightboxModal');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');

  closeBtn.addEventListener('click', closeLightbox);
  prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showPrevPhoto();
  });
  nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    showNextPhoto();
  });

  // Close when clicking modal backdrop
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') showNextPhoto();
    if (e.key === 'ArrowLeft') showPrevPhoto();
  });
}

// --- Fake Malware Warning / Prank Entrance Logic ---
function initMalwarePrank() {
  const overlay = document.getElementById('malwareOverlay');
  const cleanBtn = document.getElementById('cleanVirusBtn');
  const btnText = document.getElementById('cleanBtnText');
  const box = document.getElementById('malwareBox');
  const body = document.getElementById('malwareBody');

  if (!overlay || !cleanBtn) return;

  cleanBtn.addEventListener('click', () => {
    initAudio();
    cleanBtn.disabled = true;
    cleanBtn.style.opacity = '0.85';
    btnText.textContent = '⏳ Memindai dan Menghapus Virus...';
    playSoftTone(300, 0.4, 0.12);

    setTimeout(() => {
      // Step 2: Glitch and failure
      box.classList.add('glitch-shake');
      playSoftTone(180, 0.5, 0.2); // Low warning buzzer

      body.innerHTML = `
        <div style="text-align: center; padding: 12px 0;">
          <p style="font-size: 1.3rem; color: #ef4444; font-weight: 800; margin-bottom: 10px;">
            ❌ GAGAL! VIRUS TERLALU KUAT!
          </p>
          <p style="color: #fca5a5; font-size: 0.95rem; margin-bottom: 18px;">
            Trojan.LoveAttack.22Yo telah mengambil alih seluruh sistem Anda...
          </p>
          <div style="font-size: 1.8rem; font-weight: 900; color: #f472b6;" id="prankCountdown">
            Mengalihkan dalam 3...
          </div>
        </div>
      `;

      let count = 3;
      const countEl = document.getElementById('prankCountdown');
      const timer = setInterval(() => {
        count--;
        if (count > 0) {
          if (countEl) countEl.textContent = `Mengalihkan dalam ${count}...`;
          playSoftTone(400 + count * 80, 0.2, 0.1);
        } else {
          clearInterval(timer);
          // Step 3: Surprise transformation
          box.classList.remove('glitch-shake');
          box.style.borderColor = '#f472b6';
          box.style.boxShadow = '0 0 50px rgba(244, 114, 182, 0.8)';
          
          body.innerHTML = `
            <div class="surprise-reveal-box">
              <div style="font-size: 3.5rem; margin-bottom: 8px;">🎉🎂💖</div>
              <h2>KENA PRANK! 😂</h2>
              <p>Selamat Ulang Tahun yang ke-22, Sayangku! 🌸</p>
            </div>
          `;

          playCelebrationFanfare();
          startRomanticMusic();
          triggerMassiveConfetti();

          // Step 4: Fade out overlay and reveal romantic site
          setTimeout(() => {
            overlay.classList.add('fade-out');
            setTimeout(() => {
              overlay.remove();
              triggerMassiveConfetti();
            }, 800);
          }, 1800);
        }
      }, 900);

    }, 1100);
  });
}

// --- Initialize Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
  const musicToggleBtn = document.getElementById('musicToggleBtn');

  // Music toggle button
  musicToggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMusic();
  });

  // Initialize modules
  initMalwarePrank();
  initNameEditor();
  initCake();
  initReasons();
  initGallery();
  initHugCounter();
  initParticleCanvas();
});
