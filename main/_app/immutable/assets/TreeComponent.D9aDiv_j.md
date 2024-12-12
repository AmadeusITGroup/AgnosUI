TreeComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable tree widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`TreeWidget`](../type-aliases/TreeWidget.md)\>

## Properties

### ariaLabel

> `readonly` **ariaLabel**: `InputSignal`\<`undefined` \| `string`\>

Optional accessibility label for the tree if there is no explicit label

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:209](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L209)

***

### ariaLabelToggleFn

> `readonly` **ariaLabelToggleFn**: `InputSignal`\<`undefined` \| (`label`) => `string`\>

Return the value for the 'aria-label' attribute of the toggle

#### Param

tree item label

#### Default Value

```ts
(label: string) => `Toggle ${label}`
```

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L242)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L221)

***

### expandToggle

> `readonly` **expandToggle**: `OutputEmitterRef`\<[`NormalizedTreeItem`](../interfaces/NormalizedTreeItem.md)\>

An event emitted when the user toggles the expand of the TreeItem.

Event payload is equal to the TreeItem clicked.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L254)

***

### item

> `readonly` **item**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Slot to change the default tree item

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:277](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L277)

***

### itemContent

> `readonly` **itemContent**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Slot to change the default tree item content

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:259](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L259)

***

### itemToggle

> `readonly` **itemToggle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Slot to change the default tree item toggle

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:271](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L271)

***

### navSelector

> `readonly` **navSelector**: `InputSignal`\<`undefined` \| (`node`) => `NodeListOf`\<[`HTMLButtonElement`](https://developer.mozilla.org/docs/Web/API/HTMLButtonElement)\>\>

Retrieves expand items of the TreeItem

#### Param

HTML element that is representing the expand item

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('button')
```

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:232](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L232)

***

### nodes

> `readonly` **nodes**: `InputSignal`\<`undefined` \| [`TreeItem`](../interfaces/TreeItem.md)[]\>

Array of the tree nodes to display

#### Default Value

`[]`

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L215)

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeContext`](../type-aliases/TreeContext.md)\>\>

Slot to change the default display of the tree

#### Defined in

[angular/bootstrap/src/components/tree/tree.component.ts:265](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/bootstrap/src/components/tree/tree.component.ts#L265)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/2e68fa452d681dd848fcb362c0b37b70846e8411/angular/headless/src/utils/widget.ts#L148)
