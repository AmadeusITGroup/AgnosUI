---
since: 0.2.0
---

# Transition

## Service Overview

The Transition service allows to display or hide content smoothly through an animation. At its heart, a transition is a [Directive](../01-Headless/03-Directives.md) managing the visibility of inner content by attaching / detaching classes.

## In action

Creating and attaching a transition is straighforward! Simply create a transition service using the factory `createTransition` and attach the provided directive to a dom element.  
Let's see this in action by implementing a **Collapse** component:

```sample
{Collapse example:transition/collapse:129}
```

AgnosUI provides several transition functions to use (collapse vertical or horizontal, fade in/out) but you may create your own using the `createSimpleClassTransition` utility and a bit of css. Here is another example with a flip animation:

```sample
{Flip in example:transition/flip:93}
```

<p>
    When creating your own, remember to respect the user preferences and the media query <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion" target="_blank">prefers-reduced-motion</a>.
</p>

## Properties and stores

You can configure a transition using the following properties:

- **transition** `TransitionFn` : the transition function that will be run
- **visible** `boolean` : whether the element should be visible when the transition is completed
- **animation** `boolean` : whether the transition should be animated
- **animationOnInit** `boolean` : if the element is initially visible, whether the element should be animated when first displayed
- **onShown** `() => void` : function to be called when the transition is completed and the element is visible
- **onHidden** `() => void` : function to be called when the transition is completed and the element is not visible
- **onVisibleChange** `(visible: boolean) => void` : function to be called when the visible property changes

The state of the transition will include the stores:

- **visible** `boolean` : whether the element is visible or will be visible when the transition is completed
- **elementPresent** `boolean` : whether the element to be animated is present in the DOM
- **element** `HTMLElement | null` : reference to the DOM element
- **transitioning** `boolean` : whether a transition is currently running
- **shown** `boolean` : whether the element is visible and not transitioning
- **hidden** `boolean` : whether the element is not visible and not transitioning

You may play around the properties and see the stores updated with the following example:

```sample
{Transition properties and stores:transition/transition:585:noCode:noResize}
```
