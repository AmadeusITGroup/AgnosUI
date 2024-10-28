## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`ToastWidget`](../type-aliases/ToastWidget.md)\>

## Constructors

### new ToastComponent()

> **new ToastComponent**(): [`ToastComponent`](ToastComponent.md)

#### Returns

[`ToastComponent`](ToastComponent.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:229](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L229)

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:145](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L145)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L134)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:168](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L168)

***

### autoHide

> **autoHide**: `undefined` \| `boolean`

If `true` automatically hides the toast after the delay.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:153](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L153)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>

Template for the toast content

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L173)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:224](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L224)

***

### delay

> **delay**: `undefined` \| `number`

Delay in milliseconds before hiding the toast.

#### Default Value

`5000`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:161](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L161)

***

### dismissible

> **dismissible**: `undefined` \| `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:105](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L105)

***

### header

> **header**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>

Header template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L186)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:207](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L207)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:217](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L217)

***

### slotChildren?

> `optional` **slotChildren**: [`TemplateRef`](https://angular.dev/api/core/TemplateRef)\<`void`\>

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:227](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L227)

***

### slotDefaultFromContent

> **slotDefaultFromContent**: `undefined` \| [`ToastBodyDirective`](ToastBodyDirective.md)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:175](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L175)

***

### slotHeaderFromContent

> **slotHeaderFromContent**: `undefined` \| [`ToastHeaderDirective`](ToastHeaderDirective.md)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:187](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L187)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`ToastStructureDirective`](ToastStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L181)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`ToastContext`](../interfaces/ToastContext.md)\>

Global template for the toast component

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:180](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L180)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L115)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L123)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/toast/toast.component.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/bootstrap/src/components/toast/toast.component.ts#L197)

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

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/headless/src/utils/widget.ts#L134)

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

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/headless/src/utils/widget.ts#L150)

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

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/headless/src/utils/widget.ts#L142)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/headless/src/utils/widget.ts#L165)

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

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/fa334916b3be7304c2b9d8c7ce65853d953dbf36/angular/headless/src/utils/widget.ts#L160)
