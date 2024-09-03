---
since: 0.1.1
---

# Features

## Agnostic core

A framework-agnostic core of component factories that provide reactive models and APIs to drive the data. These concepts are deeply explained in the [Introduction](00-Introduction.md) and [Headless](../01-Headless/00-Introduction.md).

## Headless components

Each component is delivered in headless mode in Angular, React and Svelte using the same factory, but you can also use sthese factories for other JS framework of your choice, with a bit work work to create adapters.
You can use components with any front-end CSS framework.
This approach frees you from the complexity of component logic, enabling you to concentrate on making your design stand out.

## Accessible

Components are designed with a strong emphasis on accessibility. We adhere to the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag) and established design patterns, by providing keyboard navigation, aria attributes and focus handlers; features are available in headless components, and rigorously tested in the bootstrap version of each component.

## Highly configurable

Components offer a multitude of properties and access points that allow for customization of their behavior, appearance, and user experience. These attributes can be uniquely configured for each component instance at any given time.

## Consistency

Core is fully tested to ensure consistent functionality across different framework implementations of the components. Additionally, we maintain uniformity in the markup used by each framework’s component implementation

## Extented Bootstrap CSS components

Bootstrap CSS components are available for Angular, React and Svelte in separated packages with additional standalone components like slider...Read more about this [here](../03-Bootstrap-Components/00-Introduction.md).
