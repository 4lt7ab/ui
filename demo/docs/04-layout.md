# Layout

The library's layout primitives aren't a grid system. They're a small set of focused tools: one for spacing children apart (`Stack`), one for capping line length (`Container`), one for arranging tiles (`Grid`), one for visual separation (`Divider`), and one for managing color surfaces (`Surface`). Card is the opinionated preset on top of `Surface`. Four page-envelope organisms stitch them into full-screen shells.

## What this concept covers

| Component | What it's for |
|---|---|
| `Stack` | Flexbox layout for vertical or horizontal stacking with token-driven gap. |
| `Container` | Centered content wrapper with a max-width preset and horizontal padding. |
| `Grid` | Auto-fill or fixed-column grid with token-driven gap. |
| `Divider` | Horizontal or vertical rule with opacity and spacing presets. |
| `Surface` | Composable color-surface primitive (page / default / solid / raised / panel / input / overlay). |
| `Card` | Opinionated `Surface` preset: border, shadow, padding, optional hover and rhythm-synced glow. |
| `AppShell.*` | Viewport envelope: top bar, sidebar, main, right panel. |
| `TopBar.*` | Top bar used inside `AppShell.TopBar` (or standalone): leading, nav, trailing. |
| `Header` | Heading primitive with optional subtitle, indicator, and trailing slot. |
| `TabStrip` | Horizontal tab navigation with roving focus and optional deselect. |
| `Icon` / `IconButton` | The 25-icon registry and the icon-as-affordance button. |
| `DataTablePage.*` | CRUD-page envelope: header, filter bar, table, pagination, empty state. |
| `DetailPage.*` | Entity-detail envelope: header, meta, body, right panel. |
| `EmptyPage.*` | Full-page zero-state: icon, title, description, actions, tips. |

## `Stack`

Flexbox layout. Vertical by default, with a `spaceMd` gap.

```tsx
import { Stack } from '@4lt7ab/ui';

<Stack gap="lg">
  <h2>Account</h2>
  <p>Configure your profile.</p>
  <Button>Save changes</Button>
</Stack>

<Stack direction="horizontal" gap="sm" align="center" justify="between">
  <span>Label</span>
  <IconButton icon="Settings" label="Settings" />
</Stack>
```

**Props.**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `direction` | `'vertical' \| 'horizontal'` | `'vertical'` | Column or row. |
| `gap` | `SpacingToken` | `'md'` | `'xs' \| 'sm' \| 'md' \| 'lg' \| 'xl' \| '2xl'`. Maps to the semantic spacing scale. |
| `align` | `AlignItems` | — | Cross-axis alignment. |
| `justify` | `JustifyContent` | — | Main-axis alignment. |
| `wrap` | `boolean` | `false` | Allow children to wrap when they overflow. |

`Stack` is the right primitive for nearly every "arrange these in a line with consistent gaps" problem. Reach for `Grid` only when you need tile layout.

## `Container`

Centered wrapper with a max-width preset. Use it to cap line length in a reading surface or pull a card grid to a comfortable width.

```tsx
import { Container } from '@4lt7ab/ui';

<Container width="prose" padding="md">
  <Markdown>{article}</Markdown>
</Container>
```

**Width presets:**

| `width` | Max-width |
|---|---|
| `narrow` | `32rem` |
| `prose` (default) | `680px` — optimized for reading |
| `wide` | `900px` |
| `full` | `100%` — no constraint |

**Padding presets** (`padding`): `'none'`, `'sm'` (0.75rem), `'md'` (1.5rem, default), `'lg'` (3rem).

`Container` is pure geometry — no color, no border, no background. Pair it with `Surface` or a page-envelope organism when you need visible chrome.

## `Grid`

Two modes, picked by which prop you set.

```tsx
import { Grid } from '@4lt7ab/ui';

// Auto-fill — each cell >=300px, wraps automatically
<Grid minColumnWidth={300} gap="lg">
  {items.map((item) => <Card key={item.id}>{item.name}</Card>)}
</Grid>

// Fixed — exactly 3 columns
<Grid columns={3} gap="md">
  <div>A</div><div>B</div><div>C</div>
</Grid>
```

