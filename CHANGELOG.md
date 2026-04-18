# Changelog

## Unreleased

- **BREAKING** — Refactor `Select` to a compound API: `Select.Root`, `Select.Trigger`, `Select.Value`, `Select.Content`, `Select.Item`. The old flat API (`<Select options={…}>` with `children` as an optgroup fallback, plus `SelectOption` and `SelectProps` types) is removed. `Select.Root` owns state + context (controlled `value` + `onValueChange`; uncontrolled `defaultValue`; `disabled`, `hasError`, `name`, `required`, `id`, `form`) and renders the hidden native `<select>` for form submission. `Select.Item` self-registers with Root on mount so the listbox DOM, aria-activedescendant, keyboard nav, and `Select.Value` label lookup all stay 1-to-1 with the rendered children. Viewport-aware drop direction is preserved. Rendering a sub-component outside `<Select.Root>` throws a dev-time error. Items accept a `textValue` prop for non-string children. Legacy-shaped `onChange({ target: { value, name } })` is available as a convenience shim alongside `onValueChange`. See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §10
- **BREAKING** — Refactor `TopBar` to a compound API: `TopBar.Root`, `TopBar.Leading`, `TopBar.Nav`, `TopBar.Link`, `TopBar.Trailing`. The old `items={NavItem[]}` / `activePath` / `onNavigate` flat API is removed (and with it the `NavItem` and `TopBarProps` types, replaced by per-part prop types `TopBarRootProps`, `TopBarLeadingProps`, `TopBarNavProps`, `TopBarLinkProps`, `TopBarTrailingProps`). `TopBar.Link` takes a declarative `active?: boolean` and supports `asChild` — routing belongs to the consumer. `sticky` remains on `Root`. Children inside a compound part throw a dev-time error if rendered outside `<TopBar.Root>`. See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §13
- Add `Slot` helper + `composeRefs` + `mergeProps` to `@4lt7ab/core` — a Radix-style polymorphic utility that clones a single child element, merging props (events chain, style shallow-merges, className concatenates, everything else child-wins) and composing refs. The foundation for the `asChild` pattern across the library
- Add `asChild?: boolean` prop to `Button` — when true, merges Button's variant/size styling, event handlers, ARIA attrs, and ref into the single child element instead of rendering a `<button>`. Enables `<Button asChild><a href="/">Go</a></Button>` without wrappers or double tap targets. Existing call sites unchanged (additive)
- Add `asChild?: boolean` prop to `IconButton` — same pattern. In asChild mode the `icon`/`badge` props are ignored and the consumer renders the icon inside their own element (an `<a>` or router Link). The `aria-label` requirement is preserved

## v0.2.31

