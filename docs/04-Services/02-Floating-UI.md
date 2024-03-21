---
since: 0.1.1
---

# Floating UI

## Service Overview

The Floating UI service is designed to create a flexible and dynamic floating DOM element that can be positioned relative to a reference element. It provides a set of options for customization, including positioning configuration, auto-updating behavior, and arrow styling.

The service uses a 3rd party library called [floating UI](https://floating-ui.com/).

By leveraging the provided directives and state stores, developers can easily integrate floating UI elements into their web applications with flexibility and control.

## `createFloatingUI` factory

Use the `createFloatingUI` function to create an instance of the Floating UI service.
Pass an optional `propsConfig` parameter to customize the initial configuration.

### Configuration Options

The `propsConfig` parameter allows you to provide initial values for the following options:

- **computePositionOptions** Option for positioning the floating UI relative to the reference element. Refer to [computePosition documentation](https://floating-ui.com/docs/computeposition#options) for defaults and options.
- **autoUpdateOptions** Option for enabling auto-updating of the floating position. Refer to [autoUpdate documentation](https://floating-ui.com/docs/autoupdate#options) for defaults and options.
- **arrowOptions** Option to customize the arrow element associated, by giving the element itself and eventually a padding. Refer to [arrow documentation](https://floating-ui.com/docs/arrow#options) for defaults and options.

## Output Directives

1. **Reference Directive** Apply this directive to the reference element from which the floating UI will be positioned.

2. **Floating Directive** Apply this directive to the floating UI element. This directive includes styling updates based on the floating UI position.
3. **Arrow Directive** Apply this directive to the arrow element, if present. This directive includes styling updates based on the arrow position.

## State Stores

The Floating UI service exposes several state stores that represent different aspects of the UI position:

- `x$`: X-coordinate of the floating UI.
- `y$`: Y-coordinate of the floating UI.
- `strategy$`: Strategy used for positioning.
- `placement$`: Placement of the floating UI.
- `middlewareData$`: Additional data provided by middleware.

## Patching States

Floating UI instance includes a `patch` method that allows you to patch the configuration dynamically at runtime.

## Usage

### In Action

```sample
{FloatingUI:floatingUI/floatingUI:500}
```
