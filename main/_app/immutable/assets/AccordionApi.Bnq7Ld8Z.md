Defined in: [components/accordion/accordion.ts:158](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L158)

Interface representing the API for an accordion component.

## Methods

### collapse()

> **collapse**(`itemId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [components/accordion/accordion.ts:173](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L173)

Given the itemId, will collapse the corresponding accordion-item.

If the itemId is not valid, nothing will happen.

#### Parameters

##### itemId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the collapse operation is completed.

***

### collapseAll()

> **collapseAll**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [components/accordion/accordion.ts:197](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L197)

It will collapse all the accordion-items in the accordion.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when all the collapse operations are completed.

***

### expand()

> **expand**(`itemId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [components/accordion/accordion.ts:165](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L165)

Given the itemId, will expand the corresponding accordion-item.

If the itemId is not valid, nothing will happen.

#### Parameters

##### itemId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the expand operation is completed.

***

### expandAll()

> **expandAll**(): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [components/accordion/accordion.ts:190](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L190)

It will expand all the items in the accordion.

If `closeOthers` is `true` it will expand only the last accordion-item.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when all the expand operations are completed.

***

### registerItem()

> **registerItem**(`itemConfig?`): [`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)

Defined in: [components/accordion/accordion.ts:202](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L202)

Creates a new accordionItem.

#### Parameters

##### itemConfig?

[`PropsConfig`](PropsConfig.md)\<[`AccordionItemProps`](AccordionItemProps.md)\>

#### Returns

[`AccordionItemWidget`](../type-aliases/AccordionItemWidget.md)

***

### toggle()

> **toggle**(`itemId`): [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

Defined in: [components/accordion/accordion.ts:181](https://github.com/AmadeusITGroup/AgnosUI/blob/2a1c0daa70d41626c3c39a7567bb7611124c6268/core/src/components/accordion/accordion.ts#L181)

Given the itemId, will toggle the corresponding accordion-item.

#### Parameters

##### itemId

`string`

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)\<`void`\>

A promise that resolves when the toggle operation is completed.
If the itemId is not valid, nothing will happen.
