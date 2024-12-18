ProgressbarComponent is a UI component that extends the BaseWidgetDirective
to create a customizable progress bar widget. It provides various inputs
to configure the appearance and behavior of the progress bar.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ProgressbarWidget`](../type-aliases/ProgressbarWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L150)

***

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| `string`\>

The aria label.

#### Default Value

`'Progressbar'`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L95)

***

### ariaValueTextFn

> `readonly` **ariaValueTextFn**: `InputSignal`\<`undefined` \| (`value`, `minimum`, `maximum`) => `undefined` \| `string`\>

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

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L170)

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>\>

Label of the progress.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L128)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L123)

***

### height

> `readonly` **height**: `InputSignal`\<`undefined` \| `string`\>

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L142)

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The maximum value.

#### Default Value

`100`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L109)

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The minimum value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L102)

***

### striped

> `readonly` **striped**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, shows a striped progressbar.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L157)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>\>

Global template for the Progressbar.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L134)

***

### type

> `readonly` **type**: `InputSignal`\<`undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)\>

Type of the progressbar, following bootstrap types.

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L175)

***

### value

> `readonly` **value**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

The current value.

#### Default Value

`0`

#### Defined in

[angular/bootstrap/src/components/progressbar/progressbar.component.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L116)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/7b1962330e28f4d70b60d9b54575aab84007b5e7/angular/headless/src/utils/widget.ts#L148)
