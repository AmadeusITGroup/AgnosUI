> **widgetsConfigFactory**\<`Config`\>(`WidgetsConfigContext`): `object`

Defined in: [react/headless/src/config.tsx:25](https://github.com/AmadeusITGroup/AgnosUI/blob/af83623f0973f356cb686181b2d6a3ed684f8411/react/headless/src/config.tsx#L25)

A factory to create the use functions and react component to allow widgets to be context-aware.

It can be used when extending the core and creating new widgets.

## Type Parameters

### Config

`Config` *extends* [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `object`\> = [`WidgetsConfig`](../type-aliases/WidgetsConfig.md)

## Parameters

### WidgetsConfigContext

`Context`\<`undefined` \| [`WidgetsConfigStore`](../type-aliases/WidgetsConfigStore.md)\<`Config`\>\> = `...`

the widgets config context

## Returns

the use functions and react component

### useWidget()

> **useWidget**: \<`W`\>(`factory`, `props?`, `defaultProps?`) => [`WidgetSlotContext`](../interfaces/WidgetSlotContext.md)\<`W`\>

Create and attach an agnos-ui/core widget to the current react component.

#### Type Parameters

##### W

`W` *extends* [`Widget`](../interfaces/Widget.md)\<`object`, `object`, `object`, `object`\>

#### Parameters

##### factory

[`WidgetFactory`](../type-aliases/WidgetFactory.md)\<`W`\>

the widget factory

##### props?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\>

the widget props

##### defaultProps?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\>

the default widget props

#### Returns

[`WidgetSlotContext`](../interfaces/WidgetSlotContext.md)\<`W`\>

the state, api and directives to track and interact with the widget

### useWidgetContext()

> **useWidgetContext**: \<`Props`\>(`widgetName?`, `defaultConfig?`) => [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Props`\>\>

React hook that returns the widgets default configuration store.

#### Type Parameters

##### Props

`Props` *extends* `object`

#### Parameters

##### widgetName?

`string`

the name of the widget to get the configuration for

##### defaultConfig?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Props`\>

the default configuration of the widget

#### Returns

[`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Props`\>\>

the widgets default configuration store

### WidgetsConfigContext

> **WidgetsConfigContext**: `Context`\<`undefined` \| [`WidgetsConfigStore`](../type-aliases/WidgetsConfigStore.md)\<`Config`\>\>

React context which can be used to provide or consume the widgets default configuration store.

### WidgetsDefaultConfig()

> **WidgetsDefaultConfig**: (`componentInputs`) => `Element`

React component that provides in the React context (for all AgnosUI descendant widgets) a new widgets default configuration
store that inherits from any widgets default configuration store already defined at an upper level in the React context hierarchy.
It contains its own set of widgets configuration properties that override the same properties form the parent configuration.

#### Parameters

##### componentInputs

`DefaultConfigInput`\<`Config`\>

the react component inputs

#### Returns

`Element`

the resulting widgets default configuration store, which contains 3 additional properties that are stores:
parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).
The resulting store is writable, its set function is actually the set function of the own$ store.

#### Remarks

The configuration is computed from the parent configuration in two steps:
- first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
If adaptParentConfig is not specified, this step is skipped.
- second step: the configuration from step 1 is merged (2-levels deep) with the properties of the component.

#### Example

```tsx
<WidgetsDefaultConfig
  adaptParentConfig={(parentConfig) => {
    parentConfig.rating = parentConfig.rating ?? {};
    parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
    return parentConfig;
  }}
  rating={{slotStar: MyCustomSlotStar}}
/>
```
