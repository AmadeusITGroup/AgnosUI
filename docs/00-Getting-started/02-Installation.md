---
since: 0.1.1
---

# Installation

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

<ul>
  <li>Node.js: You can download and install Node.js from the <a href="https://nodejs.org/" target="_blank">official website</a></li>
</ul>

## Create a new project

If you haven't already, create a new project where you want to use AgnosUI.

## Install AgnosUI

AgnosUI provides two flavours of the components for you to choose from:

- **Headless**: The headless package contains the headless functionality of the component library. It can be used with any front-end CSS framework. It uses the core of AgnosUI which is framework agnostic.
- **Bootstrap**: The Bootstrap package builds upon the headless package to provide additional UI components styled with Bootstrap.

To install the headless part, open your project's terminal and run the following command:

```bash
{install-headless}
```

To install the bootstrap part, open your project's terminal and run the following command:

```bash
{install-bootstrap}
```

npm normally [automatically installs peer dependencies](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#peerdependencies).
In case it is configured not to install them with the [legacy-peer-deps=true](https://docs.npmjs.com/cli/v11/using-npm/config#legacy-peer-deps) option, the best is to remove this option, or you can also install peer dependencies manually:

```bash
npm install esm-env @floating-ui/dom @amadeus-it-group/tansu
```
