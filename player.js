// ── PLAY / PAUSE ──
let playing = true;
const playBtn = document.getElementById('playBtn');
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
  const pct  = (e.clientX - rect.left) / rect.width * 100;
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
function selectEp(el, num, date, dur) {
  document.querySelectorAll('.ep-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  document.querySelector('.ep-label').textContent = `Episode ${num}`;
  document.querySelector('.ep-date').textContent  = date;
  document.getElementById('totalTime').textContent   = dur;
  document.getElementById('currentTime').textContent = '00:00';
  document.getElementById('progressFill').style.width = '0%';
  playing = true;
  playIcon.innerHTML = pausePath;
}