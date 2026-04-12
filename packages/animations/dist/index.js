// src/ThemeBackground.tsx
import { useEffect as useEffect3, useRef as useRef2 } from "react";

// ../core/dist/index.js
import { useEffect } from "react";
import {
  createContext,
  useCallback,
  useContext,
  useEffect as useEffect2,
  useMemo,
  useRef,
  useState
} from "react";
import { jsxDEV } from "react/jsx-dev-runtime";
var ThemeContext = createContext(null);
function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx)
    throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
}

// src/backgrounds/synthwave.ts
function synthwaveBackground(canvas) {
  const ctx = canvas.getContext("2d");
  let animId;
  let t = 0;
  const BG_COLOR = "#06020f";
  const STAR_SEEDS = [
    [8, 12],
    [23, 5],
    [45, 18],
    [67, 8],
    [82, 22],
    [15, 24],
    [38, 7],
    [55, 20],
    [72, 14],
    [91, 19],
    [5, 20],
    [29, 3],
    [50, 10],
    [76, 23],
    [88, 6],
    [12, 21],
    [42, 15],
    [63, 2],
    [35, 22],
    [58, 9],
    [95, 16],
    [18, 8],
    [47, 22],
    [70, 4],
    [83, 22],
    [26, 14],
    [53, 20],
    [9, 17],
    [61, 11],
    [78, 21],
    [33, 6],
    [44, 23],
    [86, 10],
    [20, 18],
    [66, 21],
    [14, 45],
    [37, 55],
    [62, 48],
    [85, 60],
    [8, 70],
    [48, 65],
    [73, 75],
    [25, 80],
    [55, 85],
    [90, 50],
    [42, 90],
    [68, 95],
    [16, 58],
    [94, 42],
    [31, 72],
    [77, 88],
    [3, 52],
    [59, 38],
    [46, 78],
    [81, 68],
    [22, 92],
    [65, 55],
    [11, 35],
    [38, 42],
    [52, 30],
    [87, 38],
    [71, 82],
    [19, 62]
  ];
  let stars = [];
  function buildStars() {
    stars = STAR_SEEDS.map(([px, py], i) => ({
      x: px / 100 * canvas.width,
      y: py / 100 * canvas.height,
      size: i % 5 === 0 ? 2 : i % 3 === 0 ? 1.5 : 0.8,
      color: i % 5 === 0 ? "rgba(0,240,255,0.9)" : i % 7 === 0 ? "rgba(255,45,149,0.8)" : i % 11 === 0 ? "rgba(57,255,20,0.8)" : "rgba(255,255,255,0.8)",
      phase: i * 0.7 % 5,
      speed: 2 + i % 3
    }));
  }
  function drawStars() {
    for (const s of stars) {
      const twinkle = 0.4 + 0.6 * (0.5 + 0.5 * Math.sin(t * (6.28 / s.speed) + s.phase));
      ctx.globalAlpha = twinkle;
      ctx.fillStyle = s.color;
      if (s.size > 1.5) {
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 6;
      } else if (s.size > 1) {
        ctx.shadowColor = s.color;
        ctx.shadowBlur = 4;
      } else {
        ctx.shadowBlur = 0;
      }
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;
  }
  function drawSun() {
    const cx = canvas.width * 0.5;
    const sunBottom = canvas.height * 0.36;
    const cy = canvas.height - sunBottom;
    const r = 90;
    const breathe = 1 + 0.06 * Math.sin(t * 0.785);
    ctx.save();
    ctx.translate(cx, cy);
    ctx.scale(breathe, breathe);
    ctx.save();
    ctx.filter = "blur(40px)";
    const haloW = canvas.width * 0.3;
    const haloH = canvas.height * 0.2;
    const halo = ctx.createRadialGradient(0, 0, 0, 0, 0, Math.max(haloW, haloH));
    halo.addColorStop(0, "rgba(255,45,149,0.10)");
    halo.addColorStop(0.25, "rgba(255,107,53,0.07)");
    halo.addColorStop(0.5, "rgba(255,45,149,0.03)");
    halo.addColorStop(1, "transparent");
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.ellipse(0, 0, haloW, haloH, 0, 0, Math.PI * 2);
    ctx.fill();
    ctx.filter = "none";
    ctx.restore();
    const glow1 = ctx.createRadialGradient(0, 0, r, 0, 0, r + 110);
    glow1.addColorStop(0, "rgba(255,45,149,0.30)");
    glow1.addColorStop(0.5, "rgba(255,45,149,0.10)");
    glow1.addColorStop(1, "transparent");
    ctx.fillStyle = glow1;
    ctx.fillRect(-r - 110, -r - 110, (r + 110) * 2, (r + 110) * 2);
    const glow2 = ctx.createRadialGradient(0, 0, r, 0, 0, r + 220);
    glow2.addColorStop(0, "rgba(255,107,53,0.15)");
    glow2.addColorStop(0.4, "rgba(255,107,53,0.06)");
    glow2.addColorStop(1, "transparent");
    ctx.fillStyle = glow2;
    ctx.fillRect(-r - 220, -r - 220, (r + 220) * 2, (r + 220) * 2);
    const glow3 = ctx.createRadialGradient(0, 0, r, 0, 0, r + 400);
    glow3.addColorStop(0, "rgba(255,45,149,0.08)");
    glow3.addColorStop(0.3, "rgba(255,45,149,0.03)");
    glow3.addColorStop(1, "transparent");
    ctx.fillStyle = glow3;
    ctx.fillRect(-r - 400, -r - 400, (r + 400) * 2, (r + 400) * 2);
    const sunCanvas = document.createElement("canvas");
    const sunSize = r * 2 + 20;
    sunCanvas.width = sunSize;
    sunCanvas.height = sunSize;
    const sc = sunCanvas.getContext("2d");
    const sr = r;
    const scx = sunSize / 2;
    const scy = sunSize / 2;
    sc.beginPath();
    sc.arc(scx, scy, sr, 0, Math.PI * 2);
    sc.clip();
    const sunGrd = sc.createLinearGradient(scx, scy - sr, scx, scy + sr);
    sunGrd.addColorStop(0, "#ff2d95");
    sunGrd.addColorStop(0.2, "#ff4d6d");
    sunGrd.addColorStop(0.45, "#ff6b35");
    sunGrd.addColorStop(0.7, "#ffaa33");
    sunGrd.addColorStop(1, "#ffe44d");
    sc.fillStyle = sunGrd;
    sc.fillRect(0, 0, sunSize, sunSize);
    const hazeBands = [
      { top: 0.15, height: 0.14, color: "rgba(255,140,60,0.35)" },
      { top: 0.28, height: 0.14, color: "rgba(255,100,50,0.30)" },
      { top: 0.4, height: 0.16, color: "rgba(200,60,30,0.35)" },
      { top: 0.52, height: 0.14, color: "rgba(180,50,40,0.35)" },
      { top: 0.62, height: 0.18, color: "rgba(120,25,40,0.40)" },
      { top: 0.76, height: 0.16, color: "rgba(80,15,35,0.40)" }
    ];
    sc.filter = "blur(6px)";
    for (const band of hazeBands) {
      const by = scy - sr + band.top * sr * 2;
      const bh = band.height * sr * 2;
      const bandGrd = sc.createLinearGradient(0, by, 0, by + bh);
      bandGrd.addColorStop(0, "transparent");
      bandGrd.addColorStop(0.2, band.color);
      bandGrd.addColorStop(0.5, band.color);
      bandGrd.addColorStop(0.8, band.color);
      bandGrd.addColorStop(1, "transparent");
      sc.fillStyle = bandGrd;
      sc.fillRect(0, by, sunSize, bh);
    }
    sc.filter = "none";
    ctx.shadowColor = "rgba(255,45,149,0.3)";
    ctx.shadowBlur = 80;
    ctx.drawImage(sunCanvas, -sunSize / 2, -sunSize / 2);
    ctx.shadowBlur = 0;
    ctx.restore();
  }
  function drawWaves() {
    const centerY = canvas.height * 0.64;
    const w = canvas.width;
    drawWaveLine(w, centerY, t, 30, 0.003, 2.5, [
      { pos: 0, color: "rgba(255,45,149,0.5)" },
      { pos: 0.3, color: "rgba(255,120,60,0.45)" },
      { pos: 0.6, color: "rgba(255,45,149,0.4)" },
      { pos: 1, color: "rgba(255,80,100,0.3)" }
    ]);
    drawWaveLine(w, centerY, t * 0.7 + 1.5, 20, 0.004, 1.5, [
      { pos: 0, color: "rgba(255,80,100,0.25)" },
      { pos: 0.5, color: "rgba(255,140,70,0.2)" },
      { pos: 1, color: "rgba(255,60,120,0.15)" }
    ]);
  }
  function drawWaveLine(w, centerY, time, amplitude, frequency, lineWidth, stops) {
    const grad = ctx.createLinearGradient(0, 0, w, 0);
    for (const s of stops)
      grad.addColorStop(s.pos, s.color);
    ctx.beginPath();
    for (let x = 0;x <= w; x += 2) {
      const y = centerY + Math.sin(x * frequency + time) * amplitude + Math.sin(x * frequency * 2.3 + time * 1.4) * (amplitude * 0.3) + Math.sin(x * frequency * 0.5 + time * 0.6) * (amplitude * 0.5);
      if (x === 0)
        ctx.moveTo(x, y);
      else
        ctx.lineTo(x, y);
    }
    ctx.strokeStyle = grad;
    ctx.lineWidth = lineWidth;
    ctx.shadowColor = "rgba(255,80,120,0.3)";
    ctx.shadowBlur = 12;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }
  function drawScanlines() {
    ctx.fillStyle = "rgba(0,0,0,0.04)";
    for (let y = 0;y < canvas.height; y += 4) {
      ctx.fillRect(0, y + 2, canvas.width, 2);
    }
    const barY = t * (1 / 7) * (canvas.height + 6) % (canvas.height + 100) - 50;
    const barGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
    barGrad.addColorStop(0, "transparent");
    barGrad.addColorStop(0.3, "rgba(0,240,255,0.18)");
    barGrad.addColorStop(0.6, "rgba(255,45,149,0.12)");
    barGrad.addColorStop(1, "transparent");
    ctx.fillStyle = barGrad;
    ctx.shadowColor = "rgba(0,240,255,0.10)";
    ctx.shadowBlur = 16;
    ctx.globalAlpha = 0.8;
    ctx.fillRect(0, barY, canvas.width, 6);
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 1;
  }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    buildStars();
  }
  function draw() {
    t += 0.008;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawStars();
    drawSun();
    drawWaves();
    drawScanlines();
    animId = requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", resize);
  draw();
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
  };
}

