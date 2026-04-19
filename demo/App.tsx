import { ThemeProvider } from '@4lt7ab/ui';
import { ThemeBackground } from '@4lt7ab/animations';
import { ConceptExplorer } from './views/ConceptExplorer';

export function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <ThemeBackground />
      {/* Stacking context above the fixed z-index:0 theme background canvas. */}
      <div style={{ position: 'relative', zIndex: 1, height: '100vh' }}>
        <ConceptExplorer />
      </div>
    </ThemeProvider>
  );
}
