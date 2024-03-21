---
since: 0.1.1
---

# Configuration

## Overview

We call **Configuration** the AgnosUI system to set the default state of widgets deeply in the application tree.  
This is usually referred as **context injection** and is handy to configure a part of a web application, without having to pass properties down the chain.

You can check how each framework handles this need on their respective documentation:

<ul>
    <li><a href="https://svelte.dev/docs/svelte#setcontext" target="_blank">setContext in Svelte</a></li>
    <li><a href="https://react.dev/learn/passing-data-deeply-with-context" target="_blank">passing data deeply in React</a></li>
    <li><a href="https://angular.io/guide/creating-injectable-service" target="_blank">context injection in Angular</a></li>
</ul>

The configuration is available out of the box as soon as widgets are created using the AgnosUI headless factories.  
The headless packages also provide utilities for each framework to retrieve and update widget configuration.

## In Action

One of the most use cases of configuration is setting a default config for multiple sibling widgets.  
Let's see it in action, using the Bootstrap flavour of the **Alert** component:

```sample
{Configuration:configuration/basic:278}
```

The Configuration is then used by all children with the modified state, as shown below:

```sample
{Configuration:configuration/down:278}
```
