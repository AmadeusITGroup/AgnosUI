TreeComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable tree widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`TreeWidget`](../type-aliases/TreeWidget.md)\>

## Properties

### ariaLabel

> **ariaLabel**: `undefined` \| `string`

Optional accessibility label for the tree if there is no explicit label

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L217)

***

### ariaLabelToggleFn

> **ariaLabelToggleFn**: `undefined` \| (`label`) => `string`

Return the value for the 'aria-label' attribute of the toggle

#### Param

tree item label

#### Default Value

```ts
(label: string) => `Toggle ${label}`
```

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L250)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L229)

***

### expandToggle

> **expandToggle**: `EventEmitter`\<[`TreeItem`](../interfaces/TreeItem.md)\>

An event emitted when the user toggles the expand of the TreeItem.

Event payload is equal to the TreeItem clicked.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L262)

***

### item

> **item**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Slot to change the default tree item content

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:267](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L267)

***

### navSelector

> **navSelector**: `undefined` \| (`node`) => `NodeListOf`\<[`HTMLButtonElement`](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)\>

Retrieves expand items of the TreeItem

#### Param

HTML element that is representing the expand item

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('button')
```

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L240)

***

### nodes

> **nodes**: `undefined` \| [`TreeItem`](../interfaces/TreeItem.md)[]

Array of the tree nodes to display

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:223](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L223)

***

### root

> **root**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Slot to change the default tree item

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:285](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L285)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeContext`](../type-aliases/TreeContext.md)\>

Slot to change the default display of the tree

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:273](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L273)

***

### toggle

> **toggle**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>

Slot to change the default tree item toggle

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:279](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/bootstrap/src/components/tree/tree.component.ts#L279)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/1e3e802d7fd1aa3c31f560d50cccac7ea4d6bc49/angular/headless/src/utils/widget.ts#L148)
