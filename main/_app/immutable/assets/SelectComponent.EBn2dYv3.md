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

[angular/bootstrap/src/components/select/select.component.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L260)

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

[angular/bootstrap/src/components/select/select.component.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L116)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:93](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L93)

***

### badgeClassName

> **badgeClassName**: `undefined` \| `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:246](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L246)

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

[angular/bootstrap/src/components/select/select.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L187)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L137)

***

### disabled

> **disabled**: `undefined` \| `boolean`

true if the select is disabled

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L144)

***

### filterText

> **filterText**: `undefined` \| `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L130)

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

[angular/bootstrap/src/components/select/select.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L211)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:98](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L98)

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

[angular/bootstrap/src/components/select/select.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L169)

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

[angular/bootstrap/src/components/select/select.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L199)

***

### items

> **items**: `undefined` \| `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L105)

***

### loading

> **loading**: `undefined` \| `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L158)

***

### menuClassName

> **menuClassName**: `undefined` \| `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L176)

***

### menuItemClassName

> **menuItemClassName**: `undefined` \| `string`

Class to be added on menu items

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L239)

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

[angular/bootstrap/src/components/select/select.component.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L258)

***

### open

> **open**: `undefined` \| `boolean`

true if the select is open

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L123)

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

[angular/bootstrap/src/components/select/select.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L232)

***

### selected

> **selected**: `undefined` \| `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:151](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L151)

***

### selectedChange

> **selectedChange**: `EventEmitter`\<`Item`[]\>

Callback called when the selection change

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L221)

***

### slotSelectBadgeLabelFromContent

> **slotSelectBadgeLabelFromContent**: `undefined` \| [`SelectBadgeLabelDirective`](SelectBadgeLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:188](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L188)

***

### slotSelectItemLabelFromContent

> **slotSelectItemLabelFromContent**: `undefined` \| [`SelectItemLabelDirective`](SelectItemLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L200)

## Accessors

### api

> `get` **api**(): `W`\[`"api"`\]

#### Returns

`W`\[`"api"`\]

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`api`](BaseWidgetDirective.md#api)

#### Defined in

[angular/headless/src/utils/widget.ts:119](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/headless/src/utils/widget.ts#L119)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/headless/src/utils/widget.ts#L123)

***

### widget

> `get` **widget**(): [`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Returns

[`ContextWidget`](../type-aliases/ContextWidget.md)\<`W`\>

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`widget`](BaseWidgetDirective.md#widget)

#### Defined in

[angular/headless/src/utils/widget.ts:127](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/headless/src/utils/widget.ts#L127)

## Methods

### itemCtxTrackBy()

> **itemCtxTrackBy**(`_`, `itemContext`): `string`

#### Parameters

• **\_**: `number`

• **itemContext**: [`ItemContext`](../interfaces/ItemContext.md)\<`Item`\>

#### Returns

`string`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L273)

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

[angular/bootstrap/src/components/select/select.component.ts:277](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/bootstrap/src/components/select/select.component.ts#L277)

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

[angular/headless/src/utils/widget.ts:132](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/headless/src/utils/widget.ts#L132)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/angular/headless/src/utils/widget.ts#L137)