**Props.**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `minColumnWidth` | `number` | `300` | Minimum cell width in pixels. Wraps once cells won't fit. |
| `columns` | `number` | — | Fixed column count. Overrides `minColumnWidth` when set. |
| `gap` | `SpacingToken` | `'md'` | Same spacing scale as `Stack`. |

## `Divider`

Horizontal or vertical rule. Uses `color-mix()` with the border token for opacity presets.

```tsx
import { Divider, Stack } from '@4lt7ab/ui';

<Divider spacing="lg" />

<Stack direction="horizontal" align="center" gap="sm">
  <span>Filter A</span>
  <Divider orientation="vertical" />
  <span>Filter B</span>
</Stack>
```

- `orientation`: `'horizontal'` (default) or `'vertical'`.
- `opacity`: `'default'`, `'subtle'`, `'strong'` — percentage of `colorBorder` mixed with transparent.
- `spacing`: optional `SpacingToken`. Horizontal: `margin-block`. Vertical: `margin-inline`.

The divider always carries `role="separator"` and `aria-orientation`, so it's announced correctly by screen readers.

## `Surface`

The composable color-surface primitive. Pick a semantic level; optionally add padding, a radius, a border, a shadow, a tint.

```tsx
import { Surface } from '@4lt7ab/ui';

<Surface level="panel" padding="lg" radius="lg" border>
  <h2>Sidebar panel</h2>
  <p>Uses colorSurfacePanel as its background.</p>
</Surface>
```

**Surface levels** (map straight to the semantic surface tokens):

| Level | Token | Use for |
|---|---|---|
| `page` | `colorSurfacePage` | Full-page background |
| `default` | `colorSurface` | Standard component background (cards, inputs, modals) |
| `solid` (default) | `colorSurfaceSolid` | Opaque counterpart for nested/layered content |
| `raised` | `colorSurfaceRaised` | Elevated — hover states, nested containers |
| `panel` | `colorSurfacePanel` | Side panels and navigation |
| `input` | `colorSurfaceInput` | Text inputs, selects, textareas |
| `overlay` | `colorSurfaceOverlay` | Semi-transparent backdrop behind modals |

**Other props:**

- `tint` — semantic color (`'primary'`, `'secondary'`, `'success'`, `'warning'`, `'error'`, `'info'`). Overrides the level background with a 10% tint.
- `padding` — `SpacingToken`.
- `radius` — `'sm' \| 'md' \| 'lg' (default) \| 'full'`.
- `border` — `true` for the default border, or a `SemanticColor` for a colored border.
- `shadow` — `'sm' \| 'md' \| 'lg'`.

`Surface` is the primitive `Card` composes — when you want exactly the Card visuals, use Card; when you want something custom, compose `Surface` directly.

## `Card`

Opinionated preset on top of `Surface`. Four variants, token-driven padding, optional hover and rhythm-synced glow.

```tsx
import { Card } from '@4lt7ab/ui';

<Card variant="elevated" padding="lg" hover onClick={select}>
  <h3>Project Apollo</h3>
  <p>Last edited 2 hours ago.</p>
</Card>
```

**Variants:**

- `default` — solid surface with border and small shadow.
- `flat` — raised surface with border, no shadow.
- `elevated` — solid surface with border and medium shadow.
- `ghost` — transparent `colorSurface` background, no border or shadow. Expects the consumer to draw the border in a stylesheet rule so `:hover` / `:focus` can still override border longhands.

**`asChild` pattern.** When you need a Card-styled `<a>` or router `<Link>` without a wrapper div around a focusable element:

```tsx
<Card asChild variant="elevated" hover>
  <a href="/projects/apollo">
    <h3>Project Apollo</h3>
    <p>Click-through card with a real anchor as the focusable root.</p>
  </a>
</Card>
```

`asChild` merges Card's styling, `style`, `ref`, and `onClick` into the child. Any `onClick` on the Card chains with the child's via `Slot`'s `mergeProps` — parent first, then child.

**`glow` prop.** Opt into a border glow that pulses with the active theme's rhythm (see [Theming](#/theming)). No-ops on themes without rhythm and under `prefers-reduced-motion`. Default off — Cards without this prop behave identically to pre-rhythm Cards.

## `AppShell.*` — viewport envelope

The compound that frames a full screen: top bar, sidebar, main, optional right panel. This docs site's own shell is an `AppShell` — you're reading the main pane right now.