// src/backgrounds/pipboy.ts
function pipboyBackground(canvas) {
  const CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789";
  const COLUMN_COUNT = 14;
  const STEP_MS = 75;
  const OPACITY = 0.18;
  const FONT_SIZE = 14;
  const ctx = canvas.getContext("2d");
  let columns = [];
  let interval = null;
  function setupColumns() {
    const totalCols = Math.floor(canvas.width / FONT_SIZE);
    const spacing = Math.floor(totalCols / COLUMN_COUNT);
    columns = [];
    for (let i = 0;i < COLUMN_COUNT; i++) {
      columns.push({
        x: (i * spacing + Math.floor(Math.random() * spacing)) * FONT_SIZE,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 0.5
      });
    }
  }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setupColumns();
  }
  function step() {
    ctx.fillStyle = "rgba(10, 10, 10, 0.15)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(51, 255, 51, ${OPACITY})`;
    ctx.font = FONT_SIZE + "px monospace";
    for (const col of columns) {
      const char = CHARS[Math.floor(Math.random() * CHARS.length)];
      ctx.fillText(char, col.x, col.y);
      col.y += FONT_SIZE * col.speed;
      if (col.y > canvas.height && Math.random() > 0.975) {
        col.y = 0;
      }
    }
  }
  resize();
  window.addEventListener("resize", resize);
  interval = setInterval(step, STEP_MS);
  return () => {
    if (interval)
      clearInterval(interval);
    window.removeEventListener("resize", resize);
  };
}

