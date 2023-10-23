export * from 'vitest';

// gather vitest functions after zone.js/testing has patched them

const jest = globalThis as any;

export const beforeAll = jest.beforeAll;
delete jest.beforeAll;
export const afterAll = jest.afterAll;
delete jest.afterAll;
export const beforeEach = jest.beforeEach;
delete jest.beforeEach;
export const afterEach = jest.afterEach;
delete jest.afterEach;
export const describe = jest.describe;
delete jest.describe;
export const it = jest.it;
delete jest.it;
export const test = jest.test;
delete jest.test;

delete jest.xdescribe;
delete jest.fdescribe;
delete jest.xit;
delete jest.fit;
delete jest.xtest;
delete jest.ftest;

delete jest.jest;
