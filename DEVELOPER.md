# AgnosUI

A framework-agnostic component library.

## Organization of the repository

This is a monorepo organised with multiple npm packages:

- [`core`](core) contains the framework agnostic sources
- [`core-bootstrap`](core-bootstrap) contains framework agnostic utilities / overrides for bootstrap support

Each framework will include the following packages:

- `headless` delivering the headless wrappers to use the core components with the selected framework
- `bootstrap` delivering bootstrap-compliant implementations of the components, powered by the headless wrappers and the core components
- `demo` the demo pages showcasing examples on how to the use the above packages.

Finally, two other npm packages are available for testing purposes:

- [`base-po`](base-po) contains a base class for page objects when writing end-to-end tests with Playwright
- [`page-objects`](page-objects) contains page objects for each AgnosUI component

## Running AgnosUI locally

If you want to play with AgnosUI on your own machine:

- Clone the project
- Run `npm install`
- Use commands below

## Commands

Several commands are available in the different workspaces. In order to avoid to repeatedly enter the same thing for each workspace, the command will be run on every workspace directly. If needed, you can filter them by entering the workspace names.

For example:

- `npm run dev` will run the task `dev` on the workspaces `demo`, `angular`, `react` and `svelte`.
- `npm run dev demo svelte` will run the task `dev` on the workspaces `demo` and `svelte`.

### Run the demos

- `npm run dev` will run the servers in dev mode (workspaces : `demo`, `angular`, `react`, `svelte`).

- `npm run dev angular` runs the Angular demo on http://localhost:4200
- `npm run dev react` runs the React demo on http://localhost:3000
- `npm run dev svelte` runs the Svelte demo on http://localhost:3001

### Preview

The preview mode is used to run the servers that will serve a build version of the applications.

- `npm run preview` (workspaces : `demo`, `angular`, `react`, `svelte`).

### Unit tests

Vitest is the test runner used to run the unit tests of the core sources

- `npm run tdd`: run the TDD in watch mode (workspaces : `core`, `angular`, `eslint-plugin`).
- `npm run tdd:ui`: run the TDD in the watch mode, with a UI (workspaces : `core`, `eslint-plugin`)
- `npm run test:coverage`: run the unit tests with the coverage report (workspaces : `core`, `eslint-plugin`)

It's also possible to filter test by their pathname. For example, `npm run tdd core rating` will run the tdd task of the `core` workspace, for the `rating` only,

### End-to-end tests

The end-to-end (e2e) tests are performed with Playwright. The setup is done to run the same specs on Chromium, Firefox and Webkit, on the three demos (Angular, React and Svelte) to ensure that everything works the same in each combination.

You can use some specific keyworks to filter the tests:

- `angular`, `react` or `svelte` will select a specific framework,
- `chromium`, `firefox` or `webkit` will select a specific browser,
- Any other word will filter the tests by filename.

For example:

- `npm run e2e`: run the full e2e suite for all the browsers, all the applications,
- `npm run e2e angular`: run all the specs for Angular in all browsers,
- `npm run e2e svelte chromium`: run all the specs for Svelte in Chromium,
- `npm run e2e firefox react select`: run all the specs with the 'select' filename, for React in Firefox,
