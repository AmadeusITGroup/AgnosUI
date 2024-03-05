# Resize Observer

## Service Overview

This service exports functionality related to observing resized elements within a web application. It exposes a factory function, `createResizeObserver()` that creates an object containing one readable signal with the real time **dimensions** of the observed element and a **directive** which will be applied on the HTML element to observe.

### `createResizeObserver` Factory

`createResizeObserver` is a factory function that creates an object providing:

- `dimensions$` Readable Signal providing the real time **dimensions** of the observed element. The type of the object is _ResizeObserverEntry_. See the [MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry)

- `directive` - a directive to be applied on the html element to observe. The element to observe can be passed as argument to the directive function in case it cannot be applied directly on the html element.

## Usage

Whenever you want to listen to dimensions changes of an element of the DOM, you can simply:

- use the factory function to create the object containing the **signal** and the **directive**.
- use the directive to set the element to be observed for resizing
- use `dimensions$` signal and `subscribe` to it.

### In action

```sample
{ResizeObserver:resizeObserver/resizeObserver:500}
```

### Example Usage - using directive as method

Use the directive as method to set the element to listen.

```typescript
import {createResizeObserver} from '@agnos-ui/core';
const {directive, dimensions$} = createResizeObserver();
const resizableElement = document.querySelector('div.main:nth-child(2)');
const directiveApplied = directive(resizableElement);
const unsubscribe = dimensions$.subscribe((dimensions) => {
	console.log(`Resizable element width: ${dimensions.contentRect?.width}`);
});
// Cleanup
unsubscribe();
directiveApplied.destroy?.();
```
