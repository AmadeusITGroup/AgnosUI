## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ProgressbarWidget`](../type-aliases/ProgressbarWidget.md)\>

## Constructors

### new ProgressbarComponent()

> **new ProgressbarComponent**(): [`ProgressbarComponent`](ProgressbarComponent.md)

#### Returns

[`ProgressbarComponent`](ProgressbarComponent.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L165)

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:135](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L135)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

The aria label.

#### Default Value

`'Progressbar'`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:79](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L79)

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

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L155)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>

Label of the progress.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:112](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L112)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L107)

***

### height

> **height**: `undefined` \| `string`

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L127)

***

### max

> **max**: `undefined` \| `number`

The maximum value.

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L93)

***

### min

> **min**: `undefined` \| `number`

The minimum value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L86)

***

### slotChildren?

> `optional` **slotChildren**: [`TemplateRef`](https://angular.dev/api/core/TemplateRef)\<`void`\>

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:163](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L163)

***

### slotDefaultFromContent

> **slotDefaultFromContent**: `undefined` \| [`ProgressbarBodyDirective`](ProgressbarBodyDirective.md)

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L114)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`ProgressbarStructureDirective`](ProgressbarStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:120](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L120)

***

### striped

> **striped**: `undefined` \| `boolean`

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L142)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>

Global template for the Progressbar.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L119)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the progressbar, following bootstrap types.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L160)

***

### value

> **value**: `undefined` \| `number`

The current value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L100)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

Retrieves the widget api

#### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/headless/src/utils/widget.ts#L134)

***

### directives

> `get` **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

#### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/headless/src/utils/widget.ts#L150)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular Signal

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/headless/src/utils/widget.ts#L142)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/headless/src/utils/widget.ts#L165)

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

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/fc966aeb8a2ed1982a7a07c6ae55bd483463de8d/angular/headless/src/utils/widget.ts#L160)
