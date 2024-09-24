<h1 align="center">AgnosUI - Where web components shine</h1>

<p align="center">
  <img src="demo/static/agnosui-logo.svg" alt="angular-logo" width="120px" height="120px"/>
</p>

[![Build Status](https://github.com/AmadeusITGroup/AgnosUI/workflows/ci/badge.svg?branch=main)](https://github.com/AmadeusITGroup/AgnosUI/actions)
[![codecov](https://codecov.io/gh/AmadeusITGroup/AgnosUI/branch/main/graph/badge.svg)](https://codecov.io/gh/AmadeusITGroup/AgnosUI)

## Introduction

AgnosUI is a powerful library that provides configurable Typescript component factories, headless wrappers and ready-to-use components compliant to the [CSS Bootstrap design](https://getbootstrap.com/). Inspired by the success of [ng-bootstrap](https://ng-bootstrap.github.io/), AgnosUI takes the concept a step further by offering components that can seamlessly integrate with any front-end framework of your choice. With support for popular frameworks like [Angular](https://angular.io/), [React](https://react.dev/), and [Svelte](https://svelte.dev/), AgnosUI allows you to effortlessly create consistent and visually appealing UI components across your projects.

Feel free to explore the [demo site](https://amadeusitgroup.github.io/AgnosUI/latest/) to see AgnosUI's capabilities.

## Key Characteristics

1. **Framework Agnostic Components**: AgnosUI's component architecture revolves around a framework-agnostic core. Each component is implemented in this core, focusing on its model (data) and the methods required to manipulate this data. This abstraction allows developers to create components independently of any specific framework, facilitating integration into various projects.

2. **Extensive Framework Support**: AgnosUI currently offers support for three widely-used front-end frameworks: Angular, React, and Svelte. This diverse compatibility ensures that developers can leverage AgnosUI's components seamlessly across projects, irrespective of the chosen framework.

3. **Adapters for Each Framework**: To achieve compatibility with different front-end frameworks, each component in AgnosUI has an adapter for every supported framework. These adapters play a pivotal role in building the component's UI by:

   - Constructing the appropriate markup based on the core data.
   - Connecting user actions to the corresponding core methods.
   - Listening for any change to the model and automatically triggering re-renders of the markup.

4. **Flexible Component Customization**: AgnosUI allows developers to configure and override any component props at any point within the component subtree. This flexibility enables extensive customization possibilities, empowering developers to tailor the components to suit their specific project requirements.

5. **Thorough Testing**: The core of AgnosUI undergoes comprehensive unit testing using [Vitest](https://vitest.dev/), ensuring its independence from any specific framework. Additionally, rigorous end-to-end tests are conducted with [Playwright](https://playwright.dev/) across different frameworks and browsers (Chromium, Firefox, Webkit). As the markup remains consistent for all frameworks, these tests are inherently framework-agnostic, guaranteeing robust and reliable component functionalities.

## Advantages

1. **Consistent User Experience**: AgnosUI's adapter-based approach ensures a uniform user experience across all supported frameworks. Any fix or new feature implemented at the core level automatically propagate to all adapters, minimizing discrepancies between frameworks.

2. **Functionality Assurance**: With a strong focus on testing, AgnosUI guarantees consistent functionalities between frameworks. This assurance is invaluable to developers, as it simplifies development and enables them to create components with confidence.

## Getting Started

To start using AgnosUI in your project, follow the instructions in the [Installation Guide](INSTALLATION.md). For detailed documentation on each component and its usage, refer to the [Documentation](https://amadeusitgroup.github.io/AgnosUI/latest/).

## Contributing

We welcome contributions from the community to make AgnosUI even better. Please read our [Contribution Guidelines](CONTRIBUTING.md) to get started.

## License

AgnosUI is released under the [MIT License](LICENSE).

---
