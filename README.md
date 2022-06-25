# NEXTJS scalable Architecture

A next project that showcase best practices and scalable architecture design

## Setup

- npx create-next-app --ts nextjs-arc-template
- npm run build || yarn run
- yarn build

_init git_

- add remote repo

_configure lint_

- npm run lint || yarn lint
- configure files

_configure prettier_

- install -D prettier
- configure files
- -yarn prettier

_husky_

- yarn add -D husky
- npx husky install
- npx husky add .husky/pre-commit "yarn lint"
- npx husky add .husky/pre-push "yarn build"
- configure files
