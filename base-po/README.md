# @agnos-ui/base-po

[![npm](https://img.shields.io/npm/v/@agnos-ui/base-po)](https://www.npmjs.com/package/@agnos-ui/base-po)

Base class to build page objects for end-to-end tests with Playwright.

## Installation

```sh
npm install @agnos-ui/base-po
```

## Usage

```ts
import {BasePO} from '@agnos-ui/base-po';
import {Locator} from '@playwright/test';

export const customComponentSelectors = {
	rootComponent: '.custom',
	otherContent: '.content-class',
};

export class CustomComponentPO extends BasePO {
	selectors = {...customComponentSelectors};

	override getComponentSelector(): string {
		return this.selectors.rootComponent;
	}

	get locatorOtherContent(): Locator {
		return this.locatorRoot.locator(this.selectors.otherContent);
	}
}
```

## Main features

Please refer to the documentation included in [the source code](lib/base.po.ts).
