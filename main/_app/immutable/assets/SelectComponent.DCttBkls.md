## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`SelectWidget`](../type-aliases/SelectWidget.md)\<`Item`\>\>

## Type Parameters

• **Item**

## Constructors

### new SelectComponent()

> **new SelectComponent**\<`Item`\>(): [`SelectComponent`](SelectComponent.md)\<`Item`\>

#### Returns

[`SelectComponent`](SelectComponent.md)\<`Item`\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L239)

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

[angular/bootstrap/src/components/select/select.component.ts:95](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L95)

***

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

aria-label used for the input inside the select

#### Default Value

`'Select'`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:72](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L72)

***

### badgeClassName

> **badgeClassName**: `undefined` \| `string`

Class to be added on selected items (displayed in the input zone)

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:225](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L225)

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

[angular/bootstrap/src/components/select/select.component.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L166)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:116](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L116)

***

### disabled

> **disabled**: `undefined` \| `boolean`

true if the select is disabled

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L123)

***

### filterText

> **filterText**: `undefined` \| `string`

Filtered text to be display in the filter input

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:109](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L109)

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

[angular/bootstrap/src/components/select/select.component.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L190)

***

### id

> **id**: `undefined` \| `string`

id used for the input inside the select

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L77)

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

[angular/bootstrap/src/components/select/select.component.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L148)

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

[angular/bootstrap/src/components/select/select.component.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L178)

***

### items

> **items**: `undefined` \| `Item`[]

List of available items for the dropdown

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:84](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L84)

***

### loading

> **loading**: `undefined` \| `boolean`

true if a loading process is being done

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:137](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L137)

***

### menuClassName

> **menuClassName**: `undefined` \| `string`

Class to be added on the dropdown menu container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L155)

***

### menuItemClassName

> **menuItemClassName**: `undefined` \| `string`

Class to be added on menu items

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:218](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L218)

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

[angular/bootstrap/src/components/select/select.component.ts:237](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L237)

***

### open

> **open**: `undefined` \| `boolean`

true if the select is open

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L102)

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

[angular/bootstrap/src/components/select/select.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L211)

***

### selected

> **selected**: `undefined` \| `Item`[]

List of selected item ids

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:130](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L130)

***

### selectedChange

> **selectedChange**: `EventEmitter`\<`Item`[]\>

Callback called when the selection change

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L200)

***

### slotSelectBadgeLabelFromContent

> **slotSelectBadgeLabelFromContent**: `undefined` \| [`SelectBadgeLabelDirective`](SelectBadgeLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L167)

***

### slotSelectItemLabelFromContent

> **slotSelectItemLabelFromContent**: `undefined` \| [`SelectItemLabelDirective`](SelectItemLabelDirective.md)\<`Item`\>

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L179)

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

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/headless/src/utils/widget.ts#L134)

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

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/headless/src/utils/widget.ts#L150)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular Signal

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/headless/src/utils/widget.ts#L142)

## Methods

### itemCtxTrackBy()

> **itemCtxTrackBy**(`_`, `itemContext`): `string`

#### Parameters

• **\_**: `number`

• **itemContext**: [`ItemContext`](../interfaces/ItemContext.md)\<`Item`\>

#### Returns

`string`

#### Defined in

[angular/bootstrap/src/components/select/select.component.ts:260](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/bootstrap/src/components/select/select.component.ts#L260)

***

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/headless/src/utils/widget.ts#L165)

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

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/eb703f3963f999f6fb2ee87efd7f120b98e5e7b5/angular/headless/src/utils/widget.ts#L160)
