import {RuleConfigSeverity} from '@commitlint/types';

export default {
	rules: {
		'body-leading-blank': [RuleConfigSeverity.Warning, 'always'],
		'body-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
		'footer-leading-blank': [RuleConfigSeverity.Warning, 'always'],
		'footer-max-line-length': [RuleConfigSeverity.Error, 'always', 100],
		'header-max-length': [RuleConfigSeverity.Error, 'always', 100],
		'header-trim': [RuleConfigSeverity.Error, 'always'],
		'subject-empty': [RuleConfigSeverity.Error, 'never'],
		'subject-full-stop': [RuleConfigSeverity.Error, 'never', '.'],
		'type-case': [RuleConfigSeverity.Error, 'always', 'lower-case'],
		'type-empty': [RuleConfigSeverity.Error, 'never'],
		'type-enum': [
			RuleConfigSeverity.Error,
			'always',
			['build', 'cd', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test'],
		],
	},
};
