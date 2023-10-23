import {afterAll, afterEach, beforeAll, beforeEach, describe, it, test} from 'vitest';

// exposes vitest functions as jest in the global object so that zone.js/testing can patch them

const jest = globalThis as any;

jest.beforeAll = beforeAll;
jest.afterAll = afterAll;
jest.beforeEach = beforeEach;
jest.afterEach = afterEach;
jest.describe = describe;
jest.it = it;
jest.test = test;

jest.xdescribe = describe.skip;
jest.fdescribe = describe.only;
jest.xit = it.skip;
jest.fit = it.only;
jest.xtest = test.skip;
jest.ftest = test.only;

jest.jest = jest;
