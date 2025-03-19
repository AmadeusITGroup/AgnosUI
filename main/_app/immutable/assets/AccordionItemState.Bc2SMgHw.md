Defined in: [core/src/components/accordion/accordion.ts:346](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L346)

Represents the state of an accordion item.

## Extends

- `AccordionItemCommonPropsAndState`

## Properties

### bodyClassName

> **bodyClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:304](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L304)

CSS classes to add on the accordion-item body DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyClassName`

***

### bodyContainerClassName

> **bodyContainerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:300](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L300)

CSS classes to add on the accordion-item body container DOM element.
The accordion-item body container is the DOM element on what the itemTransition is applied.

#### Inherited from

`AccordionItemCommonPropsAndState.bodyContainerClassName`

***

### buttonClassName

> **buttonClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:295](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L295)

CSS classes to add on the accordion-item collapse DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.buttonClassName`

***

### className

> **className**: `string`

Defined in: [core/src/components/commonProps.ts:10](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/commonProps.ts#L10)

CSS classes to be applied on the widget main container

#### Default Value

`''`

#### Inherited from

`AccordionItemCommonPropsAndState.className`

***

### disabled

> **disabled**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:283](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L283)

If `true`, the accordion-item will be disabled.
It will not react to user's clicks, but still will be possible to toggle programmatically.

#### Inherited from

`AccordionItemCommonPropsAndState.disabled`

***

### headerClassName

> **headerClassName**: `string`

Defined in: [core/src/components/accordion/accordion.ts:291](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L291)

CSS classes to add on the accordion-item header DOM element.

#### Inherited from

`AccordionItemCommonPropsAndState.headerClassName`

***

### headingTag

> **headingTag**: `string`

Defined in: [core/src/components/accordion/accordion.ts:308](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L308)

The html tag to use for the accordion-item-header.

#### Inherited from

`AccordionItemCommonPropsAndState.headingTag`

***

### id

> **id**: `string`

Defined in: [core/src/components/accordion/accordion.ts:287](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L287)

The id of the accordion-item. It can be used for controlling the accordion-item via the accordion api.

#### Inherited from

`AccordionItemCommonPropsAndState.id`

***

### shouldBeInDOM

> **shouldBeInDOM**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:351](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L351)

If `true` the content of the accordion-item collapse should be in DOM. Its value depends on the
value of the `visible` and `destroyOnHide`.

***

### visible

> **visible**: `boolean`

Defined in: [core/src/components/accordion/accordion.ts:278](https://github.com/AmadeusITGroup/AgnosUI/blob/a8f09f9f0c2e250cefeb740de3961aa92ffacabf/core/src/components/accordion/accordion.ts#L278)

If `true`, the accordion-item will be visible (expanded). Otherwise, it will be hidden (collapsed).

#### Inherited from

`AccordionItemCommonPropsAndState.visible`
