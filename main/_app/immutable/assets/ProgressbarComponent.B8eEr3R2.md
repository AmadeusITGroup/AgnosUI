ProgressbarComponent is a UI component that extends the BaseWidgetDirective
to create a customizable progress bar widget. It provides various inputs
to configure the appearance and behavior of the progress bar.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ProgressbarWidget`](../type-aliases/ProgressbarWidget.md)\>

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L153)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

The aria label.

#### Default Value

`'Progressbar'`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:97](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L97)

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

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L173)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>

Label of the progress.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L130)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L125)

***

### height

> **height**: `undefined` \| `string`

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L145)

***

### max

> **max**: `undefined` \| `number`

The maximum value.

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L111)

***

### min

> **min**: `undefined` \| `number`

The minimum value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:104](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L104)

***

### striped

> **striped**: `undefined` \| `boolean`

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L160)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>

Global template for the Progressbar.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L137)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the progressbar, following bootstrap types.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L178)

***

### value

> **value**: `undefined` \| `number`

The current value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:118](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L118)

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/headless/src/utils/widget.ts#L140)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

#### Defined in

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/headless/src/utils/widget.ts#L156)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/798fc6642e7e4035696c9e316b617140e28c5f31/angular/headless/src/utils/widget.ts#L148)