- **BREAKING** — Consolidate `PageHeader` + `SectionHeader` into a single `Header` component. `Header` takes `title`, `level: 'page' | 'section'` (default `'section'`), optional `subtitle`, `indicator`, and `trailing`. The old `SectionHeader`-only props (`icon`, `border`, `spacing`) are retired; consumers compose them via `<Icon>`, `<Divider>`, and `<Stack>`. Migrate `<PageHeader title="…" />` → `<Header level="page" title="…" />`, and `<SectionHeader icon="x" title="…" />` → `<Header title="…" indicator={<Icon name="x" />} />`. See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §7
- Add `useDisclosure()` hook to `@4lt7ab/core` — boolean open/closed state with ARIA wiring. Returns `{ open, onToggle, onOpen, onClose, triggerProps, contentProps }` with `aria-expanded`, `aria-controls`, and shared `id` pre-wired. Supports controlled (`open` + `onOpenChange`) and uncontrolled (`defaultOpen`) modes. Tests cover default/controlled/uncontrolled behavior and handler wiring
- **BREAKING** — Retire `ExpandableCard` component and its `ExpandableCardProps` type. The component was Card + a boolean + a chevron. Migrate to a `<Card>` + `useDisclosure()` composition — the hook from `@4lt7ab/core` owns state + ARIA; the consumer owns chevron, header, and panel layout. Demo rebuilt on the composition. See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §4
- **BREAKING** — Retire `PageShell` component and its `PageShellProps` type. PageShell was a ~50 LOC flex-column + maxWidth + padding wrapper — the consumer's app shell is not the library's to own. Migrate to a plain `<div style={{ display: 'flex', flexDirection: 'column', maxWidth, margin: '0 auto', padding, gap }}>` or a `<Surface>` + `<Stack>` composition. See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §3
- **BREAKING** — Trim `EmptyState.idle` prop (and the `EmptyStateIdle` type). The bundled `breathe` / `particles` idle animations + injected CSS are removed; `useInjectStyles` is no longer used in this component. EmptyState now renders a static icon — a defensible default. Consumers who want the old `breathe` effect compose a transform-based CSS animation themselves; the keyframes are published in upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §6 as an opt-in snippet
- **BREAKING** — Retire `MetadataTable` component and its `MetadataTableProps` type. The component wrapped a simple `<dl>` the consumer already knows how to write. Delete the import; write the `<dl>/<dt>/<dd>` markup directly (using `sectionLabelStyle` from `@4lt7ab/ui` for the label styling if desired). See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §2
- **BREAKING** — Trim `AlertBanner.autoDismiss` prop. The component no longer owns dismiss timing; consumers wrap `onDismiss` in a `useEffect` + `setTimeout` (three lines). Internal `useEffect`/`useRef` timer code removed; demo switched to an external-timing example. See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §5
- Docs — remove KB document ULIDs from `CLAUDE.md`, `README.md`, and `packages/ui/README.md` retirement sections. The repo describes what was retired and why; the full design rationale is carried as `design`-type documents on the `4lt7ab/component-library` project in the Tab knowledgebase, not as opaque IDs in the repo. Surface-consolidation and modal-consolidation v0.3.0 design docs (`01KPD518FE48GGSBJFAHVPFMJH`, `01KPD518FGRWBYJTS348Y7SMCX`) attached to the project at the same time
- **BREAKING** — Retire `SectionLabel` component. The uppercase + letter-spacing style block is now exported as `sectionLabelStyle: CSSProperties` from `@4lt7ab/ui` for consumers to apply to any element. See upgrade guide `01KPE1JZ93VM9QDK2QFM88GWBK` §1
- Docs — scaffold the 0.4.0 consumer upgrade guide in the Tab knowledgebase as document `01KPE1JZ93VM9QDK2QFM88GWBK` (folder `upgrade-guides`, attached to `4lt7ab/component-library`). Quick-lookup table plus a section per v0.4 breaking change; each section is an intentional `_TBD_` placeholder populated by its owning backlog task as the change lands. Cross-links the North Star principles doc (`01KPE19KJEN755V8ZX8DN1ZWSZ`), the component audit (`01KPE1EQB2T23FV6XH17APTD1T`), and the compound-component ADR (`01KPE1EJPMPZ4DPXYMK624KTG3`)
- Docs — publish the 0.3.0 consumer upgrade guide to the Tab knowledgebase as document `01KPD65F17Z9TXXEJEA6FG7JNT` (attached to the `4lt7ab/component-library`, `Tab`, and `tab-for-projects` projects). Covers every breaking change in this release with before/after JSX snippets and a quick-lookup table; no in-repo artifact per the 0.3.0 convention
- Docs — refresh `CLAUDE.md` source-layout tree to match the current `packages/ui/` and `packages/content/` component sets, and add a "Retired in 0.3.0" section to `CLAUDE.md`, the root `README.md`, and `packages/ui/README.md` pointing at the KB design docs (`01KPD518FE48GGSBJFAHVPFMJH`, `01KPD518FGRWBYJTS348Y7SMCX`) rather than in-repo filepaths
- **BREAKING** — Modal/overlay consolidation (see KB design doc `01KPD518FGRWBYJTS348Y7SMCX`): retire `FormModal` (with `FormModalProps`) and `ShortcutHelpModal` (with `ShortcutHelpModalProps`, `ShortcutDef`, `ShortcutGroup`) as documented compositions over `ModalShell`. `Overlay`, `ModalShell`, and `ConfirmDialog` remain as primitives. `modalHeadingStyle` and `modalFooterStyle` are now exported directly from `@4lt7ab/ui` for composition. See the `ModalShellFormPattern` demo for the canonical form-in-a-modal replacement; shortcut-sheet consumers own their data shape and `<kbd>` styling per the design doc's migration snippet
- **BREAKING** — Surface consolidation (see KB design doc `01KPD518FE48GGSBJFAHVPFMJH`): retire `ThemeSurface` component (replaced by new `usePageBackground()` hook in `@4lt7ab/core` plus `<Surface level="page">` for the non-global case), retire `StatCard` component (migrate to a `<Surface>` composition), and retire `Card` `variant: 'live'` (use `glow` prop — theme-aware superset via the component-canvas bridge). `Surface` already carries the `tint` prop noted in the design doc
- Add theme rhythm system — `ThemeDefinition.rhythm?: { bpm, easing, intensity }` adds a temporal dimension to themes. `useThemeRhythm()` hook in `@4lt7ab/core` exposes active config, a phase ref (0..1 sine/triangle/square/sawtooth), an imperative `subscribe()` for per-frame updates, and a `durationCss` helper for CSS animations
- Rhythm engine is lazy — single shared `requestAnimationFrame` loop starts only on first subscriber and stops on last unsubscribe; zero cost when unused
- Synthwave (80 bpm sine), Pipboy (140 bpm square), and Neural (60 bpm triangle) themes gain rhythm definitions
- StatusDot pulse now syncs its animation duration to the active theme's rhythm when present, falls back to 1.5s otherwise
- Respects `prefers-reduced-motion` — pins phase to 0.5 and skips rAF
- Skeleton now pulses with the theme's accent color at low opacity instead of a static grey block. Sibling skeletons stagger via `:nth-of-type` for a wave effect in DOM order. Duration syncs to the active theme's rhythm when present. `CardSkeleton` and `RowSkeleton` inherit via composition. Honors `prefers-reduced-motion`
- EmptyState gets an `idle?: 'none' | 'breathe' | 'particles'` prop (default `'breathe'`). `breathe` scale-pulses the icon 1.0 → 1.05 → 1.0 on a 3s cycle. `particles` adds four drifting dots with independent elliptical paths. All animations are CSS-only, transform-based (no layout shift), and honor `prefers-reduced-motion`
- Toast now renders a 2px dismiss-timer bar at the bottom that drains from full to empty over the toast's duration, colored to match the toast type. Hovering or focusing the toast pauses both the JS dismissal timer and the bar animation via a `data-toast-paused` attribute; leaving resumes with the remaining time. Pass `duration: 0` to showToast for a persistent toast (no bar, no auto-dismiss). Honors `prefers-reduced-motion` by freezing the bar at full width while the JS dismissal still runs
- ExpandableCard open/close is now choreographed rather than simultaneous. On open: chevron rotates first (0-150ms), height opens with 100ms delay, direct children fade in with 40ms stagger. On close: children fade out immediately, height collapses after 80ms, chevron rotates back after 150ms. Total envelope ≤ 350ms. Honors `prefers-reduced-motion` for instant open/close
- Fix Combobox menu reopening after option selection — listbox now stays closed when a click-selected option refocuses the input, matching the ARIA APG combobox pattern. Regression test asserts listbox is not in the DOM post-selection
- Docs — add `packages/core/docs/component-canvas-bridge.md` specifying how components opt into `useThemeRhythm` (API shape, Card example, no-rhythm + reduced-motion fallback contract, 1ms-per-frame perf budget). Design doc only, no runtime changes
- Card gains an opt-in `glow?: boolean` prop (default `false`). When enabled, the border emits a color-mixed box-shadow whose spread and alpha scale with the active theme's rhythm phase. First consumer of the component-canvas bridge. No subscription and no visual change when `glow` is off, when the active theme has no rhythm, or under `prefers-reduced-motion`. Cards without the prop behave identically to pre-bridge Cards

