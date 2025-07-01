Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:15](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L15)

Directive to control the collapse behavior of an element.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<`CollapseWidget`\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L28)

If `true`, collapse closing and opening will be animated.

#### Default Value

`true`

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L21)

If `true`, collapse opening will be animated at init time.

#### Default Value

`false`

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L35)

CSS classes to be applied on the widget main container

#### Default Value

`''`

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L77)

Callback called when the collapse is hidden.

#### Default Value

```ts
() => {}
```

***

### horizontal

> `readonly` **horizontal**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L42)

If `true`, collapse will be done horizontally.

#### Default Value

`false`

***

### id

> `readonly` **id**: `InputSignal`\<`undefined` \| `string`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L56)

id of the collapse

#### Default Value

`''`

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L87)

Callback called when the collapse is shown.

#### Default Value

```ts
() => {}
```

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L49)

If `true` the collapse is visible to the user

#### Default Value

`true`

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Defined in: [angular/bootstrap/src/components/collapse/collapse.component.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/bootstrap/src/components/collapse/collapse.component.ts#L67)

Callback called when the collapse visibility changed.

#### Default Value

```ts
() => {}
```

#### Param

The new visibility state of the collapse.

## Accessors

### api

#### Get Signature

> **get** **api**(): `W`\[`"api"`\]

Defined in: [angular/headless/src/utils/widget.ts:138](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/headless/src/utils/widget.ts#L138)

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

Defined in: [angular/headless/src/utils/widget.ts:154](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/headless/src/utils/widget.ts#L154)

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

Defined in: [angular/headless/src/utils/widget.ts:146](https://github.com/AmadeusITGroup/AgnosUI/blob/e47b0432590bb133e552c65d572fa1350881fd61/angular/headless/src/utils/widget.ts#L146)

Retrieves the widget state. Each property of the state is exposed through an Angular [Signal](https://angular.dev/api/core/Signal)

##### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)
