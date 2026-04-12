import { forwardRef, useEffect, useRef, useCallback, useImperativeHandle } from 'react';
import { useInjectStyles } from '../../utils/useInjectStyles';

export interface ThinkingCycleProps {
  /** Words to cycle through. Needs at least 2. */
  words: string[];
  /** How long each word stays visible (ms). Default: 2000 */
  holdMs?: number;
  /** Scramble iterations per character. Default: 4 */
  scrambleTicks?: number;
  /** Ms between scramble frames. Default: 50 */
  tickMs?: number;
  /** Stagger delay between each character starting (ms). Default: 30 */
  staggerMs?: number;
}

const SCRAMBLE_CHARS = 'abcdefghijklmnopqrstuvwxyz!?*~+#';
const STYLES_ID = 'alttab-thinking-cycle';

const thinkingCSS = /* css */ `
  .alttab-thinking {
    display: inline-block;
    color: var(--color-text-link);
    font-style: italic;
    position: relative;
    vertical-align: bottom;
    transition: width 0.3s ease;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 0.15em;
  }

  .alttab-thinking .alttab-char {
    display: inline-block;
    animation: alttab-char-arrive 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  @keyframes alttab-char-arrive {
    0%   { opacity: 0; transform: translateY(0.3em) scale(0.7) rotate(-4deg); filter: blur(2px); }
    60%  { opacity: 1; transform: translateY(-0.08em) scale(1.05) rotate(1deg); filter: blur(0); }
    100% { opacity: 1; transform: translateY(0) scale(1) rotate(0deg); filter: blur(0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .alttab-thinking .alttab-char {
      animation: none;
    }
  }
`;

function randomChar(): string {
  return SCRAMBLE_CHARS[(Math.random() * SCRAMBLE_CHARS.length) | 0];
}

/**
 * Inline text that scrambles then settles into each word, letter by letter.
 * Ported from 7ab.net's thinking-cycle animation.
 *
 * The container width animates between words so surrounding inline content
 * (punctuation, etc.) slides naturally with it.
 *
 * Usage: Building with AI tools is <ThinkingCycle words={['powerful', 'wild']} />.
 */
export const ThinkingCycle: React.ForwardRefExoticComponent<Omit<ThinkingCycleProps, 'ref'> & React.RefAttributes<HTMLSpanElement>> = forwardRef<HTMLSpanElement, ThinkingCycleProps>(
  function ThinkingCycle({
    words,
    holdMs = 2000,
    scrambleTicks = 4,
    tickMs = 50,
    staggerMs = 30,
  }, ref): React.JSX.Element {
    useInjectStyles(STYLES_ID, thinkingCSS);

    const elRef = useRef<HTMLSpanElement>(null);
    useImperativeHandle(ref, () => elRef.current!);

    const indexRef = useRef(0);
    const widthsRef = useRef<number[]>([]);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

    // Measure all word widths by temporarily rendering each one
    const measure = useCallback(() => {
      const el = elRef.current;
      if (!el) return;
      const saved = el.innerHTML;
      el.style.width = '';
      const measured: number[] = [];
      for (const w of words) {
        el.textContent = w;
        measured.push(Math.ceil(el.getBoundingClientRect().width));
      }
      el.innerHTML = saved || '';
      widthsRef.current = measured;
      el.style.width = measured[indexRef.current] + 'px';
    }, [words]);

    // Render a word with per-character spans (no scramble)
    const setWord = useCallback((word: string) => {
      const el = elRef.current;
      if (!el) return;
      el.innerHTML = '';
      for (let i = 0; i < word.length; i++) {
        const span = document.createElement('span');
        span.className = 'alttab-char';
        span.textContent = word[i];
        span.style.animationDelay = `${i * staggerMs}ms`;
        el.appendChild(span);
      }
    }, [staggerMs]);

    // Scramble into a target word, then call done()
    const scrambleTo = useCallback((target: string, done: () => void) => {
      const el = elRef.current;
      if (!el) return;

      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) {
        el.textContent = target;
        done();
        return;
      }

      el.innerHTML = '';
      const chars: { span: HTMLSpanElement; final: string; ticks: number; maxTicks: number }[] = [];

      for (let i = 0; i < target.length; i++) {
        const span = document.createElement('span');
        span.className = 'alttab-char';
        span.style.animationDelay = `${i * staggerMs}ms`;
        span.textContent = target[i] === ' ' ? '\u00a0' : randomChar();
        el.appendChild(span);
        chars.push({ span, final: target[i], ticks: 0, maxTicks: scrambleTicks + i * 2 });
      }

      intervalRef.current = setInterval(() => {
        let allDone = true;
        for (const c of chars) {
          if (c.ticks >= c.maxTicks) {
            c.span.textContent = c.final;
          } else {
            allDone = false;
            c.ticks++;
            c.span.textContent = c.final === ' ' ? '\u00a0' : randomChar();
          }
        }
        if (allDone) {
          clearInterval(intervalRef.current!);
          intervalRef.current = null;
          done();
        }
      }, tickMs);
    }, [scrambleTicks, tickMs, staggerMs]);

    useEffect(() => {
      if (words.length < 2) return;

      measure();

      // Re-measure when fonts finish loading
      document.fonts.ready.then(measure);
      const onFonts = () => measure();
      document.fonts.addEventListener('loadingdone', onFonts);

      // Re-measure on theme change (font-family may differ)
      const observer = new MutationObserver(() => requestAnimationFrame(measure));
      observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

      // Initial word
      indexRef.current = 0;
      setWord(words[0]);

      function cycle() {
        indexRef.current = (indexRef.current + 1) % words.length;
        // Set width immediately — CSS transition handles the animation
        const el = elRef.current;
        if (el) el.style.width = widthsRef.current[indexRef.current] + 'px';

        scrambleTo(words[indexRef.current], () => {
          timerRef.current = setTimeout(cycle, holdMs);
        });
      }

      timerRef.current = setTimeout(cycle, holdMs);

      return () => {
        if (timerRef.current) clearTimeout(timerRef.current);
        if (intervalRef.current) clearInterval(intervalRef.current);
        document.fonts.removeEventListener('loadingdone', onFonts);
        observer.disconnect();
      };
    }, [words, holdMs, measure, setWord, scrambleTo]);

    return (
      <span
        ref={elRef}
        className="alttab-thinking"
      />
    );
  }
);
