Directive to control the collapse behavior of an element.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<`CollapseWidget`\>

## Properties

### animated

> `readonly` **animated**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, collapse closing and opening will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L28)

***

### animatedOnInit

> `readonly` **animatedOnInit**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, collapse opening will be animated at init time.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L21)

***

### className

> `readonly` **className**: `InputSignal`\<`undefined` \| `string`\>

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L35)

***

### hidden

> `readonly` **hidden**: `OutputEmitterRef`\<`void`\>

Callback called when the collapse is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:77](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L77)

***

### horizontal

> `readonly` **horizontal**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true`, collapse will be done horizontally.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L42)

***

### id

> `readonly` **id**: `InputSignal`\<`undefined` \| `string`\>

id of the collapse

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L56)

***

### shown

> `readonly` **shown**: `OutputEmitterRef`\<`void`\>

Callback called when the collapse is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:87](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L87)

***

### visible

> `readonly` **visible**: `InputSignalWithTransform`\<`undefined` \| `boolean`, `unknown`\>

If `true` the collapse is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L49)

***

### visibleChange

> `readonly` **visibleChange**: `OutputEmitterRef`\<`boolean`\>

Callback called when the collapse visibility changed.

#### Default Value

```ts
() => {}
```

#### Param

The new visibility state of the collapse.

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:67](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/bootstrap/src/components/collapse/collapse.component.ts#L67)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/headless/src/utils/widget.ts#L156)

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

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/86167de087fb41c30cc9e3a0be9a6735616eabd9/angular/headless/src/utils/widget.ts#L148)
