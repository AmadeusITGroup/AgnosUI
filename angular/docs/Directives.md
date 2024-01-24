#### Angular usage

By default, Angular provides a decorator that marks a class as an Angular directive. They are used to attach custom behavior to elements in the DOM and Directive classes can implement life-cycle hooks to influence their configuration behavior (source: Angular doc).

Agnos provides an utility to use Agnos Directives in Angular, `[auUse]`.
`[auUse]` directive takes as input an Agnos `Directive`, and takes care of execution, update and destroy of it. This thanks to the life-cycle events provided by Angular (`OnChanges`, `OnDestroy`).
Unfortunately, a directive cannot take additional properties, hence parameters are given through a second input, `[auUseParams]`, which type is the same as the second argument of the Agnos Directive.
During the `OnChanges` hook, the directive will be executed for the first time (if the reference of the `Directive`) or the Directive `update` function (if provided) will be executed with the new `auUseParams` input.

##### Example

```sample
{Directives Usage:directives/usage:200}
```
