// ===== twinkling stars =====
const starsEl = document.getElementById('stars');
for (let i = 0; i < 50; i++) {
  const s = document.createElement('div');
  s.className = 'star';
  s.style.left = Math.random() * 100 + '%';
  s.style.top = Math.random() * 100 + '%';
  s.style.animationDelay = (Math.random() * 3) + 's';
  starsEl.appendChild(s);
}

// ===== floating hearts =====
const heartsEl = document.getElementById('hearts');
const heartGlyphs = ['💜', '💗', '💫'];
for (let i = 0; i < 10; i++) {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = heartGlyphs[i % heartGlyphs.length];
  h.style.left = (5 + Math.random() * 90) + '%';
  h.style.animationDuration = (8 + Math.random() * 6) + 's';
  h.style.animationDelay = (Math.random() * 10) + 's';
  heartsEl.appendChild(h);
}

// ===== balloons =====
const stage = document.getElementById('stage');
const balloonColors = ['#c9a0e8', '#ffb3d9', '#7c4dab', '#ffd27a', '#e6d8f5'];
for (let i = 0; i < 9; i++) {
  const b = document.createElement('div');
  b.className = 'balloon';
  b.style.left = (5 + Math.random() * 90) + '%';
  b.style.background = balloonColors[i % balloonColors.length];
  b.style.animationDelay = (Math.random() * 10) + 's';
  b.style.animationDuration = (9 + Math.random() * 6) + 's';
  stage.appendChild(b);
}

// ===== name personalization =====
const nameForm = document.getElementById('nameForm');
const nameOut = document.getElementById('nameOut');
nameForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const val = document.getElementById('nameInput').value.trim();
  nameOut.textContent = val ? ', ' + val + '! 🎉' : '🎉';
});

// ===== shared confetti burst =====
function burstConfetti(count = 60) {
  const colors = ['#c9a0e8', '#ffb3d9', '#7c4dab', '#ffd27a', '#fdf6ff'];
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'confetti-piece';
    p.style.left = Math.random() * 100 + '%';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.animationDuration = (2.2 + Math.random() * 1.6) + 's';
    p.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 4200);
  }
}

// ===== gift box surprise =====
const gift = document.getElementById('gift');
const giftMessage = document.getElementById('giftMessage');
const giftLines = [
  'you deserve every bit of this celebration 💜',
  'here comes a great year for you ✨',
  'surprise! more good things are coming your way 🎁'
];
let giftOpened = false;
gift.addEventListener('click', function () {
  if (giftOpened) return;
  giftOpened = true;
  gift.classList.add('opened');
  giftMessage.textContent = giftLines[Math.floor(Math.random() * giftLines.length)];
  burstConfetti(30);
});

// ===== blow out candle =====
const cake = document.getElementById('cake');
const hint = document.getElementById('hint');
let blown = false;
cake.addEventListener('click', function () {
  if (blown) return;
  blown = true;
  cake.classList.add('blown');
  hint.textContent = 'wish made ✨ happy birthday!';
  burstConfetti(60);
});

// ===== cursor sparkle trail (mouse move, throttled) =====
let lastSparkle = 0;
window.addEventListener('mousemove', function (e) {
  const now = Date.now();
  if (now - lastSparkle < 60) return;
  lastSparkle = now;
  const sp = document.createElement('div');
  sp.className = 'sparkle-trail';
  sp.style.left = e.clientX + 'px';
  sp.style.top = e.clientY + 'px';
  document.body.appendChild(sp);
  setTimeout(() => sp.remove(), 700);
});