A component that represents a customizable select dropdown widget.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SelectWidget`](../type-aliases/SelectWidget.md)\<`Item`\>\>

## Type Parameters

• **Item**

The type of items in the select dropdown.

## Properties

### allowedPlacements

> **allowedPlacements**: `undefined` \| `Placement`[]

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:117](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L117)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:94](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L94)

***

### badgeClassName

> **badgeClassName**: `undefined` \| `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L247)

***

### badgeLabel

> **badgeLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../interfaces/SelectItemContext.md)\<`Item`\>\>

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L188)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L138)

***

### disabled

> **disabled**: `undefined` \| `boolean`

true if the select is disabled

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L145)

***

### filterText

> **filterText**: `undefined` \| `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L131)

***

### filterTextChange

> **filterTextChange**: `EventEmitter`\<`string`\>

Callback called when the text filter change

#### Param

Filtered text

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:212](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L212)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L99)

***

### itemIdFn

> **itemIdFn**: `undefined` \| (`item`) => `string`

Custom function to get the id of an item
By default, the item is returned

#### Default Value

```ts
(item: any) => '' + item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:170](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L170)

***

### itemLabel

> **itemLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../interfaces/SelectItemContext.md)\<`Item`\>\>

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L200)

***

### items

> **items**: `undefined` \| `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:106](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L106)

***

### loading

> **loading**: `undefined` \| `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L159)

***

### menuClassName

> **menuClassName**: `undefined` \| `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:177](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L177)

***

### menuItemClassName

> **menuItemClassName**: `undefined` \| `string`

Class to be added on menu items

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L240)

***

### navSelector

> **navSelector**: `undefined` \| (`node`) => `NodeListOf`\<[`HTMLInputElement`](https://developer.mozilla.org/docs/Web/API/HTMLInputElement) \| [`HTMLSpanElement`](https://developer.mozilla.org/docs/Web/API/HTMLSpanElement)\>

Retrieves navigable elements within an HTML element containing badges and the input.

#### Param

HTMLElement that contains the badges and the input

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('.au-select-badge,input')
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L259)

***

### open

> **open**: `undefined` \| `boolean`

true if the select is open

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L124)

***

### openChange

> **openChange**: `EventEmitter`\<`boolean`\>

Callback called dropdown open state change

#### Param

updated open state

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:233](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L233)

***

### selected

> **selected**: `undefined` \| `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L152)

***

### selectedChange

> **selectedChange**: `EventEmitter`\<`Item`[]\>

Callback called when the selection change

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/bootstrap/src/components/select/select.component.ts#L222)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/fabd1619245db3af383e2fc0b4366f5f42bcecb5/angular/headless/src/utils/widget.ts#L148)
