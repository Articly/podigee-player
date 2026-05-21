// ── THEME TOGGLE ──
const root = document.documentElement;
const themeBtn = document.getElementById('themeBtn');
const themeIcon = document.getElementById('themeIcon');

const moonSVG = `<path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"/>`;
const sunSVG  = `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

let currentTheme = localStorage.getItem('player-theme') || getSystemTheme();

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  currentTheme = theme;
  localStorage.setItem('player-theme', theme);
  themeIcon.innerHTML = theme === 'dark' ? moonSVG : sunSVG;
  themeBtn.title = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
}

applyTheme(currentTheme);

themeBtn.addEventListener('click', () => {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Also respond to OS preference changes (only if user hasn't manually set)
window.matchMedia('(prefers-color-scheme: light)').addEventListener('change', e => {
  if (!localStorage.getItem('player-theme')) {
    applyTheme(e.matches ? 'light' : 'dark');
  }
});

// ── PLAY / PAUSE ──
let playing = true;
const playBtn  = document.getElementById('playBtn');
const playIcon = document.getElementById('playIcon');
const playPath  = `<path d="M8 5v14l11-7z"/>`;
const pausePath = `<path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>`;

playBtn.addEventListener('click', () => {
  playing = !playing;
  playIcon.innerHTML = playing ? pausePath : playPath;
});

// ── SPEED TOGGLE ──
const speeds = ['1×', '1.25×', '1.5×', '2×', '0.75×'];
let speedIdx = 0;

document.getElementById('speedBtn').addEventListener('click', function () {
  speedIdx = (speedIdx + 1) % speeds.length;
  this.textContent = speeds[speedIdx];
});

// ── PROGRESS BAR ──
document.getElementById('progressBar').addEventListener('click', function (e) {
  const rect = this.getBoundingClientRect();
  const pct  = Math.max(0, Math.min(100, (e.clientX - rect.left) / rect.width * 100));
  document.getElementById('progressFill').style.width = pct + '%';
});

// ── TAB SWITCHING ──
function switchTab(el, panel) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
  document.getElementById('episodePanel').style.display = panel === 'episodes' ? 'block' : 'none';
  document.getElementById('infoPanel').style.display    = panel === 'info'     ? 'block' : 'none';
}

// ── EPISODE SELECTION ──
function selectEp(el, date, dur) {
  document.querySelectorAll('.ep-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  document.querySelector('.ep-date').textContent          = date;
  document.getElementById('totalTime').textContent        = dur;
  document.getElementById('currentTime').textContent      = '00:00';
  document.getElementById('progressFill').style.width     = '0%';
  playing = true;
  playIcon.innerHTML = pausePath;
}