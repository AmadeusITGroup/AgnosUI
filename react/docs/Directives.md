#### React usage

In React, DOM nodes are accessed via `Refs`. Agnos takes advantage of `RefCallback` to assign an Agnos `Directive` to a DOM element, and use the `ref.current` to initialize the directive, update and destroy it.

It is done by using the custom hook `useDirective`, that takes as parameters the directive itself and an optional configuration.

##### Example

```sample
{Directives Usage:directives/usage:200}
```
