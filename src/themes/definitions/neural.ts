import type { ThemeDefinition } from '../types';

function neuralBackground(canvas: HTMLCanvasElement): () => void {
  const NODE_COUNT = 22;
  const CONNECTION_DIST = 180;
  const PULSE_INTERVAL = 3000;
  const NODE_RADIUS = 2.5;

  const ctx = canvas.getContext('2d')!;
  let nodes: { x: number; y: number; vx: number; vy: number }[] = [];
  let pulses: { from: number; to: number; t: number }[] = [];
  let animId: number;
  let pulseTimer: ReturnType<typeof setInterval> | null = null;

  function getAccentRgb(): { r: number; g: number; b: number } {
    const hex = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-text-link').trim() || '#38bdf8';
    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16),
    };
  }

  function seedNodes(): void {
    nodes = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }
  }

  function resize(): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    if (nodes.length === 0) seedNodes();
  }

  function spawnPulse(): void {
    if (nodes.length < 2) return;
    const a = Math.floor(Math.random() * nodes.length);
    let b = a;
    let bestDist = Infinity;
    for (let i = 0; i < nodes.length; i++) {
      if (i === a) continue;
      const d = Math.hypot(nodes[i].x - nodes[a].x, nodes[i].y - nodes[a].y);
      if (d < CONNECTION_DIST && d < bestDist) {
        bestDist = d;
        b = i;
      }
    }
    if (b !== a) pulses.push({ from: a, to: b, t: 0 });
  }

  function draw(): void {
    const { r, g, b } = getAccentRgb();
    const accent = getComputedStyle(document.documentElement)
      .getPropertyValue('--color-text-link').trim() || '#38bdf8';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
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

    // Nodes
    for (const n of nodes) {
      ctx.fillStyle = `rgba(${r},${g},${b},0.4)`;
      ctx.beginPath();
      ctx.arc(n.x, n.y, NODE_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }

    // Pulses
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

    // Update positions
    for (const n of nodes) {
      n.x += n.vx;
      n.y += n.vy;
      if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
      if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
    }

    // Update pulses
    for (let i = pulses.length - 1; i >= 0; i--) {
      pulses[i].t += 0.015;
      if (pulses[i].t >= 1) pulses.splice(i, 1);
    }

    animId = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener('resize', resize);
  draw();
  pulseTimer = setInterval(spawnPulse, PULSE_INTERVAL);
  spawnPulse();

  return () => {
    cancelAnimationFrame(animId);
    if (pulseTimer) clearInterval(pulseTimer);
    window.removeEventListener('resize', resize);
  };
}

export const neuralTheme: ThemeDefinition = {
  name: 'neural',
  label: 'Neural',
  tokens: {
    colorText: '#e0e8ff',
    colorTextSecondary: '#a8b8d8',
    colorTextMuted: '#64748b',
    colorTextInverse: '#0a0a1a',
    colorTextLink: '#38bdf8',
    colorTextPlaceholder: '#64748b',
    colorTextDisabled: '#3a4a5a',

    colorSurface: 'transparent',
    colorSurfaceRaised: 'rgba(10, 10, 26, 0.85)',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.9)',
    colorSurfaceInput: 'rgba(14, 14, 34, 0.9)',
    colorSurfaceDisabled: 'rgba(26, 26, 58, 0.8)',

    colorBorder: '#1a1a3a',
    colorBorderFocused: '#38bdf8',
    colorBorderError: '#ff4444',

    colorActionPrimary: '#38bdf8',
    colorActionPrimaryHover: '#5ccdfb',
    colorActionSecondary: '#12122a',
    colorActionSecondaryHover: '#1a1a3a',
    colorActionDestructive: '#ff4444',
    colorActionDestructiveHover: '#ff6666',

    colorSuccess: '#22c55e',
    colorSuccessBg: 'rgba(34, 197, 94, 0.08)',
    colorWarning: '#f59e0b',
    colorWarningBg: 'rgba(245, 158, 11, 0.08)',
    colorError: '#ff4444',
    colorErrorBg: 'rgba(255, 68, 68, 0.08)',
    colorInfo: '#38bdf8',
    colorInfoBg: 'rgba(56, 189, 248, 0.08)',

    spaceXs: '0.25rem',
    spaceSm: '0.5rem',
    spaceMd: '1rem',
    spaceLg: '1.5rem',
    spaceXl: '2rem',
    space2xl: '3rem',

    radiusSm: '0.25rem',
    radiusMd: '0.375rem',
    radiusLg: '0.5rem',
    radiusFull: '9999px',

    shadowSm: '0 0 4px rgba(56, 189, 248, 0.1)',
    shadowMd: '0 0 8px rgba(56, 189, 248, 0.15)',
    shadowLg: '0 0 16px rgba(56, 189, 248, 0.2)',

    fontSans: "'Inter', system-ui, -apple-system, sans-serif",
    fontSerif: "'Space Grotesk', system-ui, sans-serif",
    fontMono: "'Fira Code', ui-monospace, monospace",
  },

  css: /* css */ `
    [data-theme="neural"] body,
    [data-theme="neural"] {
      background-color: #0a0a1a;
    }
  `,

  background: neuralBackground,
};
