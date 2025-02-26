Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:176](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L176)

TreeComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable tree widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`TreeWidget`](../type-aliases/TreeWidget.md)\>

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:205](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L205)

Optional accessibility label for the tree if there is no explicit label

#### Default Value

`''`

***

### ariaLabelToggleFn

> `readonly` **ariaLabelToggleFn**: `InputSignal`\<`undefined` \| (`label`) => `string`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:238](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L238)

Return the value for the 'aria-label' attribute of the toggle

#### Param

tree item label

#### Default Value

```ts
(label: string) => `Toggle ${label}`
```

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L217)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### expandToggle

> `readonly` **expandToggle**: `OutputEmitterRef`\<[`NormalizedTreeItem`](../interfaces/NormalizedTreeItem.md)\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L250)

An event emitted when the user toggles the expand of the TreeItem.

Event payload is equal to the TreeItem clicked.

#### Default Value

```ts
() => {}
```

***

### item

> `readonly` **item**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L273)

Slot to change the default tree item

***

### itemContent

> `readonly` **itemContent**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:255](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L255)

Slot to change the default tree item content

***

### itemToggle

> `readonly` **itemToggle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L267)

Slot to change the default tree item toggle

***

### navSelector

> `readonly` **navSelector**: `InputSignal`\<`undefined` \| (`node`) => `NodeListOf`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:228](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L228)

Retrieves expand items of the TreeItem

#### Param

HTML element that is representing the expand item

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('button')
```

***

### nodes

> `readonly` **nodes**: `InputSignal`\<`undefined` \| [`TreeItem`](../interfaces/TreeItem.md)[]\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:211](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L211)

Array of the tree nodes to display

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeContext`](../type-aliases/TreeContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/bootstrap/src/components/tree/tree.component.ts#L261)

Slot to change the default display of the tree

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/ff9034c35f41638e19c700b54c090116987d3559/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
