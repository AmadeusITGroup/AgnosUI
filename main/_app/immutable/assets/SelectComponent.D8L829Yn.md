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

[angular/bootstrap/src/components/select/select.component.ts:245](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L245)

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

[angular/bootstrap/src/components/select/select.component.ts:101](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L101)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L78)

***

### badgeClassName

> **badgeClassName**: `undefined` \| `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:231](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L231)

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

[angular/bootstrap/src/components/select/select.component.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L172)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:122](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L122)

***

### disabled

> **disabled**: `undefined` \| `boolean`

true if the select is disabled

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L129)

***

### filterText

> **filterText**: `undefined` \| `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L115)

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

[angular/bootstrap/src/components/select/select.component.ts:196](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L196)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L83)

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

[angular/bootstrap/src/components/select/select.component.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L154)

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

[angular/bootstrap/src/components/select/select.component.ts:184](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L184)

***

### items

> **items**: `undefined` \| `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:90](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L90)

***

### loading

> **loading**: `undefined` \| `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L143)

***

### menuClassName

> **menuClassName**: `undefined` \| `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L161)

***

### menuItemClassName

> **menuItemClassName**: `undefined` \| `string`

Class to be added on menu items

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L224)

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

[angular/bootstrap/src/components/select/select.component.ts:243](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L243)

***

### open

> **open**: `undefined` \| `boolean`

true if the select is open

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:108](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L108)

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

[angular/bootstrap/src/components/select/select.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L217)

***

### selected

> **selected**: `undefined` \| `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L136)

***

### selectedChange

> **selectedChange**: `EventEmitter`\<`Item`[]\>

Callback called when the selection change

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L206)

***

### slotSelectBadgeLabelFromContent

> **slotSelectBadgeLabelFromContent**: `undefined` \| [`SelectBadgeLabelDirective`](SelectBadgeLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L173)

***

### slotSelectItemLabelFromContent

> **slotSelectItemLabelFromContent**: `undefined` \| [`SelectItemLabelDirective`](SelectItemLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:185](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L185)

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

[angular/headless/src/utils/widget.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/headless/src/utils/widget.ts#L110)

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

[angular/headless/src/utils/widget.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/headless/src/utils/widget.ts#L126)

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

[angular/headless/src/utils/widget.ts:118](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/headless/src/utils/widget.ts#L118)

## Methods

### itemCtxTrackBy()

> **itemCtxTrackBy**(`_`, `itemContext`): `string`

#### Parameters

• **\_**: `number`

• **itemContext**: [`ItemContext`](../interfaces/ItemContext.md)\<`Item`\>

#### Returns

`string`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:258](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L258)

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

[angular/bootstrap/src/components/select/select.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/bootstrap/src/components/select/select.component.ts#L262)

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

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/headless/src/utils/widget.ts#L131)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/d8971b3318f72a081b403faf55d83bbad84f1f29/angular/headless/src/utils/widget.ts#L136)
