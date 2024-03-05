# Directives

## Overview

Directives in AgnosUI are inspired by the **actions** in Svelte. These directives are element-level lifecycle functions that are executed when the element is created. They are updated (if an update function is provided) when a parameter changes, and finally, they are executed when the element is destroyed.
These directives are typically used to add custom event handlers. For instance, core services like [focus track](../04-Services/01-Focustrack.md) and [floating ui](../04-Services/03-Floating-UI.md) create directives that are utilized by components such as [Select](../components/select/examples).

## Usage

The usage of this function is dependent on the JavaScript framework (if any) that the application utilizes. For instance, in this guide, we are using simple TypeScript without any specific framework.

### How to create a directive

A directive is a function that takes as input an `HTMLElement` and an optional parameter, for example an object representing a configuration.
This function will execute a first time when the directive is applied to an element (usually when the DOM element is created) and either it returns `void`, or 2 optional functions:

- `update` function, called when the context changed and you need either to update the directive configuration or to re-execute partially the original function or modify some internal state of the directive.
- `destroy` function, used to remove eventual listeners, subscriptions or any reactive objects created by the directive. This function is usually called when the DOM element on which you applied the directive gets removed from the DOM.

```typescript
const createSampleDirective: Directive<string> = (element: HTMLElement, text: string) => {
	console.log('Directive has been executed on node ', element.id);
	const clickListener = (event: Event) => {
		console.log(text, event.target);
	};
	element.addEventListener('click', clickListener);
	return {
		update: (newText) => (text = newText),
		destroy: () => {
			element.removeEventListener('click', clickListener);
			console.log('Destroy function executed ', element.id);
		},
	};
};
```

This example shows a very simple directive that creates an event listener on `click` events that happen on the HTML element and then print the parameter `text` in the console, along with the clicked target.

Both `update` and `destroy` functions are provided by the directive, as following:

- `update`: gives a way to modify the original text to something new, when the context changes (see in the next section).
- `destroy`: remove the previously created listener, so that you don't bloat the main thread with unused listeners.

### How to use a directive

Considering this HTML page, in which you have a `div` container `focus-element` that includes 2 `button`, an input text `clickText` and another `button` that removes the container.

```html
<div id="content">
	<div id="focus-element">
		<button>button 1</button>
		<button>button 2</button>
	</div>
	<hr />
	<input id="clickText" type="text" />
	<hr />
	<button onclick="document.getElementById('focus-element').remove()">remove dom element</button>
</div>
```

To use the directive in vanilla TS you need the following steps:

1.  Create the directive on a DOM element. In this case, our elementwill be the `focus-element` container.

    ```typescript
    const trackElement = document.getElementById('focus-element');
    const focusElementDirective = createSampleDirective(trackElement, 'focus-element click');
    ```

    When the browser loads, you will get the following log, since the directive executes a first time and it creates its event listener.

    ```
    Directive has been executed on node focus-element
    ```

    If you click on `button 1`, the listener triggers `clickListener` function and you get a log into the console:

    ```
    focus element clicked <button>​button 1​</button>​
    ```

    Same if you click on `button 2`, since it also belongs to the element `focus-element` on which we applied the directive.

    ```
    focus element clicked <button>​button 2</button>​
    ```

Changing the input does not change anything, because the `update` function has no bindings and it is never called. To solve it, we need the next step.

2.  Observe context changes and call the `update` function accordingly. For example, we want to change the text to the value of the `clickText` input when it changes.

    ```typescript
    const input = document.getElementById('clickText');
    input.addEventListener('change', (event) => {
    	focusElementDirective?.update(event.target.value);
    });
    ```

    Now we bound the directive `update` function to a change event on the input `clickText`.
    Type `Update has been called!` in the input and then click again on `button 1`, you get:

    ```
    Update has been called! <button>​button 1</button>​
    ```

    The directive has been correctly updated according to the context change.
    The last life-cycle event to implement will be the destroy.

3.  Clean up when the `focus-element` gets remove from the DOM. This can be done for example using a `MutationObserver` on the parent DOM element.

    ```typescript
    const cleanup = (mutations: MutationRecord[]) => {
    	mutations.forEach((mutation) => {
    		for (let entry of mutation.removedNodes.entries()) {
    			if (entry.includes(trackElement)) {
    				focusElementDirective?.destroy();
    			}
    		}
    	});
    };
    const observer = new MutationObserver(cleanup);
    observer.observe(document.getElementById('content'), {childList: true});
    ```

    Click on `remove dom element`, that remove completely the `focus-element` container from the DOM. Last log will be printed:

    ```
    Destroy function executed  focus-element
    ```

### Frameworks usage

As seen in the previous section, a `Directive` is framework agnostic. But the way frameworks expose the DOM element and binds life-cycle events can be very different. Frameworks controls life-cycle events of the DOM elements, in particular initialization, updates and destroy.

The headless libraries of AgnosUI contain adapters to bind directives in the correct way, so that the corresponding events are called at the right moment benefiting from framework features.

<!-- <framework-specific src="Directives.md"> -->

[Directives in Angular](../../angular/docs/Directives.md),
[Directives in React](../../react/docs/Directives.md),
[Directives in Svelte](../../svelte/docs/Directives.md)

<!-- </framework-specific> -->

## Advanced

### Merge directives

If you are using Svelte, you can have multiple directives by using multiple time the `use` directive. On other frameworks, this is not the case.
Agnos has a utility `mergeDirectives` to merge directives into one, with a limitation on the argument:
all directives receive the same argument upon initialization and update.
Directives are created and updated in the same order as they appear in the arguments list,
they are destroyed in the reverse order.
All calls to the directives (to create, update and destroy them) are wrapped in a call to the batch function of tansu

Use directly the `mergeDirectives` function in an Angular component to merge directives are pass them as input to the Angular directive `auUse`. For React, there is a version `useDirectives` instead of the singular one to manage this use case.
