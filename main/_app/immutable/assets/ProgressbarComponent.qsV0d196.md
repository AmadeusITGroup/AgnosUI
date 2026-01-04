Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L89)

ProgressbarComponent is a UI component that extends the BaseWidgetDirective
to create a customizable progress bar widget. It provides various inputs
to configure the appearance and behavior of the progress bar.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ProgressbarWidget`](../type-aliases/ProgressbarWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L150)

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

***

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L95)

The aria label.

#### Default Value

`'Progressbar'`

***

### ariaValueTextFn

> `readonly` **ariaValueTextFn**: `InputSignal`\<(`value`, `minimum`, `maximum`) => `string` \| `undefined` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L170)

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

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L128)

Label of the progress.

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L123)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### height

> `readonly` **height**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L142)

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L109)

The maximum value.

#### Default Value

`100`

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L102)

The minimum value.

#### Default Value

`0`

***

### striped

> `readonly` **striped**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L157)

If `true`, shows a striped progressbar.

#### Default Value

`false`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L134)

Global template for the Progressbar.

***

### type

> `readonly` **type**: `InputSignal`\<[`BSContextualClass`](../type-aliases/BSContextualClass.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L175)

Type of the progressbar, following bootstrap types.

***

### value

> `readonly` **value**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L116)

The current value.

#### Default Value

`0`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/headless/src/utils/widget.ts#L144)

Retrieves the widget api

##### Returns

`W`\[`"api"`\]

the widget api

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

***

### directives

#### Get Signature

> **get** **directives**(): `W`\[`"directives"`\]

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/headless/src/utils/widget.ts#L160)

Retrieves the widget directives

##### Returns

`W`\[`"directives"`\]

the widget directives

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`directives`](BaseWidgetDirective.md#directives)

***

### state

#### Get Signature

> **get** **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/0d986b5e0578a13e5314a6d877c347394c887efc/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
