.PHONY: install dev build typecheck verify clean deploy deploy-minor deploy-major

install:
	bun install

dev:
	bun run dev

build:
	bun run build

typecheck:
	bun run typecheck

verify:
	bun run scripts/verify-exports.ts

clean:
	rm -rf packages/*/dist

# Deploy: make deploy | make deploy-minor | make deploy-major | make deploy V=2.0.0
deploy:
	./deploy.sh $(V)

deploy-minor:
	./deploy.sh minor

deploy-major:
	./deploy.sh major
