Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:178](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L178)

TreeComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable tree widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`TreeWidget`](../type-aliases/TreeWidget.md)\>

## Properties

### ariaLabelToggleFn

> `readonly` **ariaLabelToggleFn**: `InputSignal`\<(`label`) => `string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L232)

Return the value for the 'aria-label' attribute of the toggle

#### Param

tree item label

#### Default Value

```ts
(label: string) => `Toggle ${label}`
```

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L211)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### expandToggle

> `readonly` **expandToggle**: `OutputEmitterRef`\<[`NormalizedTreeItem`](../interfaces/NormalizedTreeItem.md)\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L244)

An event emitted when the user toggles the expand of the TreeItem.

Event payload is equal to the TreeItem clicked.

#### Default Value

```ts
() => {}
```

***

### item

> `readonly` **item**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L267)

Slot to change the default tree item

***

### itemContent

> `readonly` **itemContent**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L249)

Slot to change the default tree item content

***

### itemToggle

> `readonly` **itemToggle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L261)

Slot to change the default tree item toggle

***

### navSelector

> `readonly` **navSelector**: `InputSignal`\<(`node`) => `NodeListOf`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\> \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:222](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L222)

Retrieves expand items of the TreeItem

#### Param

HTML element that is representing the expand item

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('button')
```

***

### nodes

> `readonly` **nodes**: `InputSignal`\<[`TreeItem`](../interfaces/TreeItem.md)[] \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L205)

Array of the tree nodes to display

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeContext`](../type-aliases/TreeContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/bootstrap/src/components/tree/tree.component.ts#L255)

Slot to change the default display of the tree

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/0f46de532941cf3d3658ca6c275f10434931ab8a/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
