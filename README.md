# NEXTJS scalable Architecture

A next project that showcase best practices and scalable architecture design

## Setup

- npx create-next-app --ts nextjs-arc-template
- npm run build || yarn run
- yarn build

_init git_

- git add remote repo
- git add .
- git commit -m "docs: first commit"

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

_configure git commit lint_

- yarn add -D @commitlint/config-conventional @commitlint/cli
- configure husky file
- npx husky add .husky/commit-msg 'npx --no -- commitlint --edit "$1"'

_configure vscode_

- configure .vscode folder

_configure env_

- yarn add -D cross-env
- configure package.json

_configure storybook_

- npx sb init --builder webpack5
- configure .eslinttrc and package.json
- yarn install

`npx storybook@next automigrate`

- run storybook `yarn storybook`

git commit -m "feat: BaseTemplate component"
