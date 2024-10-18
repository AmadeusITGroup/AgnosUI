## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SelectWidget`](../type-aliases/SelectWidget.md)\<`Item`\>\>

## Type Parameters

• **Item**

## Implements

- [`AfterContentChecked`](https://angular.dev/api/core/AfterContentChecked)

## Constructors

### new SelectComponent()

> **new SelectComponent**\<`Item`\>(): [`SelectComponent`](SelectComponent.md)\<`Item`\>

#### Returns

[`SelectComponent`](SelectComponent.md)\<`Item`\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<[`SelectWidget`](../type-aliases/SelectWidget.md)\<`Item`\>\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:248](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L248)

***

### allowedPlacements

> **allowedPlacements**: `undefined` \| `Placement`[]

List of allowed placements for the dropdown.
This refers to the [allowedPlacements from floating UI](https://floating-ui.com/docs/autoPlacement#allowedplacements), given the different [Placement possibilities](https://floating-ui.com/docs/computePosition#placement).

#### Default Value

```ts
['bottom-start', 'top-start', 'bottom-end', 'top-end']
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:104](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L104)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:81](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L81)

***

### badgeClassName

> **badgeClassName**: `undefined` \| `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L234)

***

### badgeLabel

> **badgeLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../type-aliases/SelectItemContext.md)\<`Item`\>\>

The template to override the way each badge on the left of the input is displayed.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L175)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:125](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L125)

***

### disabled

> **disabled**: `undefined` \| `boolean`

true if the select is disabled

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L132)

***

### filterText

> **filterText**: `undefined` \| `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:118](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L118)

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

[angular/bootstrap/src/components/select/select.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L199)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L86)

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

[angular/bootstrap/src/components/select/select.component.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L157)

***

### itemLabel

> **itemLabel**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`SelectItemContext`](../type-aliases/SelectItemContext.md)\<`Item`\>\>

The template to override the way each item is displayed in the list.
This define the content of the badge inside the badge container.

#### Default Value

```ts
({itemContext}: SelectItemContext<any>) => itemContext.item
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L187)

***

### items

> **items**: `undefined` \| `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L93)

***

### loading

> **loading**: `undefined` \| `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L146)

***

### menuClassName

> **menuClassName**: `undefined` \| `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:164](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L164)

***

### menuItemClassName

> **menuItemClassName**: `undefined` \| `string`

Class to be added on menu items

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L227)

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

[angular/bootstrap/src/components/select/select.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L246)

***

### open

> **open**: `undefined` \| `boolean`

true if the select is open

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:111](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L111)

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

[angular/bootstrap/src/components/select/select.component.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L220)

***

### selected

> **selected**: `undefined` \| `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L139)

***

### selectedChange

> **selectedChange**: `EventEmitter`\<`Item`[]\>

Callback called when the selection change

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L209)

***

### slotSelectBadgeLabelFromContent

> **slotSelectBadgeLabelFromContent**: `undefined` \| [`SelectBadgeLabelDirective`](SelectBadgeLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L176)

***

### slotSelectItemLabelFromContent

> **slotSelectItemLabelFromContent**: `undefined` \| [`SelectItemLabelDirective`](SelectItemLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L188)

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

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/headless/src/utils/widget.ts#L123)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

Retrieves the widget state as an Angular Signal

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/headless/src/utils/widget.ts#L131)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

Retrieves the widget

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

the widget

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/headless/src/utils/widget.ts#L139)

## Methods

### itemCtxTrackBy()

> **itemCtxTrackBy**(`_`, `itemContext`): `string`

#### Parameters

• **\_**: `number`

• **itemContext**: [`ItemContext`](../interfaces/ItemContext.md)\<`Item`\>

#### Returns

`string`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L261)

***

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

[angular/bootstrap/src/components/select/select.component.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/bootstrap/src/components/select/select.component.ts#L265)

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

[angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/headless/src/utils/widget.ts#L144)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/c718381387aa1ca1e5cd40e27e1bf1c6664c7a18/angular/headless/src/utils/widget.ts#L149)
