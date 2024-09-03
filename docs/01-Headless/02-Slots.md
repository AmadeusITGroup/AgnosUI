---
since: 0.1.1
---

# Slots

## What are Slots ?

Slots are essentially placeholders within a component that can be filled with custom content.
They provide a way to dynamically inject content into a component without affecting its original template.  
This makes it possible to create components that can be easily adapted to different scenarios without having to duplicate code or create a new component from scratch.

## Why use them ?

Slots facilitate the creation of more versatile and reusable components.
They allow developers to design components with predefined structures while leaving room for variation in content.  
This separation of structure and content enhances code reusability and promotes a cleaner, more modular codebase.

## AgnosUI Slot

AgnosUI core components include slots as **properties** prefixed by _slot_ in their states.  
This allows to specifiy the projected content in multiple manners, like simple `string`, context-aware functions, standard slots or even fully-fledged components.

To illustrate the basic usage, let's see in action how we can use a simple slot in the Bootstrap flavour of the **Alert** component:

```sample
{Slot Standard Usage:slots/usage:278}
```

## Context

Slots have access to a context, which for most cases is the component state.  
It is possible however to extend the context, which enables powerful customization. Here is an example with the Bootstrap flavour of the **Pagination** component:

```sample
{Slot Context:slots/context:220}
```

## Integration with Configuration

As explained above, AgnosUI slots are inherently properties, thus benefit from the [Configuration](01-Configuration.md).  
For instance, we may configure the _slotStructure_ of the **Alert** to use a custom component, allowing to fully customize the component.

```sample
{Slot Configuration:alert/icon:402}
```

<!-- <framework-specific src="Slots.md"> -->

## Headless Usage

AgnosUI provides utilities to manage slots for each framework, as frameworks have differences in their implementations of slots / templates / snippets.  
To learn more about the specificies of each framework, go here:

<p align="center">
    <a href="../../angular/docs/Slots.md">Slots in Angular</a>&nbsp;&nbsp;
    <a href="../../react/docs/Slots.md">Slots in React</a>&nbsp;&nbsp;
    <a href="../../svelte/docs/Slots.md">Slots in Svelte</a>
</p>
<!-- </framework-specific> -->

## Headless example

You can check out the following example, re-writing the Bootstrap flavour of the **Rating** component as readonly:

```sample
{Slot Headless:slots/headless:148}
```
