import type { ThemeDefinition } from '../types';

function pipboyBackground(canvas: HTMLCanvasElement): () => void {
  const CHARS = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789';
  const COLUMN_COUNT = 14;
  const STEP_MS = 75;
  const OPACITY = 0.18;
  const FONT_SIZE = 14;

  const ctx = canvas.getContext('2d')!;
  let columns: { x: number; y: number; speed: number }[] = [];
  let interval: ReturnType<typeof setInterval> | null = null;

  function setupColumns(): void {
    const totalCols = Math.floor(canvas.width / FONT_SIZE);
    const spacing = Math.floor(totalCols / COLUMN_COUNT);
    columns = [];
    for (let i = 0; i < COLUMN_COUNT; i++) {
      columns.push({
        x: (i * spacing + Math.floor(Math.random() * spacing)) * FONT_SIZE,
        y: Math.random() * canvas.height,
        speed: 0.5 + Math.random() * 0.5,
      });
    }
  }

  function resize(): void {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    setupColumns();
  }

  function step(): void {
    ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = `rgba(51, 255, 51, ${OPACITY})`;
    ctx.font = FONT_SIZE + 'px monospace';

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
  window.addEventListener('resize', resize);
  interval = setInterval(step, STEP_MS);

  return () => {
    if (interval) clearInterval(interval);
    window.removeEventListener('resize', resize);
  };
}

export const pipboyTheme: ThemeDefinition = {
  name: 'pipboy',
  label: 'Pip-Boy',
  tokens: {
    colorText: '#33ff33',
    colorTextSecondary: '#66cc66',
    colorTextMuted: '#339933',
    colorTextInverse: '#0a0a0a',
    colorTextLink: '#ffb347',
    colorTextPlaceholder: '#339933',
    colorTextDisabled: '#1a4a1a',

    colorSurface: 'transparent',
    colorSurfaceRaised: 'rgba(10, 10, 10, 0.85)',
    colorSurfaceOverlay: 'rgba(0, 0, 0, 0.9)',
    colorSurfaceInput: 'rgba(13, 20, 13, 0.9)',
    colorSurfaceDisabled: 'rgba(26, 46, 26, 0.8)',
    colorSurfacePage: '#0a0a0a',

    colorBorder: '#1a2e1a',
    colorBorderFocused: '#ffb347',
    colorBorderError: '#ff4444',

    colorActionPrimary: '#ffb347',
    colorActionPrimaryHover: '#ffc46b',
    colorActionSecondary: '#0f1a0f',
    colorActionSecondaryHover: '#1a2e1a',
    colorActionDestructive: '#ff4444',
    colorActionDestructiveHover: '#ff6666',

    colorSuccess: '#33ff33',
    colorSuccessBg: 'rgba(51, 255, 51, 0.08)',
    colorWarning: '#ffb347',
    colorWarningBg: 'rgba(255, 179, 71, 0.08)',
    colorError: '#ff4444',
    colorErrorBg: 'rgba(255, 68, 68, 0.08)',
    colorInfo: '#33ff33',
    colorInfoBg: 'rgba(51, 255, 51, 0.08)',

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

    shadowSm: '0 0 4px rgba(51, 255, 51, 0.1)',
    shadowMd: '0 0 8px rgba(51, 255, 51, 0.15)',
    shadowLg: '0 0 16px rgba(51, 255, 51, 0.2)',

    fontSans: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
    fontSerif: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
    fontMono: "'Fira Code', 'Cascadia Code', 'JetBrains Mono', ui-monospace, monospace",
  },

  css: /* css */ `
    /* Base background for canvas to render on top of */
    [data-theme="pipboy"] body,
    [data-theme="pipboy"] {
      background-color: #0a0a0a;
    }

    /* Phosphor glow on text */
    [data-theme="pipboy"] {
      text-shadow: 0 0 8px rgba(51, 255, 51, 0.4);
    }

    [data-theme="pipboy"] h1,
    [data-theme="pipboy"] h2,
    [data-theme="pipboy"] h3 {
      text-shadow: 0 0 12px rgba(51, 255, 51, 0.6);
    }

    /* CRT scanline overlay */
    [data-theme="pipboy"]::after {
      content: '';
      position: fixed;
      inset: 0;
      background: repeating-linear-gradient(
        to bottom,
        transparent,
        transparent 2px,
        rgba(0, 0, 0, 0.15) 2px,
        rgba(0, 0, 0, 0.15) 4px
      );
      pointer-events: none;
      z-index: 1000;
    }
  `,

  background: pipboyBackground,
};
