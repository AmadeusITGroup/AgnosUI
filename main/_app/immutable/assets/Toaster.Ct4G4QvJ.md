Defined in: [core/src/components/toast/toaster.ts:102](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L102)

Create a toaster provider with helpers and state.

## Param

Options for the toaster.

## Type Parameters

### Props

`Props` *extends* [`Partial`](https://www.typescriptlang.org/docs/handbook/utility-types.html#partialtype)\<[`ToastProps`](../interfaces/ToastProps.md)\> = [`ToastProps`](../interfaces/ToastProps.md)

Type of the toast properties.

## Properties

### eventsDirective

> `readonly` **eventsDirective**: [`Directive`](../type-aliases/Directive.md)\<`number`\>

Defined in: [core/src/components/toast/toaster.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L190)

Events directive is used to set events on the Toast component, to keep track for example of pointer enter/leave,
used to pause / resume the timer in case of duration and pauseOnHover are specified.

***

### toasts

> `readonly` **toasts**: [`ReadableSignal`](https://amadeusitgroup.github.io/tansu/interfaces/ReadableSignal.html)\<[`ToasterToast`](../interfaces/ToasterToast.md)\<`Props`\>[]\>

Defined in: [core/src/components/toast/toaster.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L110)

Get the toasts value from the store

#### Returns

The array of toasts.

## Accessors

### timers

#### Get Signature

> **get** **timers**(): `ReadonlyMap`\<`number`, [`ToasterTimer`](../interfaces/ToasterTimer.md)\>

Defined in: [core/src/components/toast/toaster.ts:124](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L124)

Get the timers value from the store

##### Returns

`ReadonlyMap`\<`number`, [`ToasterTimer`](../interfaces/ToasterTimer.md)\>

The map of timers.

## Methods

### addTimer()

> `readonly` **addTimer**(`id`, `duration`): `void`

Defined in: [core/src/components/toast/toaster.ts:143](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L143)

Add timer for a toast

#### Parameters

##### id

`number`

Id of the toast

##### duration

`number` = `...`

Duration of the timer, by default taken from options

#### Returns

`void`

***

### addToast()

> `readonly` **addToast**(`props`): `number`

Defined in: [core/src/components/toast/toaster.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L202)

Helper to add a toast to the viewport.

#### Parameters

##### props

`Props`

Options for the toast.

#### Returns

`number`

The ID of the added toast.

***

### closeAll()

> `readonly` **closeAll**(): `void`

Defined in: [core/src/components/toast/toaster.ts:228](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L228)

Helper to close all toasts at once

#### Returns

`void`

***

### pauseTimer()

> `readonly` **pauseTimer**(`id`): `void`

Defined in: [core/src/components/toast/toaster.ts:157](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L157)

Pause a timer for a toast

#### Parameters

##### id

`number`

Id of the toast

#### Returns

`void`

***

### removeToast()

> `readonly` **removeToast**(`id`): `void`

Defined in: [core/src/components/toast/toaster.ts:215](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L215)

Helper to remove a toast to the viewport.

#### Parameters

##### id

`number`

Id of the toast to remove.

#### Returns

`void`

***

### resumeTimer()

> `readonly` **resumeTimer**(`id`): `void`

Defined in: [core/src/components/toast/toaster.ts:172](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L172)

Resume a timer for a toast

#### Parameters

##### id

`number`

Id of the toast

#### Returns

`void`

***

### updateToasts()

> `readonly` **updateToasts**(): `void`

Defined in: [core/src/components/toast/toaster.ts:221](https://github.com/AmadeusITGroup/AgnosUI/blob/2131406f2f9b571a9ba05c7733baaa44a4e339bf/core/src/components/toast/toaster.ts#L221)

Helper to update toasts when options change

#### Returns

`void`
