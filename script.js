const rings = document.querySelector(".rings-bg");
const balloons = document.querySelector(".balloons-layer");
const confetti = document.querySelector(".confetti-layer");
const chaos = document.querySelector(".chaos-layer");

/* 🟡 ANILLOS */
for (let i = 0; i < 40; i++) {
  let r = document.createElement("div");
  r.className = "ring";

  r.style.left = Math.random() * 100 + "vw";
  r.style.animationDuration = (4 + Math.random() * 6) + "s";
  r.style.opacity = 0.5 + Math.random() * 0.5;

  rings.appendChild(r);
}

/* 🎈 GLOBOS (AHORA CAEN DESDE ARRIBA) */
const balloonColors = ["#ff4d6d","#ffd166","#06d6a0","#4dabf7","#b5179e"];

for (let i = 0; i < 15; i++) {
  let b = document.createElement("div");
  b.className = "balloon";

  b.style.left = Math.random() * 100 + "vw";
  b.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  b.style.animationDuration = (6 + Math.random() * 6) + "s";

  balloons.appendChild(b);
}

/* 🎊 CONFETI (DESDE ARRIBA) */
for (let i = 0; i < 120; i++) {
  let c = document.createElement("div");
  c.className = "confetti";

  c.style.left = Math.random() * 100 + "vw";
  c.style.background = balloonColors[Math.floor(Math.random() * balloonColors.length)];
  c.style.animationDuration = (3 + Math.random() * 5) + "s";

  confetti.appendChild(c);
}

/* 💎 CHAOS EMERALDS */
const colors = [
  "#00ffff","#00ff00","#ff0000",
  "#ffff00","#ff00ff","#ff9900","#0a22aa"
];

for (let i = 0; i < 21; i++) {
  let g = document.createElement("div");
  g.className = "chaos";

  g.style.left = Math.random() * 100 + "%";
  g.style.background = colors[Math.floor(Math.random() * colors.length)];
  g.style.animationDuration = (5 + Math.random() * 5) + "s";

  chaos.appendChild(g);
}