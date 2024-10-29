Modal component.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ModalWidget`](../type-aliases/ModalWidget.md)\<`Data`\>\>

## Type Parameters

• **Data**

## Constructors

### new ModalComponent()

> **new ModalComponent**\<`Data`\>(): [`ModalComponent`](ModalComponent.md)\<`Data`\>

#### Returns

[`ModalComponent`](ModalComponent.md)\<`Data`\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:325](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L325)

## Properties

### animated

> **animated**: `undefined` \| `boolean`

Whether the modal and its backdrop (if present) should be animated when shown or hidden.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:152](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L152)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Value of the aria-label attribute to put on the close button.

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:206](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L206)

***

### backdrop

> **backdrop**: `undefined` \| `boolean`

Whether a backdrop should be created behind the modal.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:180](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L180)

***

### backdropClass

> **backdropClass**: `undefined` \| `string`

Classes to add on the backdrop DOM element.

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:213](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L213)

***

### backdropTransition

> **backdropTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the backdrop behind the modal (if present).

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L159)

***

### beforeClose

> **beforeClose**: `EventEmitter`\<[`ModalBeforeCloseEvent`](../interfaces/ModalBeforeCloseEvent.md)\>

Event to be triggered when the modal is about to be closed (i.e. the ModalApi.close|close method was called).

#### Param

event giving access to the argument given to the ModalApi.close|close method and allowing
to cancel the close process.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:300](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L300)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Body of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:261](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L261)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L227)

***

### closeButton

> **closeButton**: `undefined` \| `boolean`

Whether to display the close button.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:220](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L220)

***

### closeOnOutsideClick

> **closeOnOutsideClick**: `undefined` \| `boolean`

Whether the modal should be closed when clicking on the viewport outside the modal.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L187)

***

### container

> **container**: `undefined` \| `null` \| [`HTMLElement`](https://developer.mozilla.org/docs/Web/API/HTMLElement)

Which element should contain the modal and backdrop DOM elements.
If it is not null, the modal and backdrop DOM elements are moved to the specified container.
Otherwise, they stay where the widget is located.

#### Default Value

```ts
typeof window !== 'undefined' ? document.body : null
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:199](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L199)

***

### contentData

> **contentData**: `undefined` \| `Data`

Data to use in content slots

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:275](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L275)

***

### footer

> **footer**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Footer of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:268](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L268)

***

### fullscreen

> **fullscreen**: `undefined` \| `boolean`

Option to create a fullscreen modal, according to the bootstrap documentation.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:234](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L234)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Header of the modal. The default header includes ModalProps.title|title.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:247](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L247)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Event to be triggered when the transition is completed and the modal is not visible.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:310](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L310)

***

### modalTransition

> **modalTransition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition to use for the modal.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:166](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L166)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Event to be triggered when the transition is completed and the modal is visible.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:320](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L320)

***

### slotChildren?

> `optional` **slotChildren**: [`TemplateRef`](https://angular.dev/api/core/TemplateRef)\<`void`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:323](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L323)

***

### slotDefaultFromContent

> **slotDefaultFromContent**: `undefined` \| [`ModalBodyDirective`](ModalBodyDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:263](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L263)

***

### slotFooterFromContent

> **slotFooterFromContent**: `undefined` \| [`ModalFooterDirective`](ModalFooterDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:270](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L270)

***

### slotHeaderFromContent

> **slotHeaderFromContent**: `undefined` \| [`ModalHeaderDirective`](ModalHeaderDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:249](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L249)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`ModalStructureDirective`](ModalStructureDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:242](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L242)

***

### slotTitleFromContent

> **slotTitleFromContent**: `undefined` \| [`ModalTitleDirective`](ModalTitleDirective.md)\<`Data`\>

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:256](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L256)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Structure of the modal.
The default structure uses ModalProps.header|header, ModalProps.children|children and ModalProps.footer|footer.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:240](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L240)

***

### title

> **title**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ModalContext`](../interfaces/ModalContext.md)\<`Data`\>\>

Title of the modal.

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:254](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L254)

***

### visible

> **visible**: `undefined` \| `boolean`

Whether the modal should be visible when the transition is completed.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L173)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Event to be triggered when the visible property changes.

#### Param

new value of the visible propery

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/modal/modal.component.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/modal/modal.component.ts#L287)

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

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/headless/src/utils/widget.ts#L134)

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

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/headless/src/utils/widget.ts#L150)

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

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/headless/src/utils/widget.ts#L142)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/headless/src/utils/widget.ts#L165)

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

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/headless/src/utils/widget.ts#L160)
