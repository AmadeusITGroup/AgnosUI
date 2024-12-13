---
since: 0.7.0
---

# Navigation Manager

## Service Overview

This service simplifies keyboard navigation for a set of DOM elements. It exposes a factory function `createNavManager()` that creates an object containing:

- `elementsInDomOrder$` - a store containing the navigable elements in DOM order
- `directive` - a directive to use on some DOM elements, both to add the keydown event handler and to specify which elements should be managed (either by directly putting the directive on those elements, or by putting the directive on a parent element and specifying which child elements should be included through a `selector` function via `NavManagerItemConfig`)
- Utilities to navigate the items:
  - `refreshElements` - method to manually refresh the `elementsInDomOrder$` to capture the latest state of DOM
  - `focusIndex` - method to focus the element at the given index within `elementsInDomOrder$`
  - `focusFirst` - method to focus the first element in the DOM order
  - `focusLast` - method to focus the last element in the DOM order
  - `focusPrevious` - method to focus the previous element in the DOM order
  - `focusNext` - method to focus the next element in the DOM order
  - `focusFirstLeft` - method to focus the element at the left-end of the list (identical to `focusFirst` in a LTR configuration and to `focusLast` in a RTL configuration)
  - `focusFirstRight` - method to focus the element at the right-end of the list (identical to `focusLast` in a LTR configuration and to `focusfirst` in a RTL configuration)
  - `focusLeft` - method to focus the next focusable element to the left of the currently focused element (identical to `focusPrevious` in a LTR configuration and to `focusNext` in a RTL configuration)
  - `focusRight` - method to focus the next focusable element to the right of the currently focused element (identical to `focusNext` in a LTR configuration and to `focusPrevious` in a RTL configuration)

## Usage

Whenever you want to custom keyboard navigation within a defined set of DOM elements you can simply:

- use the factory function to create the NavManager object
- use the `NavManagerItemConfig` to configure the NavManger by setting:
  - `keys` - a map of key handlers. The key in the map should match the key event (for example, `"ArrowLeft"` or `"Ctrl+PageDown"`). The value in the map is the corresponding key handler. (for example, the `focusNext` or `focusPrevious` function returned by `createNavManager`)
  - `selector` - a function returning DOM elements to include in the navigation manager. It receives as a parameter the DOM element on which the navigation manager directive is used. If not specified, the default selector function only returns the element on which the navigation manager directive is used
- use the `NavManager.directive` on the DOM elements that you want to navigate over, or on the parent element that contains the children elements specified by the `selector`

> **For the screen readers like NVDA make sure that the elements that you want to navigate through are _interactive_ (for example, put type="button" on the button element), so that NVDA switches from the _browse_ mode to _focus_ mode. Switch manually to _focus_ mode (by default: Ins + Space) if it doesn't work, as sometimes heuristics doesn't detect the interactive element properly.**

### In action

```sample
{NavManager:navManager/navManager:255}
```

### Using selector

```sample
{NavManager:navManager/navManagerWithSelector:255}
```
