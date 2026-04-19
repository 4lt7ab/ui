import { useEffect, useState, useCallback } from 'react';
import { AppShell, TopBar, ThemePicker } from '@4lt7ab/ui';
import { Markdown } from '@4lt7ab/content';
import { semantic as t } from '@4lt7ab/core';
import { CONCEPT_DOCS, findConceptDoc, type ConceptDoc } from '../docs/registry';

// ---------------------------------------------------------------------------
// Hash routing — one source of truth
// ---------------------------------------------------------------------------
//
// `#/<slug>` selects a concept; empty or unknown hash falls through to the
// first doc in `CONCEPT_DOCS` (Getting started). The current shell uses the
// same approach, so we keep the demo router-free.

function readSlugFromHash(): string {
  const raw = window.location.hash.replace(/^#\/?/, '');
  return raw || '';
}

function useActiveSlug(): [string, (next: string) => void] {
  const fallback = CONCEPT_DOCS[0]?.slug ?? '';
  const [slug, setSlug] = useState<string>(() => readSlugFromHash() || fallback);

  useEffect(() => {
    const onHashChange = (): void => {
      const next = readSlugFromHash();
      setSlug(next || fallback);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [fallback]);

  const navigate = useCallback((next: string): void => {
    window.location.hash = `#/${next}`;
    setSlug(next);
  }, []);

  return [slug, navigate];
}

// ---------------------------------------------------------------------------
// Sidebar item
// ---------------------------------------------------------------------------

interface ConceptLinkProps {
  doc: ConceptDoc;
  active: boolean;
  onSelect: (slug: string) => void;
}

function ConceptLink({ doc, active, onSelect }: ConceptLinkProps): React.JSX.Element {
  return (
    <a
      href={`#/${doc.slug}`}
      aria-current={active ? 'page' : undefined}
      onClick={(e) => {
        e.preventDefault();
        onSelect(doc.slug);
      }}
      style={{
        display: 'block',
        padding: `${t.spaceSm} ${t.spaceMd}`,
        fontSize: t.fontSizeSm,
        fontWeight: active ? t.fontWeightSemibold : t.fontWeightNormal,
        color: active ? t.colorText : t.colorTextMuted,
        background: active ? t.colorSurfaceRaised : 'transparent',
        textDecoration: 'none',
        borderRadius: t.radiusMd,
        margin: `0 ${t.spaceSm}`,
      }}
    >
      {doc.title}
    </a>
  );
}

// ---------------------------------------------------------------------------
// ConceptExplorer
// ---------------------------------------------------------------------------

export function ConceptExplorer(): React.JSX.Element {
  const [slug, navigate] = useActiveSlug();
  const doc = findConceptDoc(slug) ?? CONCEPT_DOCS[0];

  return (
    <AppShell.Root>
      <AppShell.TopBar>
        <TopBar.Leading>
          <span
            style={{
              fontFamily: t.fontMono,
              fontSize: t.fontSizeSm,
              fontWeight: t.fontWeightBold,
              letterSpacing: t.letterSpacingTight,
              color: t.colorText,
            }}
          >
            @4lt7ab/ui
          </span>
        </TopBar.Leading>
        <TopBar.Trailing>
          <ThemePicker variant="compact" />
        </TopBar.Trailing>
      </AppShell.TopBar>

      <AppShell.Sidebar aria-label="Concepts">
        <AppShell.SidebarSection label="Concepts">
          {CONCEPT_DOCS.map((d) => (
            <ConceptLink
              key={d.slug}
              doc={d}
              active={d.slug === doc?.slug}
              onSelect={navigate}
            />
          ))}
        </AppShell.SidebarSection>
      </AppShell.Sidebar>

      <AppShell.Main>
        <div
          style={{
            maxWidth: '48rem',
            margin: '0 auto',
            padding: `${t.space2xl} ${t.spaceXl}`,
          }}
        >
          {doc ? (
            <Markdown key={doc.slug}>{doc.content}</Markdown>
          ) : (
            <p style={{ color: t.colorTextMuted }}>No concept docs registered.</p>
          )}
        </div>
      </AppShell.Main>
    </AppShell.Root>
  );
}
