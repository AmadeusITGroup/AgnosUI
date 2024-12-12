A component that represents a customizable select dropdown widget.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SelectWidget`](../type-aliases/SelectWidget.md)\<`Item`\>\>

## Type Parameters

• **Item**

The type of items in the select dropdown.

## Properties

### allowedPlacements

> `readonly` **allowedPlacements**: `InputSignal`\<`undefined` \| `Placement`[]\>

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L116)

***

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| `string`\>

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L93)

***

### badgeClassName

> `readonly` **badgeClassName**: `InputSignal`\<`undefined` \| `string`\>

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L246)

***

### badgeLabel

> `readonly` **badgeLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../interfaces/SelectItemContext.md)\<`Item`\>\>\>

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L187)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L137)

***

### disabled

> `readonly` **disabled**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

true if the select is disabled

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L144)

***

### filterText

> `readonly` **filterText**: `InputSignal`\<`undefined` \| `string`\>

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L130)

***

### filterTextChange

> `readonly` **filterTextChange**: `OutputEmitterRef`\<`string`\>

Callback called when the text filter change

#### Param

Filtered text

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L211)

***

### id

> `readonly` **id**: `InputSignal`\<`undefined` \| `string`\>

id used for the input inside the select

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L98)

***

### itemIdFn

> `readonly` **itemIdFn**: `InputSignal`\<`undefined` \| (`item`) => `string`\>

Custom function to get the id of an item
By default, the item is returned

#### Default Value

```ts
(item: any) => '' + item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L169)

***

### itemLabel

> `readonly` **itemLabel**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../interfaces/SelectItemContext.md)\<`Item`\>\>\>

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L199)

***

### items

> `readonly` **items**: `InputSignal`\<`undefined` \| `Item`[]\>

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L105)

***

### loading

> `readonly` **loading**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

true if a loading process is being done

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L158)

***

### menuClassName

> `readonly` **menuClassName**: `InputSignal`\<`undefined` \| `string`\>

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L176)

***

### menuItemClassName

> `readonly` **menuItemClassName**: `InputSignal`\<`undefined` \| `string`\>

Class to be added on menu items

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L239)

***

### navSelector

> `readonly` **navSelector**: `InputSignal`\<`undefined` \| (`node`) => `NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>\>

Retrieves navigable elements within an HTML element containing badges and the input.

#### Param

HTMLElement that contains the badges and the input

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L258)

***

### open

> `readonly` **open**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

true if the select is open

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L123)

***

### openChange

> `readonly` **openChange**: `OutputEmitterRef`\<`boolean`\>

Callback called dropdown open state change

#### Param

updated open state

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L232)

***

### selected

> `readonly` **selected**: `InputSignal`\<`undefined` \| `Item`[]\>

List of selected item ids

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L151)

***

### selectedChange

> `readonly` **selectedChange**: `OutputEmitterRef`\<`Item`[]\>

Callback called when the selection change

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/bootstrap/src/components/select/select.component.ts#L221)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/aa20258a25371e15aee5fd229c28b377372a4c61/angular/headless/src/utils/widget.ts#L148)
