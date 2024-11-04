> **widgetsConfigFactory**\<`Config`\>(`widgetsConfigInjectionToken`): `object`

A factory to create the utilities to allow widgets to be context-aware.

It can be used when extending the core and creating new widgets.

## Type Parameters

• **Config** *extends* `object` = [`WidgetsConfig`](../type-aliases/WidgetsConfig.md)

The type of the widgets configuration object.

## Parameters

• **widgetsConfigInjectionToken**: [`InjectionToken`](https://angular.dev/api/core/InjectionToken)\<[`WidgetsConfigStore`](../type-aliases/WidgetsConfigStore.md)\<`Config`\>\> = `...`

the widgets config injection token

## Returns

`object`

the utilities to create / manage widgets and contexts

### callWidgetFactory()

> **callWidgetFactory**: \<`W`\>(`params`) => [`AngularWidget`](../interfaces/AngularWidget.md)\<`W`\>

Creates and initializes a widget using the provided factory and configuration options.

#### Type Parameters

• **W** *extends* [`Widget`](../interfaces/Widget.md)\<`object`, `object`, `object`, `object`\>

The type of the widget.

#### Parameters

• **params**

The parameters for creating the widget.

• **params.afterInit?**

A callback function to be called after the widget is initialized.

• **params.defaultConfig?**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\> \| [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<`undefined` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\>\> = `{}`

The default configuration for the widget.

• **params.events?**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>, keyof [`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\> & \`on$\{string\}\`\>\>

The event handlers for the widget.

• **params.factory**: [`WidgetFactory`](../type-aliases/WidgetFactory.md)\<`W`\>

The factory function to create the widget.

• **params.slotChildren?**

A function that returns the slot children for the widget.

• **params.slotTemplates?**

A function that returns the slot templates for the widget.

• **params.widgetName?**: `null` \| keyof `Config` = `null`

The name of the widget configuration to inject, if any.

#### Returns

[`AngularWidget`](../interfaces/AngularWidget.md)\<`W`\>

The initialized widget.

### injectWidgetConfig()

> **injectWidgetConfig**: \<`N`\>(`widgetName`) => [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<`undefined` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Config`\[`N`\]\>\>

Injects the configuration for a specific widget.

#### Type Parameters

• **N** *extends* `string` \| `number` \| `symbol`

The key of the widget configuration in the `Config` type.

#### Parameters

• **widgetName**: `N`

The name of the widget whose configuration is to be injected.

#### Returns

[`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<`undefined` \| [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Config`\[`N`\]\>\>

A `ReadableSignal` that provides a partial configuration of the specified widget or `undefined` if the configuration is not available.

### injectWidgetsConfig

> **injectWidgetsConfig**: `InjectWidgetsConfig`\<`Config`\>

### provideWidgetsConfig()

> **provideWidgetsConfig**: (`adaptParentConfig`?) => [`FactoryProvider`](https://angular.dev/api/core/FactoryProvider)

Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
the parent configuration.

#### Parameters

• **adaptParentConfig?**: `AdaptParentConfig`\<`Config`\>

optional function that receives a 2-levels copy of the widgets default configuration
defined at an upper level in the Angular dependency injection system (or an empty object if there is none) and returns the widgets
default configuration to be used.
It is called only if the configuration is needed, and was not yet computed for the current value of the parent configuration.
It is called in a tansu reactive context, so it can use any tansu store and will be called again if those stores change.
It is also called in an Angular injection context, so it can call the Angular inject function to get and use dependencies from the
Angular dependency injection system.

#### Returns

[`FactoryProvider`](https://angular.dev/api/core/FactoryProvider)

DI provider to be included a list of `providers` (for example at a component level or
any other level of the Angular dependency injection system)

#### Remarks

The configuration is computed from the parent configuration in two steps:
- first step: the parent configuration is transformed by the adaptParentConfig function (if specified).
If adaptParentConfig is not specified, this step is skipped.
- second step: the configuration from step 1 is merged (2-levels deep) with the own$ store. The own$ store initially contains
an empty object (i.e. no property from the parent is overridden). It can be changed by calling set on the store returned by
injectWidgetsConfig.

#### Example

```typescript
@Component({
  // ...
  providers: [
    provideWidgetsConfig((parentConfig) => {
      // first step configuration: transforms the parent configuration
      parentConfig.rating = parentConfig.rating ?? {};
      parentConfig.rating.className = `${parentConfig.rating.className ?? ''} my-rating-extra-class`
      return parentConfig;
    })
  ]
})
class MyComponent {
  widgetsConfig = injectWidgetsConfig();
  constructor() {
    this.widgetsConfig.set({
      // second step configuration: overrides the parent configuration
      rating: {
        slotStar: MyCustomSlotStar
      }
    });
  }
  // ...
}
```

### widgetsConfigInjectionToken

> **widgetsConfigInjectionToken**: [`InjectionToken`](https://angular.dev/api/core/InjectionToken)\<[`WidgetsConfigStore`](../type-aliases/WidgetsConfigStore.md)\<`Config`\>\>

Dependency Injection token which can be used to provide or inject the widgets default configuration store.

## Defined in

[angular/headless/src/config.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/18b234644d4b989f79e351a6664a00783b1ddfdd/angular/headless/src/config.ts#L25)