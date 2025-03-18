Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:61](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L61)

An abstract base class for widget directives, providing common functionality
for Angular components that interact with widgets.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<[`CarouselWidget`](../type-aliases/CarouselWidget.md)\<`SlideData`\>\>

## Type Parameters

• **SlideData** *extends* `object`

The type of the widget.

## Properties

### align

> `readonly` **align**: `InputSignal`\<`undefined` \| `"start"` \| `"end"` \| `"center"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:147](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L147)

Align the slides relative to the carousel viewport

#### See

[https://www.embla-carousel.com/api/options/#align](https://www.embla-carousel.com/api/options/#align)

#### Default Value

`'center'`

***

### ariaIndicatorLabel

> `readonly` **ariaIndicatorLabel**: `InputSignal`\<`undefined` \| (`index`) => `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:65](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L65)

Aria label for navigation indicators

***

### ariaNextLabel

> `readonly` **ariaNextLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:75](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L75)

Aria label for next button

***

### ariaPrevLabel

> `readonly` **ariaPrevLabel**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:70](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L70)

Aria label for previous button

***

### container

> `readonly` **container**: `InputSignal`\<`undefined` \| `null` \| `string`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L154)

Enables choosing a custom container element which holds the slides. By default, Embla will choose the first direct child element of the root element. Provide a valid CSS selector string.

#### See

[https://www.embla-carousel.com/api/options/#container](https://www.embla-carousel.com/api/options/#container)

***

### containScroll

> `readonly` **containScroll**: `InputSignal`\<`undefined` \| `false` \| `"trimSnaps"` \| `"keepSnaps"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:162](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L162)

Clear leading and trailing empty space that causes excessive scrolling

#### See

[https://www.embla-carousel.com/api/options/#containScroll](https://www.embla-carousel.com/api/options/#containScroll)

#### Default Value

`'trimSnaps'`

***

### direction

> `readonly` **direction**: `InputSignal`\<`undefined` \| `"ltr"` \| `"rtl"`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L83)

Choose content direction between `ltr` and `rtl`

#### See

[https://www.embla-carousel.com/api/options/#direction](https://www.embla-carousel.com/api/options/#direction)

#### Default Value

`'ltr'`

***

### dragFree

> `readonly` **dragFree**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:91](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L91)

Enables momentum scrolling

#### See

[https://www.embla-carousel.com/api/options/#dragFree](https://www.embla-carousel.com/api/options/#dragFree)

#### Default Value

`false`

***

### dragThreshold

> `readonly` **dragThreshold**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:99](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L99)

Drag threshold in pixels

#### See

[https://www.embla-carousel.com/api/options/#dragThreshold](https://www.embla-carousel.com/api/options/#dragThreshold)

#### Default Value

`10`

***

### duration

> `readonly` **duration**: `InputSignalWithTransform`\<`undefined` \| `number`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:107](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L107)

Set scroll duration when triggered by any of the API methods

#### See

[https://www.embla-carousel.com/api/options/#duration](https://www.embla-carousel.com/api/options/#duration)

#### Default Value

`25`

***

### loop

> `readonly` **loop**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:115](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L115)

Enables infinite looping

#### See

[https://www.embla-carousel.com/api/options/#loop](https://www.embla-carousel.com/api/options/#loop)

#### Default Value

`false`

***

### plugins

> `readonly` **plugins**: `InputSignal`\<`undefined` \| `CreatePluginType`\<`LoosePluginType`, \{\}\>[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:139](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L139)

Plugins to extend the carousel with additional features

#### Default Value

`[]`

***

### showNavigationArrows

> `readonly` **showNavigationArrows**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:128](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L128)

If `true`, 'previous' and 'next' navigation arrows will be visible.

***

### showNavigationIndicators

> `readonly` **showNavigationIndicators**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:133](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L133)

If `true`, navigation indicators at the bottom of the slide will be visible.

***

### skipSnaps

> `readonly` **skipSnaps**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:123](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L123)

Allow the carousel to skip scroll snaps if it's dragged vigorously

#### See

[https://www.embla-carousel.com/api/options/#skipsnaps](https://www.embla-carousel.com/api/options/#skipsnaps)

#### Default Value

`false`

***

### slide

> `readonly` **slide**: `InputSignal`\<[`SlotContent`](../type-aliases/SlotContent.md)\<`SlideData`\>\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L172)

The content of each slide in the carousel.

***

### slidesData

> `readonly` **slidesData**: `InputSignal`\<`undefined` \| `SlideData`[]\>

Defined in: [angular/bootstrap/src/components/carousel/carousel.component.ts:167](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/bootstrap/src/components/carousel/carousel.component.ts#L167)

The data for each slide in the carousel.

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/headless/src/utils/widget.ts#L140)

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

Defined in: [angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/headless/src/utils/widget.ts#L156)

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

Defined in: [angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/7ec27a29cb51209334bb6c86adeaed01b24a823b/angular/headless/src/utils/widget.ts#L148)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
