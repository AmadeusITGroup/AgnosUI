> **widgetsConfigFactory**\<`Config`\>(`widgetsConfigInjectionToken`): `object`

Defined in: [angular/headless/src/config.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/b4ffcb25ccc470cd8d529a30c034654375c6ce71/angular/headless/src/config.ts#L28)

A factory to create the utilities to allow widgets to be context-aware.

It can be used when extending the core and creating new widgets.

## Type Parameters

### Config

`Config` *extends* `object` = [`WidgetsConfig`](../type-aliases/WidgetsConfig.md)

The type of the widgets configuration object.

## Parameters

### widgetsConfigInjectionToken

[`InjectionToken`](https://angular.dev/api/core/InjectionToken)\<[`WidgetsConfigStore`](../type-aliases/WidgetsConfigStore.md)\<`Config`\>\> = `...`

the widgets config injection token

## Returns

the utilities to create / manage widgets and contexts

### callWidgetFactory()

> **callWidgetFactory**: \<`W`\>(`factory`, `options?`) => [`AngularWidget`](../interfaces/AngularWidget.md)\<`W`\>

Creates and initializes a widget using the provided factory and configuration options.

The resulting widget can be easily hooked into the lifecycle of an Angular component through [BaseWidgetDirective](../classes/BaseWidgetDirective.md).

#### Type Parameters

##### W

`W` *extends* [`Widget`](../interfaces/Widget.md)\<`object`, `object`, `object`, `object`\>

The type of the widget.

#### Parameters

##### factory

[`WidgetFactory`](../type-aliases/WidgetFactory.md)\<`W`\>

The factory function to create the widget.

##### options?

The options for creating the widget.

###### afterInit?

(`widget`) => `void`

A callback function to be called after the widget is initialized.

###### defaultConfig?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\> \| [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>\> \| `undefined`\>

The default configuration for the widget.

###### events?

[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Pick`](https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys)\<[`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\>, keyof [`WidgetProps`](../type-aliases/WidgetProps.md)\<`W`\> & `` `on${string}` ``\>\>

The event handlers for the widget.

###### slotChildren?

() => [`TemplateRef`](https://angular.dev/api/core/TemplateRef)\<`void`\> \| `undefined`

A function that returns the slot children for the widget.

###### slotTemplates?

() => \{ \[K in string \| number \| symbol as IsSlotContent\<WidgetProps\<(...)\>\[K\]\> extends 0 ? never : K\]: WidgetProps\<W\>\[K\] extends SlotContent\<U\> ? TemplateRef\<U\> \| undefined : never \}

A function that returns the slot templates for the widget.

#### Returns

[`AngularWidget`](../interfaces/AngularWidget.md)\<`W`\>

The initialized widget.

### injectWidgetConfig()

> **injectWidgetConfig**: \<`N`\>(`widgetName`) => [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Config`\[`N`\]\> \| `undefined`\>

Injects the configuration for a specific widget.

#### Type Parameters

##### N

`N` *extends* `string` \| `number` \| `symbol`

The key of the widget configuration in the `Config` type.

#### Parameters

##### widgetName

`N`

The name of the widget whose configuration is to be injected.

#### Returns

[`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`Config`\[`N`\]\> \| `undefined`\>

A `ReadableSignal` that provides a partial configuration of the specified widget or `undefined` if the configuration is not available.

### injectWidgetsConfig

> **injectWidgetsConfig**: `InjectWidgetsConfig`\<`Config`\>

Returns the widgets default configuration store that was provided in the current injection context.
Throws if the no widgets default configuration store was provided.

#### Param

values to set as soon as the config is injected

#### Remarks

This function must be called from an injection context, such as a constructor, a factory function, a field initializer or
a function used with [runInInjectionContext](https://angular.io/api/core/runInInjectionContext).

#### Returns

the widgets default configuration store.

### provideWidgetsConfig()

> **provideWidgetsConfig**: (`adaptParentConfig?`) => [`FactoryProvider`](https://angular.dev/api/core/FactoryProvider)

Creates a provider of widgets default configuration that inherits from any widgets default configuration already defined at an upper level
in the Angular dependency injection system. It contains its own set of widgets configuration properties that override the same properties form
the parent configuration.

#### Parameters

##### adaptParentConfig?

`AdaptParentConfig`\<`Config`\>

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
[injectWidgetsConfig](../variables/injectWidgetsConfig.md).

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