## v0.2.30

- Fix ModalShell clipping on short viewports — panel now caps at `maxHeight: 100%` with `overflowY: auto`, and the centering container pads by `spaceMd` so the panel has breathing room from viewport edges
- Add regression test covering ModalShell overflow behavior

## v0.2.29

## v0.2.28

- Add DocBlock documentation system — shared `PropsTable`, `PropDemo`, and `DocBlock` components in `demo/components/`
- Rewrite all 58 demo files with structured prop documentation: toggleable Examples/API views, per-prop live examples, complete PropMeta arrays
- Every user-facing prop across all components now has a type, default, and description in the API table

## v0.2.27

- **BREAKING**: Replace Icon/IconButton `size?: number` with `IconSize` preset (`'xs' | 'sm' | 'md' | 'lg' | 'xl'`)
- **BREAKING**: Merge IconButton `size` and `buttonSize` into single `size?: IconButtonSize` prop — icon size derived internally
- **BREAKING**: Remove StatCard `iconSize` prop — icon circle is a fixed internal layout
- **BREAKING**: Replace `maxWidth?: number` on ModalShell, FormModal, ShortcutHelpModal with `width?: ModalWidth` preset
- **BREAKING**: Lock down all Table subcomponents — replace HTMLAttributes with explicit props, remove `...props` spread
- **BREAKING**: Constrain TableCell/TableHeaderCell `width` to `number` only (drop string)
- **BREAKING**: Replace ProgressBar `height?: number` with `ProgressBarHeight` preset (`'sm' | 'md' | 'lg'`)
- **BREAKING**: Replace Divider `opacity?: number` with `DividerOpacity` preset (`'subtle' | 'default' | 'strong'`); remove `length` prop
- **BREAKING**: Drop `string` from Grid `minColumnWidth` (number only)
- **BREAKING**: Remove Icon `extends HTMLAttributes` — explicit props only
- Normalize icon prop type to `IconName | (string & {})` on SectionHeader, StatCard
- Add `IconSize`, `ModalWidth`, `ProgressBarHeight`, `DividerOpacity` types and maps
- Replace internal hardcoded pixel literals with token references (TagChip, ChipPicker, TopBar)

