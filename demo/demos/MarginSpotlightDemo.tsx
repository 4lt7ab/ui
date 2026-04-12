import { MarginSpotlight } from '../../src/content';
import { Stack } from '../../src';

export function MarginSpotlightDemo(): React.JSX.Element {
  return (
    <Stack gap="lg">
      <div style={{
        fontSize: '0.875rem',
        color: 'var(--color-text-secondary)',
        lineHeight: 1.6,
      }}>
        <p style={{ margin: '0 0 0.5rem' }}>
          <strong>MarginSpotlight</strong> is a fixed-position aside that sits in the right
          margin and fades out as the user scrolls. Designed for homepage callouts — a
          "currently working on" blurb, a featured link, or a seasonal note.
        </p>
        <p style={{ margin: '0 0 0.5rem' }}>
          It only appears on screens wider than 1100px. On smaller screens it's hidden entirely
          (it's ambient, not essential).
        </p>
        <p style={{ margin: 0, fontStyle: 'italic', color: 'var(--color-text-muted)' }}>
          Scroll the page to see the fade effect — there's a live one on screen right now →
        </p>
      </div>

      <MarginSpotlight label="Currently">
        <p style={{ margin: 0 }}>
          A shared component library built with tokens and themes.
          <br />
          <small>April 2026</small>
        </p>
      </MarginSpotlight>

      <div style={{
        padding: '1rem',
        background: 'var(--color-surface-raised)',
        borderRadius: 'var(--radius-md)',
        fontSize: '0.8125rem',
        fontFamily: 'var(--font-mono)',
      }}>
        <pre style={{ margin: 0, whiteSpace: 'pre-wrap' }}>{`<MarginSpotlight label="Currently">
  <a href="/projects/ui">
    <p>
      A shared component library built
      with tokens and themes.
      <br />
      <small>April 2026</small>
    </p>
  </a>
</MarginSpotlight>`}</pre>
      </div>

      <Stack gap="xs">
        <h4 style={{ margin: 0, fontSize: '0.875rem', fontWeight: 600 }}>Props</h4>
        <table style={{
          width: '100%',
          fontSize: '0.8125rem',
          borderCollapse: 'collapse',
        }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--color-border)' }}>
              {['Prop', 'Type', 'Default', 'Description'].map((h) => (
                <th key={h} style={{ textAlign: 'left', padding: '0.375rem 0.5rem', fontWeight: 600, color: 'var(--color-text-muted)' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {[
              ['label', 'string', '—', 'Small uppercase label above the content'],
              ['fadeStart', 'number', '100', 'Scroll distance (px) before the fade begins'],
              ['fadeEnd', 'number', '400', 'Scroll distance (px) where fully invisible'],
            ].map(([prop, type, def, desc]) => (
              <tr key={prop} style={{ borderBottom: '1px solid var(--color-border)' }}>
                <td style={{ padding: '0.375rem 0.5rem', fontFamily: 'var(--font-mono)' }}>{prop}</td>
                <td style={{ padding: '0.375rem 0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--color-text-muted)' }}>{type}</td>
                <td style={{ padding: '0.375rem 0.5rem', fontFamily: 'var(--font-mono)' }}>{def}</td>
                <td style={{ padding: '0.375rem 0.5rem' }}>{desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Stack>
    </Stack>
  );
}
