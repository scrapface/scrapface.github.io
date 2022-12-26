# [Scrapface][repo] &middot; [![GitHub license]](./LICENSE) ![CI Action] ![Deploy Action]

<!-- Table of Contents -->

- [Installation](#installation)
- [Development](#development)
  - [Setup](#setup)
  - [Commands](#commands)
- [License](#license)

## Installation

You can download the latest version of Scrapface for your corresponding OS from the [releases page][releases].

## Development

### Setup

The requirements are:

- [Node.js]
- [Yarn]
- [Rust] & [Tauri]

1. Clone the repository
   ```shell
   git clone https://github.com/scrapface/scrapface.github.io.git
   ```

2. Install the dependencies
   ```shell
   yarn
   ```
   
3. Optionally, you can install playwright to run the e2e tests
   ```shell
   npx playwright install --with-deps
   ```

### Commands

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

[releases]: https://github.com/scrapface/app/releases/latest
[repo]: https://github.com/scrapface/app

<!-- Shields.io links -->

[github license]: https://img.shields.io/badge/license-MIT-blue.svg
[ci action]: https://github.com/scrapface/app/actions/workflows/ci.yaml/badge.svg
[deploy action]: https://github.com/scrapface/app/actions/workflows/release.yaml/badge.svg