## v0.2.26

- **BREAKING**: Lock down component prop APIs — remove `style`, `className`, and `extends HTMLAttributes` from all components
- **BREAKING**: Replace arbitrary `color?: string` props with `SemanticColor` union on Badge, StatCard, StatusDot, ProgressBar, Surface
- **BREAKING**: Remove `bg?: string` from Surface, replace with `tint?: SemanticColor`
- **BREAKING**: Constrain Surface `border` string values to `SemanticColor`
- **BREAKING**: Replace StatusDot `size?: number` with `size?: 'sm' | 'md' | 'lg'`; remove `color?: string`
- **BREAKING**: Replace Skeleton `borderRadius?: string` with `radius?: RadiusToken`; constrain `width`/`height` types
- **BREAKING**: Constrain Stack `align`/`justify` from open CSS types to named unions (`AlignItems`, `JustifyContent`)
- **BREAKING**: Replace Container `maxWidth?: string` with `width` union (`'narrow' | 'prose' | 'wide' | 'full'`); replace `padding?: string` with `ContainerPadding` preset
- **BREAKING**: Replace `extends HTMLAttributes` on form elements (Input, Textarea, Select, Button, IconButton, Combobox, SearchInput) with explicit prop allowlists
- Add `BaseComponentProps` type (`id`, `data-testid`) — shared across all components
- Add `SemanticColor` type and `semanticColorMap` for token-based color props
- Add `AlignItems`, `JustifyContent` constrained layout unions with maps
- Add `'primary'` variant to Badge, StatusDot
- Aria props distributed per-component: interactive/structural components get relevant aria-* props, decorative components get none

## v0.2.25