```tsx
import { AppShell, TopBar, ThemePicker } from '@4lt7ab/ui';

<AppShell.Root>
  <AppShell.TopBar>
    <TopBar.Leading>
      <span>My app</span>
    </TopBar.Leading>
    <TopBar.Trailing>
      <ThemePicker variant="compact" />
    </TopBar.Trailing>
  </AppShell.TopBar>

  <AppShell.Sidebar aria-label="Primary navigation">
    <AppShell.SidebarSection label="Workspace">
      <a href="#/home">Home</a>
      <a href="#/projects">Projects</a>
    </AppShell.SidebarSection>
  </AppShell.Sidebar>

  <AppShell.Main>
    {/* route content */}
  </AppShell.Main>

  <AppShell.RightPanel>Context panel</AppShell.RightPanel>
</AppShell.Root>
```

**Slots:**

| Slot | Purpose |
|---|---|
| `AppShell.Root` | Layout envelope. Owns the sidebar-collapse and right-panel-open state. |
| `AppShell.TopBar` | Full-width top bar. Accepts `TopBar.*` children (`Leading`, `Trailing`, etc.). |
| `AppShell.Sidebar` | Left navigation rail. Collapses to an icon rail via `defaultSidebarCollapsed` or the controlled `sidebarCollapsed` prop. |
| `AppShell.SidebarSection` | Labeled group inside the sidebar. |
| `AppShell.Main` | The primary content pane. Renders as a single `<main>`. |
| `AppShell.RightPanel` | Optional right-side panel for detail/context content. |

**Controlled vs uncontrolled.** Either let `AppShell.Root` own its state (`defaultSidebarCollapsed`, `defaultRightPanelOpen`) or drive it from the outside (`sidebarCollapsed`, `onSidebarCollapsedChange`). Don't mix — switching between the two across renders is a warnable error.

**Layout sizing tokens.** The sidebar widths are theme-configurable via the `sizeSidebarExpanded` / `sizeSidebarCollapsed` tokens (and the right panel via `sizeRightPanelDefault`). Change them in a custom theme to resize the whole app shell without touching `AppShell` code.

**Context hooks.** `useAppShellContext()` (throws outside `<AppShell.Root>`) exposes the collapse/open state and toggle functions — useful for building a sidebar-collapse toggle inside `TopBar`. `useIsInsideAppShell()` returns a boolean so a child component can know whether to render its own `<main>` wrapper.

A constrained mini-shell — toggle the sidebar rail and the right panel to see the grid re-flow:

<LiveExample id="layout-appshell-mini" />

## `TopBar.*`

The top-bar compound rendered inside `AppShell.TopBar` — or as a standalone header when a viewport envelope is overkill. Three slots: `Leading` (brand), `Nav` + `Link` (active route), `Trailing` (utilities). Links support `asChild` so your router's link component becomes the focusable element.

```tsx
import { TopBar, ThemePicker } from '@4lt7ab/ui';

<TopBar.Root aria-label="Main" sticky>
  <TopBar.Leading>Acme Inc.</TopBar.Leading>
  <TopBar.Nav aria-label="Primary">
    <TopBar.Link asChild active>
      <a href="/home">Home</a>
    </TopBar.Link>
    <TopBar.Link asChild>
      <a href="/projects">Projects</a>
    </TopBar.Link>
  </TopBar.Nav>
  <TopBar.Trailing>
    <ThemePicker variant="compact" />
  </TopBar.Trailing>
</TopBar.Root>
```

**Slots.**

| Slot | Purpose |
|---|---|
| `TopBar.Root` | `<header>` landmark with flex layout and the topbar height. Pass `sticky` to pin to the top of the viewport. |
| `TopBar.Leading` | Brand or logo slot. Non-flexing. |
| `TopBar.Nav` | Optional `<nav>` region. Flex-grows to fill the remaining space. |
| `TopBar.Link` | A link inside `Nav` with an underline active-state. `asChild` lets you plug in a router link. |
| `TopBar.Trailing` | Right-aligned slot for theme picker, user menu, utility buttons. |

<LiveExample id="layout-topbar" />

## `Header`

