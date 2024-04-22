#### Angular usage

By default, Angular provides a decorator that marks a class as an Angular directive. They are used to attach custom behavior to elements in the DOM and Directive classes can implement life-cycle hooks to influence their configuration behavior (source: Angular doc).

Agnos provides two utilities to use Agnos Directives in Angular, `[auUse]` and `[auUseMulti]`.
`[auUse]` directive takes as input a single Agnos `Directive` and takes care of execution, update and destroy of it. This thanks to the life-cycle events provided by Angular (`OnChanges`, `OnDestroy`). Similarly, `[auUseMulti]` directive takes as input an array of Agnos `Directive`.
To provide parameters, replace the corresponding directive (in the value of `[auUse]` or `[auUseMulti]`) by an array containing the directive at position 0 and its parameter at position 1.

##### Example

```sample
{Directives Usage:directives/usage:200}
```
