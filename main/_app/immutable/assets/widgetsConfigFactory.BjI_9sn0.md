> **widgetsConfigFactory**\<`Config`\>(`widgetsDefaultConfigKey`): `object`

Defined in: [svelte/headless/src/config.ts:26](https://github.com/AmadeusITGroup/AgnosUI/blob/78e85a442b179f4a9e716570021512bd8f236265/svelte/headless/src/config.ts#L26)

A factory to create the utilities to allow widgets to be context-aware.

It can be used when extending the core and creating new widgets.

## Type Parameters

### Config

`Config` *extends* `object` = [`WidgetsConfig`](../type-aliases/WidgetsConfig.md)

The shape of the widgets configuration object.

## Parameters

### widgetsDefaultConfigKey

`symbol` = `...`

the widgets config key

## Returns

the utilities to create / manage widgets and contexts

### callWidgetFactory()

> **callWidgetFactory**: \<`W`\>(`factory`, `options?`) => [`WidgetSlotContext`](../interfaces/WidgetSlotContext.md)\<`W`\>

Creates and initializes a widget using the provided factory and configuration options.

#### Type Parameters

##### W

`W` *extends* [`Widget`](../interfaces/Widget.md)\<`object`, `object`, `object`, `object`\>

#### Parameters

##### factory

[`WidgetFactory`](../type-aliases/WidgetFactory.md)\<`W`\>

the widget factory

##### options?

the optional options

###### defaultConfig?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\> \| [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<`undefined` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\>\>

the default configuration for the widget

###### events?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>, keyof [`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\> & `` `on${string}Change` ``\>\>

the events to be passed to the widget

###### props?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\>

the props to be passed to the widget

#### Returns

[`WidgetSlotContext`](../interfaces/WidgetSlotContext.md)\<`W`\>

the state, api and directives to track and interact with the widget

### createWidgetsDefaultConfig

> **createWidgetsDefaultConfig**: `CreateWidgetsDefaultConfig`\<`Config`\>

Creates in the Svelte context hierarchy a new widgets default configuration store that inherits from any widgets default configuration
store already defined at an upper level in the Svelte context hierarchy.
It contains its own set of widgets configuration properties that override the same properties form the parent configuration.

#### Remarks

The configuration is computed from the parent configuration in two steps:
- first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
If adaptParentConfig is not specified, this step is skipped.
- second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by this function.

#### Param

optional function that receives a 2-levels copy of the widgets default configuration
defined at an upper level in the Svelte context hierarchy (or an empty object if there is none) and returns the widgets
default configuration to be used.
It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.

#### Returns

the resulting widgets default configuration store, which contains 3 additional properties that are stores:
parent$, adaptedParent$ (containing the value computed after the first step), and own$ (that contains only overridding properties).
The resulting store is writable, its set function is actually the set function of the own$ store.

#### Example

```ts
const widgetsConfig = createWidgetsDefaultConfig((parentConfig) => {
  // first step configuration: transforms the parent configuration
  parentConfig.rating = parentConfig.rating ?? {};
  parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
  return parentConfig;
});
widgetsConfig.set({
  // second step configuration: overrides the parent configuration
  rating: {
    slotStar: MyCustomSlotStar
  }
});
```

### getContextWidgetConfig()

> **getContextWidgetConfig**: \<`N`\>(`widgetName`) => [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<`undefined` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Config`\[`N`\]\>\>

Retrieves a widgets configuration store from the Svelte context hierarchy.

#### Type Parameters

##### N

`N` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### widgetName

`N`

the name of the widget

#### Returns

[`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<`undefined` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Config`\[`N`\]\>\>

the widgets configuration store

### widgetsDefaultConfigKey

> **widgetsDefaultConfigKey**: `symbol`

Key used in the Svelte context to get or set the widgets default configuration store.
