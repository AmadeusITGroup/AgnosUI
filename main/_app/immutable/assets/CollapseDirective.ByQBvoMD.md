## Extends

- [`BaseWidgetDirective`](BaseWidgetDirective.md)\<`CollapseWidget`\>

## Constructors

### new CollapseDirective()

> **new CollapseDirective**(): [`CollapseDirective`](CollapseDirective.md)

#### Returns

[`CollapseDirective`](CollapseDirective.md)

#### Overrides

[`BaseWidgetDirective`](BaseWidgetDirective.md).[`constructor`](BaseWidgetDirective.md#constructors)

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:85](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L85)

## Properties

### animated

> **animated**: `undefined` \| `boolean`

If `true`, collapse closing and opening will be animated.

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:25](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L25)

***

### animatedOnInit

> **animatedOnInit**: `undefined` \| `boolean`

If `true`, collapse opening will be animated at init time.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:18](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L18)

***

### className

> **className**: `undefined` \| `string`

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:32](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L32)

***

### hidden

> **hidden**: `EventEmitter`\<`void`\>

Callback called when the collapse is hidden.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:73](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L73)

***

### horizontal

> **horizontal**: `undefined` \| `boolean`

If `true`, collapse will be done horizontally.

#### Default Value

`false`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:39](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L39)

***

### id

> **id**: `undefined` \| `string`

id of the collapse

#### Default Value

`''`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:53](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L53)

***

### shown

> **shown**: `EventEmitter`\<`void`\>

Callback called when the collapse is shown.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:83](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L83)

***

### visible

> **visible**: `undefined` \| `boolean`

If `true` the collapse is visible to the user

#### Default Value

`true`

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:46](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L46)

***

### visibleChange

> **visibleChange**: `EventEmitter`\<`boolean`\>

Callback called when the collapse visibility changed.

#### Default Value

```ts
() => {}
```

#### Defined in

[angular/bootstrap/src/components/collapse/collapse.component.ts:63](https://github.com/AmadeusITGroup/AgnosUI/blob/926df6a835f4277792082a9c739e936e84a280da/angular/bootstrap/src/components/collapse/collapse.component.ts#L63)

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
