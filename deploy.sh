#!/usr/bin/env bash
set -euo pipefail

# ── Resolve version ──────────────────────────────────────────────
# Usage:
#   ./deploy.sh          → bump patch  (0.1.0 → 0.1.1)
#   ./deploy.sh minor    → bump minor  (0.1.0 → 0.2.0)
#   ./deploy.sh major    → bump major  (0.1.0 → 1.0.0)
#   ./deploy.sh 2.0.0    → use exact version

BUMP="${1:-patch}"

LATEST=$(git tag -l 'v*' --sort=-v:refname | head -n1 | sed 's/^v//')
if [[ -z "$LATEST" ]]; then
  LATEST="0.0.0"
fi

IFS='.' read -r MAJOR MINOR PATCH <<< "$LATEST"

case "$BUMP" in
  patch) PATCH=$((PATCH + 1)) ;;
  minor) MINOR=$((MINOR + 1)); PATCH=0 ;;
  major) MAJOR=$((MAJOR + 1)); MINOR=0; PATCH=0 ;;
  [0-9]*) IFS='.' read -r MAJOR MINOR PATCH <<< "$BUMP" ;;
  *) echo "Usage: ./deploy.sh [patch|minor|major|x.y.z]"; exit 1 ;;
esac

VERSION="$MAJOR.$MINOR.$PATCH"
TAG="v$VERSION"

if git rev-parse "$TAG" >/dev/null 2>&1; then
  echo "Error: tag $TAG already exists."
  exit 1
fi

# ── Build ────────────────────────────────────────────────────────
echo "Building..."
bun run typecheck
bun run build

# ── Update package.json version ──────────────────────────────────
sed -i '' "s/\"version\": \".*\"/\"version\": \"$VERSION\"/" package.json

# ── Commit & tag ─────────────────────────────────────────────────
git add dist/ package.json
git commit -m "release: v$VERSION"
git tag "$TAG"

# ── Push ─────────────────────────────────────────────────────────
git push origin main --tags

echo ""
echo "Deployed $TAG"
echo "Consumers: \"@4lt7ab/ui\": \"github:username/component-library#$TAG\""
