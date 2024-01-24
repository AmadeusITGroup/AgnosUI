# Introduction to Headless

A headless component is a design pattern where the component applies a separation of concerns between the logic (or "head") and the user interface (or "body").

The “headless” part refers to the logic of the component, which is decoupled from its visual representation. This means that the component doesn’t have a user interface, but it does have functionality and exposes actions (APIs), states, directives but keeps internally their implementation.

Leveraging its core, AgnosUI provides headless components across various frameworks. These components not only share the core API but also adhere to the best practices and implementation strategies specific to each framework. This ensures seamless integration and optimal performance.

## Anatomy of a Widget Creation

AgnosUI includes pre-built widgets for supported frameworks. To use these widgets directly, you may not need to dive deeply into this section, except for understanding `directives`.

Creating a new widget with the core typically involves the following base code:

```typescript
const {patch, stores, directives, actions, api} = create[WidgetName](props);
```

Let's break down the components.

### props

`props` contain the essential values for the widget, received through attributes.

As an example, consider a rating widget requiring the value prop:

```typescript
const widget = createRating({value: 2});
```

Which is used in the HTML as follows:

```html
<Rating value="{2}" />
```

`props` may also include functions beginning with `on...`. These are specific methods called when a prop changes. For instance, in the rating widget, you can provide the `onRatingChange` method to be invoked every time the rating value changes, with the new value.

> - Every `prop` comes with a default value.
> - In all supported frameworks, these default prop values are customizable at any level within the component subtrees. The method of injecting these configurations is specific to the framework overseeing these component trees. Additional details can be found on [the dedicated page](01-Configuration.md).

### patch

The `patch` function receives a partial of the props parameters, allowing modification of the initial props provided to the widget.

### stores

List of Tansu stores showing the widget's current state.

or example, in a rating widget, you'll find stores such as `rating$` and `visibleRating$`.

- `rating$`: holds the current numeric value of the rating.

- `visibleRating$`: holds the value displayed in the UI. It may differ from `rating$` during interactions like hovering, showcasing real-time visual changes.

Each store can be subscribed to or integrated into the UI framework system.

> `state$` is a persistent store in all widgets, grouping all other store values together. Depending on the framework or use case, it might be more convenient to use individual stores or the global `state$`.

### directives

`directives` are specific functions used to apply behaviors to HTML elements, strictly following [actions Svelte specifications](https://svelte.dev/docs/svelte-action).

These must be applied to the appropriate elements in the UI to ensure correct behavior.

Refer to the [dedicated section](03-Directives.md) for more details.

### actions

`actions` contain functions designed to be directly plugged into the UI, such as `click` or `hover` in the rating widget, connected to specific HTML element events.

### api

`api` includes functions for programmatically changing the widget's state. Unlike the previous section, these functions are not specifically designed to be plugged into the UI.
