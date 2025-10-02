Defined in: [angular/bootstrap/src/components/select/select.component.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L87)

A component that represents a customizable select dropdown widget.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SelectWidget`](../type-aliases/SelectWidget.md)\<`Item`\>\>

## Type Parameters

### Item

`Item`

The type of items in the select dropdown.

## Properties

### allowedPlacements

> `readonly` **allowedPlacements**: `InputSignal`\<`undefined` \| `Placement`[]\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L116)

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

***

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L93)

aria-label used for the input inside the select

#### Default Value

`'Select'`

***

### badgeClassName

> `readonly` **badgeClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L246)

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

***

### badgeLabel

> `readonly` **badgeLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../interfaces/SelectItemContext.md)\<`Item`\>\>\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L187)

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L137)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L144)

true if the select is disabled

#### Default Value

`false`

***

### filterText

> `readonly` **filterText**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L130)

Filtered text to be display in the filter input

#### Default Value

`''`

***

### filterTextChange

> `readonly` **filterTextChange**: `OutputEmitterRef`\<`string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L211)

Callback called when the text filter change

#### Param

Filtered text

#### Default Value

```ts
() => {}
```

***

### id

> `readonly` **id**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L98)

id used for the input inside the select

***

### itemIdFn

> `readonly` **itemIdFn**: `InputSignal`\<`undefined` \| (`item`) => `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L169)

Custom function to get the id of an item
By default, the item is returned

#### Default Value

```ts
(item: any) => '' + item
```

***

### itemLabel

> `readonly` **itemLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../interfaces/SelectItemContext.md)\<`Item`\>\>\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L199)

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

***

### items

> `readonly` **items**: `InputSignal`\<`undefined` \| `Item`[]\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L105)

List of available items for the dropdown

#### Default Value

`[]`

***

### loading

> `readonly` **loading**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L158)

true if a loading process is being done

#### Default Value

`false`

***

### menuClassName

> `readonly` **menuClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L176)

Class to be added on the dropdown menu container

#### Default Value

`''`

***

### menuItemClassName

> `readonly` **menuItemClassName**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L239)

Class to be added on menu items

#### Default Value

`''`

***

### navSelector

> `readonly` **navSelector**: `InputSignal`\<`undefined` \| (`node`) => `NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L258)

Retrieves navigable elements within an HTML element containing badges and the input.

#### Param

HTMLElement that contains the badges and the input

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
```

***

### open

> `readonly` **open**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L123)

true if the select is open

#### Default Value

`false`

***

### openChange

> `readonly` **openChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L232)

Callback called dropdown open state change

#### Param

updated open state

#### Default Value

```ts
() => {}
```

***

### selected

> `readonly` **selected**: `InputSignal`\<`undefined` \| `Item`[]\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L151)

List of selected item ids

#### Default Value

`[]`

***

### selectedChange

> `readonly` **selectedChange**: `OutputEmitterRef`\<`Item`[]\>

Defined in: [angular/bootstrap/src/components/select/select.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/bootstrap/src/components/select/select.component.ts#L221)

Callback called when the selection change

#### Default Value

```ts
() => {}
```

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/headless/src/utils/widget.ts#L138)

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

Defined in: [angular/headless/src/utils/widget.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/headless/src/utils/widget.ts#L154)

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

Defined in: [angular/headless/src/utils/widget.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/26752ccf0a012664f09e9578ae523ba3edf1b897/angular/headless/src/utils/widget.ts#L146)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
