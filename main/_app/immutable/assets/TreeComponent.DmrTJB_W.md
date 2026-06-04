Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L173)

TreeComponent is an Angular component that extends the BaseWidgetDirective
to provide a customizable tree widget. This component allows for various
configurations and customizations through its inputs and outputs.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`TreeWidget`](../type-aliases/TreeWidget.md)\>

## Properties

### ariaLabelToggleFn

> `readonly` **ariaLabelToggleFn**: `InputSignal`\<((`label`) => `string`) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L227)

Return the value for the 'aria-label' attribute of the toggle

#### Param

**label**

tree item label

#### Default Value

```ts
(label: string) => `Toggle ${label}`
```

***

### className

> `readonly` **className**: `InputSignal`\<`string` \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L206)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### expandToggle

> `readonly` **expandToggle**: `OutputEmitterRef`\<[`NormalizedTreeItem`](../interfaces/NormalizedTreeItem.md)\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:239](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L239)

An event emitted when the user toggles the expand of the TreeItem.

Event payload is equal to the TreeItem clicked.

#### Default Value

```ts
() => {}
```

***

### item

> `readonly` **item**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:262](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L262)

Slot to change the default tree item

***

### itemContent

> `readonly` **itemContent**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:244](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L244)

Slot to change the default tree item content

***

### itemToggle

> `readonly` **itemToggle**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeSlotItemContext`](../type-aliases/TreeSlotItemContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L256)

Slot to change the default tree item toggle

***

### navSelector

> `readonly` **navSelector**: `InputSignal`\<((`node`) => `NodeListOf`\<[`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)\>) \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L217)

Retrieves expand items of the TreeItem

#### Param

**node**

HTML element that is representing the expand item

#### Default Value

```ts
(node: HTMLElement) => node.querySelectorAll('button')
```

***

### nodes

> `readonly` **nodes**: `InputSignal`\<[`TreeItem`](../interfaces/TreeItem.md)[] \| `undefined`\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:200](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L200)

Array of the tree nodes to display

#### Default Value

`[]`

***

### structure

> `readonly` **structure**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<[`TreeContext`](../type-aliases/TreeContext.md)\>\>

Defined in: [angular/bootstrap/src/components/tree/tree.component.ts:250](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/bootstrap/src/components/tree/tree.component.ts#L250)

Slot to change the default display of the tree

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:144](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/headless/src/utils/widget.ts#L144)

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

Defined in: [angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/headless/src/utils/widget.ts#L160)

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

Defined in: [angular/headless/src/utils/widget.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/8aadef831031c9a24ee48e4bd43f38c7971f6cb8/angular/headless/src/utils/widget.ts#L152)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
