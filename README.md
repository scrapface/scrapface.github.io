# [Scrapface][website] &middot; [![GitHub license]](./LICENSE) ![CI Action] ![Deploy Action]

<!-- Table of Contents -->

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation

The first step will be to clone the repo

```shell
git clone https://github.com/scrapface/scrapface.github.io.git
```

### For development

The requirements are:

- [Node.js]
- [Yarn]
- [Rust] & [Tauri]

1. Install the dependencies
   ```shell
   yarn
   ```
2. Optionally, you can install playwright to run the e2e tests
   ```shell
   npx playwright install --with-deps
   ```

## Usage

In order to start the website, you will need to run the NPM scripts that are available in the package.json file,
using `yarn` or `npm run`. Here are the most important ones:

- **`dev`**: Starts the tauri development server.
- **`build`**: Builds your application for production. The output is in `src-tauri/target`.
- **`test:unit`**: Runs the unit tests using [Vitest].
- **`test:e2e`**: Runs the end-to-end tests using [Playwright].
- **`lint`**: Lints the project using [ESLint].

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

<!-- Packages links -->

[eslint]: https://eslint.org
[node.js]: https://nodejs.org/en
[playwright]: https://playwright.dev
[rust]: https://www.rust-lang.org
[tauri]: https://tauri.app/v1/guides/getting-started/prerequisites
[vitest]: https://vitest.dev
[yarn]: https://yarnpkg.com

<!-- Repository links -->

[website]: https://scrapface.github.io

<!-- Shields.io links -->

[github license]: https://img.shields.io/badge/license-MIT-blue.svg
[ci action]: https://github.com/scrapface/scrapface.github.io/actions/workflows/ci.yaml/badge.svg
[deploy action]: https://github.com/scrapface/scrapface.github.io/actions/workflows/deploy.yaml/badge.svg
