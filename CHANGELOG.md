# Changelog

## Unreleased

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
