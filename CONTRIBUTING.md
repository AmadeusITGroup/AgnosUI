# Contributing to AgnosUI

We are always looking for quality contributions and will be happy to accept your Pull Requests.

AgnosUI is a powerful library that provides configurable Typescript component factories, headless wrappers and ready-to-use components compliant to the [CSS Bootstrap design](https://getbootstrap.com/).

The [Open Source Guides](https://opensource.guide/) website has a collection of resources for individuals, communities, and companies. These resources help people who want to learn how to run and contribute to open source projects. Contributors and people new to open source alike will find the following guides especially useful:

- [How to Contribute to Open Source](https://opensource.guide/how-to-contribute/)
- [Building Welcoming Communities](https://opensource.guide/building-community/)

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

## Getting Started

If you want to play with AgnosUI on your own machine:

- Clone the project
- Run `npm install`
- Run `npm run dev`
- Open the page http://localhost:4000

To know more about the different commands you can run in local, please check the [DEVELOPER](DEVELOPER.md) documentation.