// src/backgrounds/neural.ts
function neuralBackground(canvas) {
  const NODE_COUNT = 22;
  const CONNECTION_DIST = 180;
  const PULSE_INTERVAL = 3000;
  const NODE_RADIUS = 2.5;
  const ctx = canvas.getContext("2d");
  let nodes = [];
  let pulses = [];
  let animId;
  let pulseTimer = null;
  function getAccentRgb() {
    const hex = getComputedStyle(document.documentElement).getPropertyValue("--color-text-link").trim() || "#38bdf8";
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16)
    };
  }
  function seedNodes() {
    nodes = [];
    for (let i = 0;i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3
      });
    }
  }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (nodes.length === 0)
      seedNodes();
  }
  function spawnPulse() {
    if (nodes.length < 2)
      return;
    const a = Math.floor(Math.random() * nodes.length);
    let b = a;
    let bestDist = Infinity;
    for (let i = 0;i < nodes.length; i++) {
      if (i === a)
        continue;
      const d = Math.hypot(nodes[i].x - nodes[a].x, nodes[i].y - nodes[a].y);
      if (d < CONNECTION_DIST && d < bestDist) {
        bestDist = d;
        b = i;
      }
    }
    if (b !== a)
      pulses.push({ from: a, to: b, t: 0 });
  }
  function draw() {
    const { r, g, b } = getAccentRgb();
    const accent = getComputedStyle(document.documentElement).getPropertyValue("--color-text-link").trim() || "#38bdf8";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0;i < nodes.length; i++) {
      for (let j = i + 1;j < nodes.length; j++) {
        const d = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
        if (d < CONNECTION_DIST) {
          const opacity = (1 - d / CONNECTION_DIST) * 0.15;
          ctx.strokeStyle = `rgba(${r},${g},${b},${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${r},${g},${b},0.4)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const p of pulses) {
      const from = nodes[p.from];
      const to = nodes[p.to];
      const x = from.x + (to.x - from.x) * p.t;
      const y = from.y + (to.y - from.y) * p.t;
      ctx.fillStyle = accent;
      ctx.beginPath();
      ctx.arc(x, y, 3.5, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width)
        n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height)
        n.vy *= -1;
    }
    for (let i = pulses.length - 1;i >= 0; i--) {
      pulses[i].t += 0.015;
      if (pulses[i].t >= 1)
        pulses.splice(i, 1);
    }
    animId = requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", resize);
  draw();
  pulseTimer = setInterval(spawnPulse, PULSE_INTERVAL);
  spawnPulse();
  return () => {
    cancelAnimationFrame(animId);
    if (pulseTimer)
      clearInterval(pulseTimer);
    window.removeEventListener("resize", resize);
  };
}

// src/backgrounds/pacman.ts
function pacmanBackground(canvas) {
  const PAC_COLOR = "#ffff00";
  const GHOST_COLORS = ["#ff0000", "#ffb8ff", "#00ffff", "#ffb852"];
  const SCARED_COLOR = "#2121de";
  const DOT_COLOR = "#ffb8ae";
  const PAC_RADIUS = 40;
  const GHOST_SIZE = 38;
  const SPEED = 1.2;
  const GHOST_SPACING = 110;
  const CHASE_GAP = 130;
  const DOT_RADIUS = 4;
  const DOT_SPACING = 40;
  const SCARED_CHANCE = 0.15;
  const SCARED_DURATION = 180;
  const ctx = canvas.getContext("2d");
  let animId;
  let direction = 1;
  let scaredTimer = 0;
  let pacman = { x: 0, y: 0, mouthAngle: 0, mouthDir: 1 };
  let ghosts = [];
  let dots = [];
  function totalTrainLength() {
    return CHASE_GAP + (GHOST_COLORS.length - 1) * GHOST_SPACING + GHOST_SIZE + PAC_RADIUS;
  }
  function spawnCrossing() {
    const y = canvas.height * (0.3 + Math.random() * 0.4);
    direction = Math.random() < 0.5 ? 1 : -1;
    const offscreen = totalTrainLength() + 60;
    const startX = direction === 1 ? -offscreen : canvas.width + offscreen;
    pacman = { x: startX, y, mouthAngle: 0, mouthDir: 1 };
    ghosts = GHOST_COLORS.map((color, i) => ({
      x: startX - direction * (CHASE_GAP + i * GHOST_SPACING),
      y,
      color,
      wobbleOffset: i * 1.3
    }));
    scaredTimer = Math.random() < SCARED_CHANCE ? SCARED_DURATION : 0;
    dots = [];
    for (let x = DOT_SPACING;x < canvas.width; x += DOT_SPACING) {
      dots.push({ x, y, eaten: false });
    }
  }
  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function update() {
    const t = Date.now() / 1000;
    pacman.x += SPEED * direction;
    for (let i = 0;i < ghosts.length; i++) {
      const ghost = ghosts[i];
      const targetX = pacman.x - direction * (CHASE_GAP + i * GHOST_SPACING);
      ghost.x += (targetX - ghost.x) * 0.04;
      ghost.y = pacman.y + Math.sin(t * 2 + ghost.wobbleOffset) * 6;
    }
    pacman.mouthAngle += 0.06 * pacman.mouthDir;
    if (pacman.mouthAngle > 0.75)
      pacman.mouthDir = -1;
    if (pacman.mouthAngle < 0.05)
      pacman.mouthDir = 1;
    if (scaredTimer > 0)
      scaredTimer--;
    for (const dot of dots) {
      if (!dot.eaten && Math.abs(dot.x - pacman.x) < PAC_RADIUS * 0.8) {
        dot.eaten = true;
      }
    }
    const clearance = totalTrainLength() + 100;
    const offScreen = direction === 1 ? pacman.x > canvas.width + clearance : pacman.x < -clearance;
    if (offScreen)
      spawnCrossing();
  }
  function drawGhost(ghost) {
    const { x, y } = ghost;
    const r = GHOST_SIZE;
    const scared = scaredTimer > 0;
    const flashing = scared && scaredTimer < 60 && Math.floor(scaredTimer / 8) % 2 === 0;
    const bodyColor = scared ? flashing ? "#ffffff" : SCARED_COLOR : ghost.color;
    ctx.fillStyle = bodyColor;
    ctx.beginPath();
    ctx.arc(x, y - r * 0.15, r, Math.PI, 0);
    ctx.lineTo(x + r, y + r * 0.85);
    const bumps = 5;
    const bumpW = r * 2 / bumps;
    for (let i = bumps - 1;i >= 0; i--) {
      const bx = x + r - i * bumpW - bumpW / 2;
      const by = y + r * 0.85 + (i % 2 === 0 ? -6 : 4);
      ctx.lineTo(bx, by);
    }
    ctx.lineTo(x - r, y + r * 0.85);
    ctx.closePath();
    ctx.fill();
    const eyeR = r * 0.22;
    const pupilR = r * 0.12;
    const eyeY = y - r * 0.15;
    const eyeSpread = r * 0.35;
    if (scared) {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(x - eyeSpread, eyeY, pupilR, 0, Math.PI * 2);
      ctx.arc(x + eyeSpread, eyeY, pupilR, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.beginPath();
      const mouthY = y + r * 0.25;
      ctx.moveTo(x - r * 0.4, mouthY);
      for (let i = 0;i < 5; i++) {
        const mx = x - r * 0.4 + (i + 0.5) * (r * 0.8 / 5);
        const my = mouthY + (i % 2 === 0 ? -3 : 3);
        ctx.lineTo(mx, my);
      }
      ctx.stroke();
    } else {
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(x - eyeSpread, eyeY, eyeR, 0, Math.PI * 2);
      ctx.arc(x + eyeSpread, eyeY, eyeR, 0, Math.PI * 2);
      ctx.fill();
      const px = direction * pupilR * 0.5;
      ctx.fillStyle = "#00f";
      ctx.beginPath();
      ctx.arc(x - eyeSpread + px, eyeY, pupilR, 0, Math.PI * 2);
      ctx.arc(x + eyeSpread + px, eyeY, pupilR, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.globalAlpha = 0.3;
    ctx.fillStyle = DOT_COLOR;
    for (const dot of dots) {
      if (dot.eaten)
        continue;
      ctx.beginPath();
      ctx.arc(dot.x, dot.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.fillStyle = PAC_COLOR;
    ctx.beginPath();
    const facing = direction === 1 ? 0 : Math.PI;
    ctx.arc(pacman.x, pacman.y, PAC_RADIUS, facing + pacman.mouthAngle, facing + Math.PI * 2 - pacman.mouthAngle);
    ctx.lineTo(pacman.x, pacman.y);
    ctx.closePath();
    ctx.fill();
    for (const ghost of ghosts)
      drawGhost(ghost);
    ctx.globalAlpha = 1;
    update();
    animId = requestAnimationFrame(draw);
  }
  resize();
  window.addEventListener("resize", resize);
  spawnCrossing();
  draw();
  return () => {
    cancelAnimationFrame(animId);
    window.removeEventListener("resize", resize);
  };
}

// src/ThemeBackground.tsx
var backgroundRegistry = {
  synthwave: synthwaveBackground,
  pipboy: pipboyBackground,
  neural: neuralBackground,
  pacman: pacmanBackground
};
function ThemeBackground(_props) {
  const { resolved } = useTheme();
  const bgContainerRef = useRef2(null);
  const bgCleanupRef = useRef2(null);
  useEffect3(() => {
    if (bgCleanupRef.current) {
      bgCleanupRef.current();
      bgCleanupRef.current = null;
    }
    if (bgContainerRef.current) {
      bgContainerRef.current.remove();
      bgContainerRef.current = null;
    }
    const backgroundFn = backgroundRegistry[resolved];
    if (!backgroundFn || window.innerWidth <= 768 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const container = document.createElement("div");
    container.setAttribute("data-theme-bg", resolved);
    container.setAttribute("aria-hidden", "true");
    container.style.cssText = "position:fixed;inset:0;z-index:0;pointer-events:none;overflow:hidden;";
    document.body.prepend(container);
    bgContainerRef.current = container;
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "width:100%;height:100%;";
    container.appendChild(canvas);
    bgCleanupRef.current = backgroundFn(canvas);
    return () => {
      if (bgCleanupRef.current) {
        bgCleanupRef.current();
        bgCleanupRef.current = null;
      }
      if (bgContainerRef.current) {
        bgContainerRef.current.remove();
        bgContainerRef.current = null;
      }
    };
  }, [resolved]);
  return null;
}
export {
  synthwaveBackground,
  pipboyBackground,
  pacmanBackground,
  neuralBackground,
  ThemeBackground
};
