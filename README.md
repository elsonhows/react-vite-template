# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json', './tsconfig.app.json'],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Quick Start

### Requirements

- [Node.js 20+](https://nodejs.org/en)

### Instructions

- Copy `.env.example` to `.env` and modify it according to your environment.
- Run `npm install`
- Run `npm start` or `npm run dev`

## Libraries

- [vite](https://github.com/vitejs/vite): dev server
- [import-meta-env](https://github.com/runtime-env/import-meta-env): runtime environment variable
- [eslint v8.x](https://github.com/eslint/eslint): code liniting
- [prettier](https://github.com/prettier/prettier): code formatter
- [husky](https://github.com/typicode/husky) + [lint staged](https://github.com/lint-staged/lint-staged): pre-commit with lint
- [tanstack router](https://github.com/TanStack/router): app router
- [mantine](https://github.com/mantinedev/mantine): component library
- [css module](https://github.com/css-modules/css-modules): css styling
- [tanstack query](https://github.com/TanStack/query): handling server request
- [redaxios](https://github.com/developit/redaxios): lightweight version of axios
- [zod](https://github.com/colinhacks/zod): schema validation
- [vitest](https://github.com/vitest-dev/vitest): unit testing
- [react-testing-library](https://github.com/testing-library/react-testing-library): component testing
- [playwright](https://github.com/microsoft/playwright): end-to-end testing

## Reference

Potential useful reference links:

- [awesome vite](https://github.com/vitejs/awesome-vite)
- [tanstack router kitchen sink](https://tanstack.com/router/latest/docs/framework/react/examples/kitchen-sink-react-query-file-based)