A minimal heading primitive with optional subtitle, inline indicator, and trailing actions slot. Two levels (`page` / `section`) pick the heading tag and typographic weight. Border, spacing, and icon presets are intentionally absent — those are layout decisions the consumer expresses via `<Divider>` and `<Stack>`.

```tsx
import { Header, Badge, Button } from '@4lt7ab/ui';

<Header
  level="page"
  title="Apollo"
  subtitle="Last updated 2 hours ago"
  indicator={<Badge variant="success">Active</Badge>}
  trailing={<Button>Edit</Button>}
/>
```

**Props.**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `title` | `string` | — | Heading text. Required. |
| `level` | `'page' \| 'section'` | `'section'` | Renders `<h1>` for `page`, `<h2>` for `section`. |
| `subtitle` | `string` | — | Muted secondary text below the title. |
| `indicator` | `ReactNode` | — | Rendered inline next to the title (e.g. `Badge`, `StatusDot`). |
| `trailing` | `ReactNode` | — | Right-aligned content (e.g. action buttons). |

<LiveExample id="layout-header" />

## `TabStrip`

Horizontal tab navigation with a controlled contract. The consumer owns `activeKey` and renders the panel content — `TabStrip` only renders the strip of tab buttons with ARIA roles, roving focus, and the active indicator. Arrow keys, `Home`, and `End` move focus along the roving set; Enter/Space activates.

```tsx
import { TabStrip } from '@4lt7ab/ui';
import { useState } from 'react';

const [tab, setTab] = useState<string | null>('summary');

<TabStrip
  tabs={[
    { key: 'summary', label: 'Summary', icon: 'description' },
    { key: 'context', label: 'Context' },
  ]}
  activeKey={tab}
  onChange={setTab}
  allowDeselect
/>
{tab === 'summary' && <div>Summary content</div>}
{tab === 'context' && <div>Context content</div>}
```

**Props.**

| Prop | Type | Default | Notes |
|---|---|---|---|
| `tabs` | `Tab[]` | — | `{ key, label, icon? }` per tab. |
| `activeKey` | `string \| null` | — | The currently active tab. `null` means none. |
| `onChange` | `(key: string \| null) => void` | — | Fires on selection. Receives `null` when `allowDeselect` is on and the active tab is clicked. |
| `allowDeselect` | `boolean` | `false` | Clicking the active tab returns `null` — useful for collapsible panels. |
| `size` | `'sm' \| 'md'` | `'md'` | Controls height and label size. |

<LiveExample id="layout-tabstrip" />

## Icons

`@4lt7ab/ui` ships a small built-in icon set — 25 SVGs that cover the affordances every layout primitive in this concept needs (chevrons, close, search, settings, plus/minus, edit, copy, more-vertical, …). Every icon is available two ways: as a named React component (`IconSearch`, `IconCheck`, …) for tree-shaken direct use, or via the dynamic `<Icon name="search" />` component for cases where the name comes from data.

```tsx
import { IconSearch, IconCheck, Icon } from '@4lt7ab/ui';

<IconSearch />
<Icon name="search" size={20} />
<Icon name="chevron-right" size="md" />
```

`size` is a number (pixels) or one of `'xs' | 'sm' | 'md' | 'lg' | 'xl'`. Stroke-color is `currentColor` by default — set the parent's `color` to recolor.

**The 25 icons** — the full registry, kebab-cased names you pass to `<Icon name="...">`:

`close`, `chevron-right`, `chevron-down`, `chevron-left`, `chevron-up`, `check`, `check-circle`, `warning`, `error`, `info`, `search`, `trash`, `settings`, `plus`, `minus`, `edit`, `arrow-left`, `arrow-right`, `menu`, `eye`, `eye-off`, `copy`, `external-link`, `more-vertical`, `filter`.

The set is intentionally narrow — these are the affordances the library's components need, not a general-purpose icon font. For consumer icons outside this set, drop in your own SVG component (or a third-party set like Lucide) and ignore the registry; nothing in the library hard-depends on `Icon` for arbitrary glyphs.

### `IconButton`

The icon-as-affordance button. Circular, transparent button with a hover wash, used for compact actions where a text label would be visual noise (close buttons in modals, sort handles in tables, the sidebar collapse toggle).

```tsx
import { IconButton } from '@4lt7ab/ui';

<IconButton icon="settings" aria-label="Settings" onClick={openSettings} />
<IconButton icon="trash" aria-label="Delete project" size="sm" badge />
```

