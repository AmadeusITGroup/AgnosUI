Directive to control the collapse behavior of an element.

## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<`CollapseWidget`\>

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, collapse closing and opening will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:28](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L28)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, collapse opening will be animated at init time.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:21](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L21)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:35](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L35)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the collapse is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L76)

***

### horizontal

> **horizontal**: `undefined` \| `boolean`

If `true`, collapse will be done horizontally.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:42](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L42)

***

### id

> **id**: `undefined` \| `string`

id of the collapse

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L56)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the collapse is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:86](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L86)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the collapse is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:49](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L49)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the collapse visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/bootstrap/src/components/collapse/collapse.component.ts#L66)

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

[angular/headless/src/utils/widget.ts:140](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/headless/src/utils/widget.ts#L140)

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

[angular/headless/src/utils/widget.ts:156](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/headless/src/utils/widget.ts#L156)

***

### state

> `get` **state**(): [`AngularState`](../type-aliases/AngularState.md)\<`W`\>

Retrieves the widget state as an Angular [Signal](https://angular.dev/api/core/Signal)

#### Returns

[`AngularState`](../type-aliases/AngularState.md)\<`W`\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:148](https://github.com/AmadeusITGroup/AgnosUI/blob/b5084158fb80710148b0f56305ba18f403a913a3/angular/headless/src/utils/widget.ts#L148)
