Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L87)

ProgressbarComponent is a UI component that extends the BaseWidgetDirective
to create a customizable progress bar widget. It provides various inputs
to configure the appearance and behavior of the progress bar.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ProgressbarWidget`](../type-aliases/ProgressbarWidget.md)\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L148)

If `true`, animates a striped progressbar.
Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.

#### Default Value

`false`

***

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L93)

The aria label.

#### Default Value

`'Progressbar'`

***

### ariaValueTextFn

> `readonly` **ariaValueTextFn**: `InputSignal`\<((`value`, `minimum`, `maximum`) => `string` \| `undefined`) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L168)

Return the value for the 'aria-valuetext' attribute.

#### Param

**value**

current value

#### Param

**minimum**

minimum value

#### Param

**maximum**

maximum value

#### Default Value

```ts
() => undefined
```

***

### children

> `readonly` **children**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L126)

Label of the progress.

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:121](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L121)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### height

> `readonly` **height**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L140)

Height of the progressbar, can be any valid css height value.

#### Default Value

`''`

***

### max

> `readonly` **max**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L107)

The maximum value.

#### Default Value

`100`

***

### min

> `readonly` **min**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:100](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L100)

The minimum value.

#### Default Value

`0`

***

### striped

> `readonly` **striped**: `InputSignalWithTransform`\<`boolean` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L155)

If `true`, shows a striped progressbar.

#### Default Value

`false`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`ProgressbarContext`](../interfaces/ProgressbarContext.md)\>\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L132)

Global template for the Progressbar.

***

### type

> `readonly` **type**: `InputSignal`\<[`BSContextualClass`](../type-aliases/BSContextualClass.md) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L173)

Type of the progressbar, following bootstrap types.

***

### value

> `readonly` **value**: `InputSignalWithTransform`\<`number` \| `undefined`, `unknown`\>

Defined in: [angular/bootstrap/src/components/progressbar/progressbar.component.ts:114](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/bootstrap/src/components/progressbar/progressbar.component.ts#L114)

The current value.

#### Default Value

`0`

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/18f7f49b5d4a326292a1b5a40a4c190da899b686/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