`aria-label` is required — the icon alone doesn't carry meaning for assistive tech. `size` is one of `'sm' | 'md' | 'lg'` (28px / 36px / 44px button with proportional icon). `badge` paints a small notification dot in the top-right. The `asChild` pattern from `Card` works the same way here — pass `asChild` plus a single child element (e.g. an anchor) to render a non-`<button>` root with all the IconButton chrome merged in.

## Page-envelope organisms

Three opinionated compounds that live *inside* `AppShell.Main` and codify the rhythm for common page shapes.

### `DataTablePage.*`

CRUD-page envelope: header, filter bar, table, pagination, empty state.

```tsx
<DataTablePage.Root>
  <DataTablePage.Header
    title="Projects"
    actions={<Button>New project</Button>}
  />
  <DataTablePage.FilterBar>
    <SearchInput placeholder="Search projects…" />
  </DataTablePage.FilterBar>
  <DataTablePage.Table>
    <Table.Root>{/* rows */}</Table.Root>
  </DataTablePage.Table>
  <DataTablePage.Pagination>{/* pagination */}</DataTablePage.Pagination>
</DataTablePage.Root>
```

Slots: `Root`, `Header`, `FilterBar`, `Table`, `Pagination`, `Empty`. The live showcase lives under [Data](#/data), where table-specific behavior earns its weight.

### `DetailPage.*`

Entity-detail envelope: header, meta grid, body, actions, optional right panel.

```tsx
<DetailPage.Root>
  <DetailPage.Header title="Apollo" />
  <DetailPage.Meta>
    <DetailPage.MetaItem label="Owner">Jacob</DetailPage.MetaItem>
    <DetailPage.MetaItem label="Updated">2 hours ago</DetailPage.MetaItem>
  </DetailPage.Meta>
  <DetailPage.Body>
    <Markdown>{content}</Markdown>
  </DetailPage.Body>
  <DetailPage.Actions>
    <Button>Edit</Button>
  </DetailPage.Actions>
  <DetailPage.RightPanel>Related activity</DetailPage.RightPanel>
</DetailPage.Root>
```

Slots: `Root`, `Header`, `Meta`, `MetaItem`, `Body`, `Actions`, `RightPanel`.

### `EmptyPage.*`

Full-page zero-state: icon, title, description, optional actions and tips grid.

```tsx
<EmptyPage.Root>
  <EmptyPage.Icon icon="FolderOpen" />
  <EmptyPage.Title>No projects yet</EmptyPage.Title>
  <EmptyPage.Description>
    Create your first project to get started.
  </EmptyPage.Description>
  <EmptyPage.Actions>
    <Button>New project</Button>
  </EmptyPage.Actions>
  <EmptyPage.Tips>
    <EmptyPage.Tip>Tip: use keyboard shortcut N to create.</EmptyPage.Tip>
  </EmptyPage.Tips>
</EmptyPage.Root>
```

Slots: `Root`, `Icon`, `Title`, `Description`, `Actions`, `Tips`, `Tip`.

## Choosing the right layout piece

| Problem | Reach for |
|---|---|
| "Arrange these in a line with consistent gaps." | `Stack` |
| "Cap the line length of this reading block." | `Container` (`width="prose"`) |
| "Wrap cards into tiles that reflow." | `Grid` (auto-fill with `minColumnWidth`) |
| "Exactly N columns, always." | `Grid` (`columns`) |
| "Visually separate two groups." | `Divider` |
| "I need a bordered, shadowed content group." | `Card` |
| "I need a colored surface with custom chrome." | `Surface` |
| "Frame the whole viewport — top bar, sidebar, main." | `AppShell.*` |
| "CRUD page — header, filters, table, pagination." | `DataTablePage.*` |
| "Entity detail page — header, meta, body, right panel." | `DetailPage.*` |
| "Full-page empty state — icon, title, CTA." | `EmptyPage.*` |

## Where to next

- **[Theming](#/theming)** — the token layer that feeds every `gap`, `padding`, and `radius` on this page.
- **[Data](#/data)** — `Table.*` and `DataTablePage.*` in depth, with the live showcase.
- **[Modals](#/modals)** — surfaces that open on top of the layout.
