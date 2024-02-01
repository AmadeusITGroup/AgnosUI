# Features

## Agnostic core

A framework-agnostic core of widget factories that provide reactive models and APIs to drive the data. These concepts are deeply explained in the [Introduction](00-Introduction.md) and [Headless](../01-Headless/00-Introduction.md).

## Headless widgets

Each widget is delivered in headless mode in Angular, React and Svelte using the same factory, but you can also use sthese factories for other JS framework of your choice, with a bit work work to create adapters.
You can use widgets with any front-end CSS framework.
This approach frees you from the complexity of widget logic, enabling you to concentrate on making your design stand out.

## Accessible

Widgets are designed with a strong emphasis on accessibility. We adhere to the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag) and established design patterns, by providing keyboard navigation, aria attributes and focus handlers; features are available in headless components, and rigorously tested in the bootstrap version of each component.

## Highly configurable

Widgets offer a multitude of properties and access points that allow for customization of their behavior, appearance, and user experience. These attributes can be uniquely configured for each widget instance at any given time.

## Consistency

Core is fully tested to ensure consistent functionality across different framework implementations of the widgets. Additionally, we maintain uniformity in the markup used by each framework’s widget implementation

## Bootstrap CSS widgets

Bootstrap CSS widgets are available for Angular, React and Svelte in separated packages.
