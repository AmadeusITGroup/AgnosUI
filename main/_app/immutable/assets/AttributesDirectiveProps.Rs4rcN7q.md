Properties for configuring server-side rendering directives.

## Properties

### attributes?

> `optional` **attributes**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, [`AttributeValue`](../type-aliases/AttributeValue.md) \| [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`AttributeValue`](../type-aliases/AttributeValue.md)\>\>

Attributes to be added to the provided node.

#### Remarks

The `style` attribute must be added separately.

#### Defined in

[core/src/utils/directive.ts:364](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/core/src/utils/directive.ts#L364)

***

### classNames?

> `optional` **classNames**: [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<`string`, `boolean` \| [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<`boolean`\>\>

Class names to be added to an HTML element.

#### Remarks

Key-value pairs where keys are class names and values indicate whether the class should be added (true) or removed (false).

#### Defined in

[core/src/utils/directive.ts:378](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/core/src/utils/directive.ts#L378)

***

### events?

> `optional` **events**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<`object`\>

Events to be attached to an HTML element.

#### Type declaration

##### abort

> **abort**: `object` \| (`this`, `event`) => `void`

##### animationcancel

> **animationcancel**: `object` \| (`this`, `event`) => `void`

##### animationend

> **animationend**: `object` \| (`this`, `event`) => `void`

##### animationiteration

> **animationiteration**: `object` \| (`this`, `event`) => `void`

##### animationstart

> **animationstart**: `object` \| (`this`, `event`) => `void`

##### auxclick

> **auxclick**: `object` \| (`this`, `event`) => `void`

##### beforeinput

> **beforeinput**: `object` \| (`this`, `event`) => `void`

##### beforetoggle

> **beforetoggle**: `object` \| (`this`, `event`) => `void`

##### blur

> **blur**: `object` \| (`this`, `event`) => `void`

##### cancel

> **cancel**: `object` \| (`this`, `event`) => `void`

##### canplay

> **canplay**: `object` \| (`this`, `event`) => `void`

##### canplaythrough

> **canplaythrough**: `object` \| (`this`, `event`) => `void`

##### change

> **change**: `object` \| (`this`, `event`) => `void`

##### click

> **click**: `object` \| (`this`, `event`) => `void`

##### close

> **close**: `object` \| (`this`, `event`) => `void`

##### compositionend

> **compositionend**: `object` \| (`this`, `event`) => `void`

##### compositionstart

> **compositionstart**: `object` \| (`this`, `event`) => `void`

##### compositionupdate

> **compositionupdate**: `object` \| (`this`, `event`) => `void`

##### contextmenu

> **contextmenu**: `object` \| (`this`, `event`) => `void`

##### copy

> **copy**: `object` \| (`this`, `event`) => `void`

##### cuechange

> **cuechange**: `object` \| (`this`, `event`) => `void`

##### cut

> **cut**: `object` \| (`this`, `event`) => `void`

##### dblclick

> **dblclick**: `object` \| (`this`, `event`) => `void`

##### drag

> **drag**: `object` \| (`this`, `event`) => `void`

##### dragend

> **dragend**: `object` \| (`this`, `event`) => `void`

##### dragenter

> **dragenter**: `object` \| (`this`, `event`) => `void`

##### dragleave

> **dragleave**: `object` \| (`this`, `event`) => `void`

##### dragover

> **dragover**: `object` \| (`this`, `event`) => `void`

##### dragstart

> **dragstart**: `object` \| (`this`, `event`) => `void`

##### drop

> **drop**: `object` \| (`this`, `event`) => `void`

##### durationchange

> **durationchange**: `object` \| (`this`, `event`) => `void`

##### emptied

> **emptied**: `object` \| (`this`, `event`) => `void`

##### ended

> **ended**: `object` \| (`this`, `event`) => `void`

##### error

> **error**: `object` \| (`this`, `event`) => `void`

##### focus

> **focus**: `object` \| (`this`, `event`) => `void`

##### focusin

> **focusin**: `object` \| (`this`, `event`) => `void`

##### focusout

> **focusout**: `object` \| (`this`, `event`) => `void`

##### formdata

> **formdata**: `object` \| (`this`, `event`) => `void`

##### fullscreenchange

> **fullscreenchange**: `object` \| (`this`, `event`) => `void`

##### fullscreenerror

> **fullscreenerror**: `object` \| (`this`, `event`) => `void`

##### gotpointercapture

> **gotpointercapture**: `object` \| (`this`, `event`) => `void`

##### input

> **input**: `object` \| (`this`, `event`) => `void`

##### invalid

> **invalid**: `object` \| (`this`, `event`) => `void`

##### keydown

> **keydown**: `object` \| (`this`, `event`) => `void`

##### keypress

> **keypress**: `object` \| (`this`, `event`) => `void`

##### keyup

> **keyup**: `object` \| (`this`, `event`) => `void`

##### load

> **load**: `object` \| (`this`, `event`) => `void`

##### loadeddata

> **loadeddata**: `object` \| (`this`, `event`) => `void`

##### loadedmetadata

> **loadedmetadata**: `object` \| (`this`, `event`) => `void`

##### loadstart

> **loadstart**: `object` \| (`this`, `event`) => `void`

##### lostpointercapture

> **lostpointercapture**: `object` \| (`this`, `event`) => `void`

##### mousedown

> **mousedown**: `object` \| (`this`, `event`) => `void`

##### mouseenter

> **mouseenter**: `object` \| (`this`, `event`) => `void`

##### mouseleave

> **mouseleave**: `object` \| (`this`, `event`) => `void`

##### mousemove

> **mousemove**: `object` \| (`this`, `event`) => `void`

##### mouseout

> **mouseout**: `object` \| (`this`, `event`) => `void`

##### mouseover

> **mouseover**: `object` \| (`this`, `event`) => `void`

##### mouseup

> **mouseup**: `object` \| (`this`, `event`) => `void`

##### paste

> **paste**: `object` \| (`this`, `event`) => `void`

##### pause

> **pause**: `object` \| (`this`, `event`) => `void`

##### play

> **play**: `object` \| (`this`, `event`) => `void`

##### playing

> **playing**: `object` \| (`this`, `event`) => `void`

##### pointercancel

> **pointercancel**: `object` \| (`this`, `event`) => `void`

##### pointerdown

> **pointerdown**: `object` \| (`this`, `event`) => `void`

##### pointerenter

> **pointerenter**: `object` \| (`this`, `event`) => `void`

##### pointerleave

> **pointerleave**: `object` \| (`this`, `event`) => `void`

##### pointermove

> **pointermove**: `object` \| (`this`, `event`) => `void`

##### pointerout

> **pointerout**: `object` \| (`this`, `event`) => `void`

##### pointerover

> **pointerover**: `object` \| (`this`, `event`) => `void`

##### pointerup

> **pointerup**: `object` \| (`this`, `event`) => `void`

##### progress

> **progress**: `object` \| (`this`, `event`) => `void`

##### ratechange

> **ratechange**: `object` \| (`this`, `event`) => `void`

##### reset

> **reset**: `object` \| (`this`, `event`) => `void`

##### resize

> **resize**: `object` \| (`this`, `event`) => `void`

##### scroll

> **scroll**: `object` \| (`this`, `event`) => `void`

##### scrollend

> **scrollend**: `object` \| (`this`, `event`) => `void`

##### securitypolicyviolation

> **securitypolicyviolation**: `object` \| (`this`, `event`) => `void`

##### seeked

> **seeked**: `object` \| (`this`, `event`) => `void`

##### seeking

> **seeking**: `object` \| (`this`, `event`) => `void`

##### select

> **select**: `object` \| (`this`, `event`) => `void`

##### selectionchange

> **selectionchange**: `object` \| (`this`, `event`) => `void`

##### selectstart

> **selectstart**: `object` \| (`this`, `event`) => `void`

##### slotchange

> **slotchange**: `object` \| (`this`, `event`) => `void`

##### stalled

> **stalled**: `object` \| (`this`, `event`) => `void`

##### submit

> **submit**: `object` \| (`this`, `event`) => `void`

##### suspend

> **suspend**: `object` \| (`this`, `event`) => `void`

##### timeupdate

> **timeupdate**: `object` \| (`this`, `event`) => `void`

##### toggle

> **toggle**: `object` \| (`this`, `event`) => `void`

##### touchcancel

> **touchcancel**: `object` \| (`this`, `event`) => `void`

##### touchend

> **touchend**: `object` \| (`this`, `event`) => `void`

##### touchmove

> **touchmove**: `object` \| (`this`, `event`) => `void`

##### touchstart

> **touchstart**: `object` \| (`this`, `event`) => `void`

##### transitioncancel

> **transitioncancel**: `object` \| (`this`, `event`) => `void`

##### transitionend

> **transitionend**: `object` \| (`this`, `event`) => `void`

##### transitionrun

> **transitionrun**: `object` \| (`this`, `event`) => `void`

##### transitionstart

> **transitionstart**: `object` \| (`this`, `event`) => `void`

##### volumechange

> **volumechange**: `object` \| (`this`, `event`) => `void`

##### waiting

> **waiting**: `object` \| (`this`, `event`) => `void`

##### webkitanimationend

> **webkitanimationend**: `object` \| (`this`, `event`) => `void`

##### webkitanimationiteration

> **webkitanimationiteration**: `object` \| (`this`, `event`) => `void`

##### webkitanimationstart

> **webkitanimationstart**: `object` \| (`this`, `event`) => `void`

##### webkittransitionend

> **webkittransitionend**: `object` \| (`this`, `event`) => `void`

##### wheel

> **wheel**: `object` \| (`this`, `event`) => `void`

#### Remarks

Key-value pairs where keys are event types and values are event handlers.

#### Defined in

[core/src/utils/directive.ts:350](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/core/src/utils/directive.ts#L350)

***

### styles?

> `optional` **styles**: [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)\<[`StyleKey`](../type-aliases/StyleKey.md), [`StyleValue`](../type-aliases/StyleValue.md) \| [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`StyleValue`](../type-aliases/StyleValue.md)\>\>\>

Styles to be added to an HTML element.

#### Remarks

Key-value pairs where keys are CSS style properties and values are style values.

#### Defined in

[core/src/utils/directive.ts:371](https://github.com/AmadeusITGroup/AgnosUI/blob/b79d137f5153b87f8823d0da8ea1ce8246ae46bd/core/src/utils/directive.ts#L371)
