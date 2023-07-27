# @agnos-ui/page-objects

[![npm](https://img.shields.io/npm/v/@agnos-ui/page-objects)](https://www.npmjs.com/package/@agnos-ui/page-objects)

Page objects to be used when testing AgnosUI-based applications with Playwright.

## Installation

```sh
npm install -D @agnos-ui/page-objects
```

## Usage

Here is a sample test using the `RatingPO`:

```ts
import {expect, test} from '@playwright/test';
import {RatingPO} from '@agnos-ui/page-objects';

test(`Click on rating star`, async ({page}) => {
	const ratingPO = new RatingPO(page);
	await ratingPO.locatorRoot.waitFor();
	await ratingPO.locatorStar(4).click();
});
```
