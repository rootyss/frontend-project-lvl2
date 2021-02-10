install:
	npm install
publish:
	npm publish --dry-run
lint:
	npx eslint .
lintFix:
	npx eslint . --fix
test:
	NODE_OPTIONS=--experimental-vm-modules npx jest
