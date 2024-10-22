## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<`CollapseWidget`\>

## Constructors

### new CollapseDirective()

> **new CollapseDirective**(): [`CollapseDirective`](CollapseDirective.md)

#### Returns

[`CollapseDirective`](CollapseDirective.md)

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

## Properties

### \_widget

> `readonly` **\_widget**: [`AngularWidget`](../type-aliases/AngularWidget.md)\<`CollapseWidget`\>

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`_widget`](BaseWidgetDirective.md#_widget)

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:78](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L78)

***

### animated

> **animated**: `undefined` \| `boolean`

If `true`, collapse closing and opening will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L25)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, collapse opening will be animated at init time.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:18](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L18)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L32)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the collapse is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:66](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L66)

***

### horizontal

> **horizontal**: `undefined` \| `boolean`

If `true`, collapse will be done horizontally.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L39)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the collapse is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:76](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L76)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the collapse is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L46)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the collapse visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:56](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/bootstrap/src/components/collapse/collapse.component.ts#L56)

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

[angular/headless/src/utils/widget.ts:110](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/headless/src/utils/widget.ts#L110)

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

[angular/headless/src/utils/widget.ts:126](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/headless/src/utils/widget.ts#L126)

***

### state

> `get` **state**(): [`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

Retrieves the widget state as an Angular Signal

#### Returns

[`Signal`](https://angular.dev/api/core/Signal)\<[`WidgetState`](../type-aliases/WidgetState.md)\<`W`\>\>

the widget state

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`state`](BaseWidgetDirective.md#state)

#### Defined in

[angular/headless/src/utils/widget.ts:118](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/headless/src/utils/widget.ts#L118)

## Methods

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

[angular/headless/src/utils/widget.ts:131](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/headless/src/utils/widget.ts#L131)

***

### ngOnInit()

> **ngOnInit**(): `void`

#### Returns

`void`

#### Inherit Doc

#### Inherited from

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`ngOnInit`](BaseWidgetDirective.md#ngoninit)

#### Defined in

[angular/headless/src/utils/widget.ts:136](https://github.com/AmadeusITGroup/AgnosUI/blob/916ee07971f48b929e18933f453e5343dc18cd71/angular/headless/src/utils/widget.ts#L136)
