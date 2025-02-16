import {RuleTester} from '@typescript-eslint/rule-tester';
import {afterAll, describe, test} from 'vitest';

RuleTester.describe = describe;
RuleTester.it = test;
RuleTester.afterAll = afterAll;