- Add Surface component — semantic background wrapper with level, border, shadow, radius, and polymorphic `as` prop
- Add Grid component — responsive auto-fit grid with `minColumnWidth` and gap props
- Add Divider component — horizontal/vertical rule using semantic border tokens
- Add StatCard component — metric display card with icon, color, value, and label
- Add TabStrip component — horizontal tab navigation bar
- Add SectionHeader component — section heading with optional actions
- Add ThemeSurface demo for page-background surface component
- Register Surface, Grid, Divider, SectionHeader, ThemeSurface, StatCard, and TabStrip in ComponentExplorer sidebar
- Update Card and Stack to support additional layout props

## v0.2.24

- Fix Toast backgrounds being transparent on some themes — layer translucent type color over opaque `colorSurfaceSolid`
- Add `xs` pill size variant to Badge — tiny monospace lowercase pill for inline metadata labels
- Add PillSelect pill-shaped native select component for filter bars with active/inactive state coloring
- Add PageShell centered max-width scrollable column layout component to `@4lt7ab/ui`
- Add focus-visible rings and hover state to IconButton; add `buttonSize` prop (`sm`/`md`/`lg`) for configurable tap-target size
- Fix Toast and AlertBanner dismiss buttons stripping focus-visible outline (`all: unset` replaced with explicit resets)
- Add focus-visible indicator to SegmentedControl segments for keyboard navigation
- Add focus-visible ring to ChipPicker chip buttons
- Replace sed-based `@4lt7ab/core` import rewriting with cross-platform Bun script (`scripts/rewrite-core-imports.ts`) — handles ESM, CJS, and `.d.ts` files with verification
- Extract shared prose/markdown constants (breakpoints, typography scale, color-mix ratios) into `packages/content/src/constants.ts` and export from `@4lt7ab/content` barrel
- Add transition, border-width, and z-index semantic tokens to `@4lt7ab/core`
- Migrate all components to use new tokens instead of hardcoded values
- Fix scanline z-index in synthwave and pipboy themes (was 9999/1000, now 1)
- Add `staggerStyle` animation helper to `@4lt7ab/core` for staggered fadeInUp entrance animations
- Add TextSection click-to-edit markdown component to `@4lt7ab/content` — three-state (editing/content/empty) with keyboard shortcuts (Cmd+Enter to save, Escape to cancel)
- Fix Select component not firing onChange in controlled mode when using custom dropdown (options prop)

## v0.2.23

- Add test infrastructure (vitest, testing-library, jsdom) and first 76 tests covering Select, Combobox, ModalShell, useFocusTrap, and dateUtils
- Add testing conventions and priority list to CLAUDE.md

## v0.2.22

- Tighten list spacing in Prose and Markdown components — reduce inter-item, list-block, and nested-list margins

## v0.2.21

- Fix pre-commit jsx-runtime check failing when esbuild orders non-JSX modules first in the bundle

## v0.2.20

- Replace `bun build` with esbuild for `@4lt7ab/ui` JS bundles — fixes `jsxDEV is not a function` (dev JSX in dist), ModalShell name-mangling, and removes all sed post-processing hacks
- Separate demo app into its own workspace with isolated dependencies — vite, react, react-dom no longer in root devDependencies

## v0.2.19

- Fix `ModalShell` export broken by bun bundler name-mangling (`ModalShell3 as ModalShell` referencing undefined variable); add post-build sed fixup to correct mangled ModalShell references in both ESM and CJS bundles

## v0.2.18

- Fix `@4lt7ab/ui` bundle: `bun build --production` minifier in bun v1.3.11 silently drops 36 of 77 exports (including ModalShell, all icons, Toast, ErrorBoundary, ChipPicker, etc.); replaced with unminified build — consumers minify at their own bundler layer

## v0.2.17

- Add `colorSurfaceSolid` token — opaque counterpart to `colorSurface` for canvas themes where `colorSurface` is transparent; static themes alias to `colorSurface`
- Card component uses `colorSurfaceSolid` instead of `colorSurface` for readable backgrounds on animated themes

## v0.2.16

