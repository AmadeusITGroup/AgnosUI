## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`AlertWidget`](../type-aliases/AlertWidget.md)\>

## Constructors

### new AlertComponent()

> **new AlertComponent**(): [`AlertComponent`](AlertComponent.md)

#### Returns

[`AlertComponent`](AlertComponent.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:191](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L191)

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, alert closing will be animated.

Animation is triggered  when clicked on the close button (×),
via the `.close()` function or the visible prop is changed

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:129](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L129)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, alert opening will be animated.

Animation is triggered  when the `.open()` function is called
or the visible prop is changed

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:118](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L118)

***

### ariaCloseButtonLabel

> **ariaCloseButtonLabel**: `undefined` \| `string`

Accessibility close button label

#### Default Value

`'Close'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L136)

***

### children

> **children**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../type-aliases/AlertContext.md)\>

Template for the alert content

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:141](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L141)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:186](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L186)

***

### dismissible

> **dismissible**: `undefined` \| `boolean`

If `true`, alert can be dismissed by the user.
The close button (×) will be displayed and you can be notified of the event with the (close) output.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:89](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L89)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the alert is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:169](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L169)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the alert is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:179](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L179)

***

### slotChildren?

> `optional` **slotChildren**: [`TemplateRef`](https://angular.dev/api/core/TemplateRef)\<`void`\>

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:189](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L189)

***

### slotDefaultFromContent

> **slotDefaultFromContent**: `undefined` \| [`AlertBodyDirective`](AlertBodyDirective.md)

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L143)

***

### slotStructureFromContent

> **slotStructureFromContent**: `undefined` \| [`AlertStructureDirective`](AlertStructureDirective.md)

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:149](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L149)

***

### structure

> **structure**: [`SlotContent`](../type-aliases/SlotContent.md)\<[`AlertContext`](../type-aliases/AlertContext.md)\>

Global template for the alert component

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L148)

***

### transition

> **transition**: `undefined` \| [`TransitionFn`](../type-aliases/TransitionFn.md)

The transition function will be executed when the alert is displayed or hidden.

Depending on the value of `animatedOnInit`, the animation can be optionally skipped during the showing process.

#### Default Value

`fadeTransition`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L99)

***

### type

> **type**: `undefined` \| [`BSContextualClass`](../type-aliases/BSContextualClass.md)

Type of the alert, following bootstrap types.

#### Default Value

`'primary'`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:80](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L80)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the alert is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L107)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the alert visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/alert/alert.component.ts:159](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/bootstrap/src/components/alert/alert.component.ts#L159)

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

[angular/headless/src/utils/widget.ts:134](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/headless/src/utils/widget.ts#L134)

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

[angular/headless/src/utils/widget.ts:150](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/headless/src/utils/widget.ts#L150)

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

[angular/headless/src/utils/widget.ts:142](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/headless/src/utils/widget.ts#L142)

## Methods

### ngAfterContentChecked()

> **ngAfterContentChecked**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngAfterContentChecked`](BaseWidgetDirective.md#ngaftercontentchecked)

#### Defined in

[angular/headless/src/utils/widget.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/headless/src/utils/widget.ts#L165)

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

[angular/headless/src/utils/widget.ts:155](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/headless/src/utils/widget.ts#L155)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:160](https://github.com/AmadeusITGroup/AgnosUI/blob/dc2be70aa38309580d37807ccd98b6641efde6ae/angular/headless/src/utils/widget.ts#L160)
