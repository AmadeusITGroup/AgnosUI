import {describe, expect, test} from 'vitest';
import type {Partial2Levels} from './config';
import {createWidgetsConfig, mergeInto} from './config';

describe('defaultConfig', () => {
	test(`Basic functionalities`, () => {
		type CfgType = {w: {a: number; b: number; c: number}};
		const parentCfg$ = createWidgetsConfig<CfgType>();
		parentCfg$.set({w: {a: 1}});
		const childCfg$ = createWidgetsConfig(parentCfg$);
		const grandChildCfg$ = createWidgetsConfig(childCfg$);
		const grandChildValues: Partial2Levels<CfgType>[] = [];
		grandChildCfg$.subscribe((value) => grandChildValues.push(value));
		const otherChildCfg$ = createWidgetsConfig(parentCfg$);
		const otherChildValues: Partial2Levels<CfgType>[] = [];
		otherChildCfg$.subscribe((value) => otherChildValues.push(value));
		expect(grandChildValues).toEqual([{w: {a: 1}}]);
		expect(otherChildValues).toEqual([{w: {a: 1}}]);
		childCfg$.set({w: {b: 2}});
		expect(grandChildValues).toEqual([{w: {a: 1}}, {w: {a: 1, b: 2}}]);
		expect(otherChildValues).toEqual([{w: {a: 1}}]);
		otherChildCfg$.set({w: {c: 3}});
		expect(grandChildValues).toEqual([{w: {a: 1}}, {w: {a: 1, b: 2}}]);
		expect(otherChildValues).toEqual([{w: {a: 1}}, {w: {a: 1, c: 3}}]);
		grandChildCfg$.set({w: {b: 4}});
		expect(grandChildValues).toEqual([{w: {a: 1}}, {w: {a: 1, b: 2}}, {w: {a: 1, b: 4}}]);
		expect(otherChildValues).toEqual([{w: {a: 1}}, {w: {a: 1, c: 3}}]);
		grandChildCfg$.set({w: {a: 5, b: undefined}});
		expect(grandChildValues).toEqual([{w: {a: 1}}, {w: {a: 1, b: 2}}, {w: {a: 1, b: 4}}, {w: {a: 5, b: 2}}]);
		expect(otherChildValues).toEqual([{w: {a: 1}}, {w: {a: 1, c: 3}}]);
	});

	test(`adaptParentConfig`, () => {
		type CfgType = {w: {a: number; b: number; c: number}};
		const parentCfg$ = createWidgetsConfig<CfgType>();
		const parentCfgValues: Partial2Levels<CfgType>[] = [];
		parentCfg$.subscribe((value) => parentCfgValues.push(value));
		const childCfg$ = createWidgetsConfig(parentCfg$, (parentCfg) => {
			if (parentCfg.w?.a) {
				parentCfg.w.a++;
			} else {
				if (!parentCfg.w) {
					parentCfg.w = {};
				}
				parentCfg.w.a = 0;
			}
			return parentCfg;
		});
		const childCfgValues: Partial2Levels<CfgType>[] = [];
		childCfg$.subscribe((value) => childCfgValues.push(value));
		expect(parentCfgValues).toEqual([{}]);
		expect(childCfgValues).toEqual([{w: {a: 0}}]);
		parentCfg$.set({w: {a: 2}});
		expect(parentCfgValues).toEqual([{}, {w: {a: 2}}]);
		expect(childCfgValues).toEqual([{w: {a: 0}}, {w: {a: 3}}]);
		childCfg$.set({w: {a: 9}});
		expect(parentCfgValues).toEqual([{}, {w: {a: 2}}]);
		expect(childCfgValues).toEqual([{w: {a: 0}}, {w: {a: 3}}, {w: {a: 9}}]);
		childCfg$.set({w: {}});
		expect(parentCfgValues).toEqual([{}, {w: {a: 2}}]);
		expect(childCfgValues).toEqual([{w: {a: 0}}, {w: {a: 3}}, {w: {a: 9}}, {w: {a: 3}}]);
	});
});

describe('mergeInto', () => {
	test('Basic functionalities', () => {
		expect(mergeInto(undefined, undefined, 2)).toEqual(undefined);
		expect(mergeInto(undefined, {}, 2)).toEqual({});
		expect(mergeInto({}, undefined, 2)).toEqual({});
		expect(mergeInto(undefined, {rating: {}}, 2)).toEqual({rating: {}});
		expect(mergeInto({rating: {}}, undefined, 2)).toEqual({rating: {}});
		expect(mergeInto(undefined, {rating: {className: 'a'}}, 2)).toEqual({rating: {className: 'a'}});
		expect(mergeInto({rating: {className: 'a'}}, undefined, 2)).toEqual({rating: {className: 'a'}});
		expect(mergeInto({}, {rating: {className: 'a'}}, 2)).toEqual({rating: {className: 'a'}});
		expect(mergeInto({rating: {className: 'a'}}, {}, 2)).toEqual({rating: {className: 'a'}});
		expect(mergeInto({rating: {}}, {rating: {className: 'a'}}, 2)).toEqual({rating: {className: 'a'}});
		expect(mergeInto({rating: {className: 'a'}}, {rating: {}}, 2)).toEqual({rating: {className: 'a'}});
		expect(mergeInto({rating: {className: 'b'}}, {rating: {className: 'a'}}, 2)).toEqual({rating: {className: 'a'}});
		expect(mergeInto({rating: {className: 'b'}}, {rating: {className: undefined}}, 2)).toEqual({rating: {className: 'b'}});
		expect(mergeInto({rating: {}}, {rating: {className: undefined}}, 2)).toEqual({rating: {className: undefined}});
		expect(mergeInto({rating: {className: undefined}}, {rating: {}}, 2)).toEqual({rating: {className: undefined}});
		expect(mergeInto({rating: {className: undefined}}, {rating: {min: 5}}, 2)).toEqual({rating: {className: undefined, min: 5}});
		expect(mergeInto({rating: {extra: {a: 1}}}, {rating: {extra: {b: 2}}}, 2)).toEqual({rating: {extra: {b: 2}}});
		expect(mergeInto({a: {}}, {a: 'b'}, 2)).toEqual({a: 'b'});
	});

	test('Invalid cases', () => {
		expect(() => {
			mergeInto<string | {a: string}>('a', {a: 'b'}, 2);
		}).toThrow();
	});
});