- Decouple `Markdown` from `Prose` — own `.alttab-markdown` CSS namespace, independent styling layer; Prose is no longer imported or required
- Enhance Markdown link styles — visible underline at 40% opacity by default, full on hover, focus-visible ring
- Enhance Markdown inline code — `colorSurfaceRaised` background with border pill, `colorTextSecondary` text, word-break support
- Enhance Markdown code blocks — left accent border in `colorActionPrimary`, increased line-height
- Enhance Markdown tables — rounded corners, `colorSurfaceRaised` header row, uppercase small-caps headers, row hover highlight
- Enhance Markdown lists — `colorActionPrimary` bullet/number markers, tightened nested list spacing, flexbox task list alignment
- Add heading anchors to Markdown — auto-generated `id` slugs, hover-visible link icon, `scroll-margin-top` for sticky headers
- Add callout blocks to Markdown — GitHub-style `> [!NOTE]`, `> [!TIP]`, `> [!IMPORTANT]`, `> [!WARNING]`, `> [!CAUTION]` with themed colors, icons, and tinted backgrounds
- Add copy-as-markdown button — top-right icon button copies raw markdown source on hover
- Add GFM strikethrough styling — muted color for `del` elements
- Add zebra-striped table rows to Markdown and Table components — uses `color-mix(in srgb, var(--color-text) 5%, transparent)` for visible contrast across all themes
- Fix Table hover highlight — was using invisible `colorSurfaceRaised`, now uses `color-mix` at 8% for clear feedback
- Move Table row backgrounds from `<tr>` to `<td>` elements for cross-browser reliability
- Remove dead `transition: 'background 0.1s'` from TableRow inline style
- Remove unnecessary comments from ShortcutHelpModal

## v0.2.15

- Add `TopBar` component — app navigation header with title/logo slot, horizontal nav items with active underline + color indicator, trailing slot, and sticky variant
- Add `FormModal` component — modal wrapper for form submission with async loading submit, cancel, and ModalShell integration
- Add `AlertBanner` component — full-width dismissable notification bar with severity variants, slide-in animation, and optional auto-dismiss
- Add `ShortcutHelpModal` component — keyboard shortcut reference overlay with grouped sections and styled kbd elements
- Style Prose code blocks — darker recessed background, smaller monospace text, muted color
- Add copy-to-clipboard button on Markdown code blocks — appears on hover, shows check icon on success
- Add `Markdown` component to `@4lt7ab/content` — convenience wrapper rendering a markdown string inside Prose with remark-gfm for GitHub Flavored Markdown (tables, strikethrough, task lists, autolinks); `react-markdown` and `remark-gfm` added as peer dependencies
- Add built-in `@keyframes spin` and `@keyframes fade-in-up` injected globally by ThemeProvider — consumers no longer need to define common keyframes; `fade-in-up` respects `prefers-reduced-motion` (opacity-only fallback); export `KEYFRAMES` constant for type-safe references
- Add `SearchInput` component -- debounced text input with search icon, configurable delay, and trailing slot for inline controls
- Add `SegmentedControl` component -- generic segmented toggle with sliding pill indicator, icon/text/icon+text segments, aria-pressed accessibility, prefers-reduced-motion support
- Add `ChipPicker` component -- multi-select toggle chip group with pill-shaped buttons, optional category grouping via SectionLabel headers, aria-pressed accessibility, and hover states via useInjectStyles
- Add `TableFilters` component -- declarative filter bar for Table with debounced text search and select dropdown filters, horizontal flex layout with wrapping, controlled values/onChange interface
- Add `Combobox` component — typeahead select with free-text input, substring filtering, keyboard navigation, viewport-aware dropdown, and ARIA combobox pattern
- Add `Toast` component — ephemeral notification system with `ToastProvider`, `useToast` hook, typed toasts (success/error/info/warning), auto-dismiss, stacked portal rendering, enter/exit animations respecting `prefers-reduced-motion`, and `aria-live` accessibility
- Add static CSS backgrounds to ThemeBackground for non-animated themes (slate, warm-sand, moss, coral) — every built-in theme now gets a coherent background
- Add `fallback` prop to ThemeBackground for consumer-provided backgrounds on unregistered themes
- Fix Select dropdown positioning — replace native `<select>` dropdown with custom listbox that opens below or above the trigger based on available viewport space
- Fix ThemeSurface `global` prop not setting `body.style.color` — components using `currentColor` (icons, Card content) rendered black on dark themes
- Add `color: var(--color-text)` to Card as defense-in-depth for `currentColor` inheritance

