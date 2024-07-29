## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ProgressbarWidget`](../type-aliases/ProgressbarWidget.md)\>

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)

## Constructors

### new ProgressbarComponent()

> **new ProgressbarComponent**(): [`ProgressbarComponent`](ProgressbarComponent.md)

#### Returns

[`ProgressbarComponent`](ProgressbarComponent.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`ProgressbarWidget`](../type-aliases/ProgressbarWidget.md)\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L162)

***

### animated

> **animated**: `undefined` \| `boolean`

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L135)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

The aria label.

#### Default Value

`'Progressbar'`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L81)

***

### ariaValueTextFn

> **ariaValueTextFn**: `undefined` \| (`value`, `minimum`, `maximum`) => `undefined` \| `string`

Return the value for the 'aria-valuetext' attribute.

#### Param

current value

#### Param

minimum value

#### Param

maximum value

#### Default Value

```ts
() => undefined
```

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L155)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../type-aliases/ProgressbarContext.md)\>

Label of the progress.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L114)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L109)

***

### defaultSlots

> `readonly` **defaultSlots**: [`WritableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/WritableSignal.html)\<[`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ProgressbarProps`](../interfaces/ProgressbarProps.md)\>, [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ProgressbarProps`](../interfaces/ProgressbarProps.md)\>\>

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:74](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L74)

***

### height

> **height**: `undefined` \| `string`

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L127)

***

### max

> **max**: `undefined` \| `number`

The maximum value.

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L95)

***

### min

> **min**: `undefined` \| `number`

The minimum value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:88](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L88)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`ProgressbarStructureDirective`](ProgressbarStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L120)

***

### striped

> **striped**: `undefined` \| `boolean`

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L142)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../type-aliases/ProgressbarContext.md)\>

Global template for the Progressbar.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L119)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the progressbar, following bootstrap types.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L160)

***

### value

> **value**: `undefined` \| `number`

The current value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L102)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

#### Returns

`W`\[`"api"`\]

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L119)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L123)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L127)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

A callback method that is invoked immediately after the
default change detector has completed checking all of the directive's
content.

#### Returns

`void`

#### Implementation of

`AfterContentChecked.ngAfterContentChecked`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:171](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L171)

***

### ngOnChanges()

> **ngOnChanges**(`changes`): `void`

#### Parameters

• **changes**: `SimpleChanges`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnChanges`](BaseWidgetDirective.md#ngonchanges)

#### Defined in

[angular/headless/src/utils/widget.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L132)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/7221d318d82fe01f04dbb27146f348307885c642/angular/headless/src/utils/widget.ts#L137)
