#### React usage

In React, DOM nodes are accessed via `Refs`. Agnos takes advantage of `RefCallback` to assign an Agnos `Directive` to a DOM element, and use the `ref.current` to initialize the directive, update and destroy it.

It is done by using the custom hook `useDirective`, that takes as parameters the directive itself and an optional configuration.  
It returns the React `ref` and potentially other attributes. Those other attributes only matter / are used when Server-Side Rendering is enabled.

Note that `useDirective`, as a React hook, holds the same constraints as regular React hooks (for instance cannot be inside a loop or conditional block).

##### Example

```sample
{Directives Usage:directives/usage:200}
```