## v0.2.14

- Add `SectionLabel` component — uppercase section heading for labeling content groups (fontSizeXs, letterSpacingWide, colorTextSecondary)
- Add `color` prop to Badge for custom color overrides — enables domain-specific variants without forking the component
- Add icon font fallback to `Icon` — unregistered names render via a configurable `fontClass` prop (e.g. Material Symbols)
- Add `IconFontProvider` context for setting a default `fontClass` across a subtree
- Add `fontClass` prop to `IconButton` (passed through to `Icon`)

## v0.2.13

- Fix ThemeSurface `global` prop race condition — use `var(--color-surface-page)` directly instead of getComputedStyle
- Add `animate` prop to StatusDot with `'pulse'` animation and `prefers-reduced-motion` support
- Add `loading` prop to Button — shows spinner, disables interaction, sets `aria-busy`
- Add `iconOnly` prop to Button — square aspect ratio with equal padding for icon-only use
- Add `hover` prop to Card for interactive hover state (border highlight + translateY lift)
- Add `live` variant to Card with pulsing border glow animation (respects prefers-reduced-motion)
- Add `indicator` ReactNode prop to PageHeader for rendering badges or status dots next to the title
- Add `prefix` string prop to TagChip for categorized tags like "lang: typescript"
- Add `MetadataTable` component — vertical label/value pair list with optional section title
- Add `ErrorBoundary` component — themed fallback UI with error message, stack trace, retry button, and custom fallback render prop

## v0.2.12

- Fix `@4lt7ab/ui` dist importing `jsxDEV` from `react/jsx-dev-runtime` instead of `jsx` from `react/jsx-runtime`, causing white-screen crash in production builds of consuming apps
- Use `bun build --production` flag for correct JSX transform (shell `NODE_ENV=production` prefix was insufficient)
- Fix sed path-rewrite pattern to handle minified output (no space after `from` keyword)
- Update `verify-exports.ts` to recognize minified export aliases (`as ExportName`)

## v0.2.11

## v0.2.10

- Fix synthwave theme button glow: remove static box-shadow on `button:focus-visible` and dead `button[data-variant="primary"]` rule

## v0.2.9

- Add Makefile with build, typecheck, dev, verify, clean, and deploy targets
- Add remote connectivity preflight check to deploy.sh to fail fast on auth issues

## v0.2.8

- Fix DatePicker and DateRangePicker missing from dist bundles due to bunup v0.16.31 silently dropping modules
- Switch `@4lt7ab/ui` JS build from bunup to `bun build` (bunup still generates `.d.ts`)
- Add `scripts/verify-exports.ts` post-build check to catch silent bundler export omissions

## v0.2.7

- Add `DatePicker` single-date selection component, reusing DateRangePicker calendar internals
- Add `DateRangePicker` component to `@4lt7ab/ui` with zero external dependencies, full keyboard nav, and ARIA grid pattern
- Add `variant="compact"` to ThemePicker for toolbar/header use (dropdown with keyboard nav, click-outside-close, Escape-to-close)
- Add Analytics Dashboard pattern recipe demonstrating DateRangePicker and ThemePicker compact
- Use `colorSurfacePanel` for date picker popovers to indicate layering
- Fix ThemePicker compact dropdown anchoring to left-align below trigger
- Change default theme from `synthwave` to `warm-sand`
- Dial back synthwave glow: remove animated glow-pulse/primary-glow/focus-strobe/link text-shadow; use conventional shadows for sm/md tokens, keep glow on modals (shadowLg) and a subtle static glow on primary buttons and focus
