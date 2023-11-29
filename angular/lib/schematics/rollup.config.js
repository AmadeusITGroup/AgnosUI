const typescript = require('@rollup/plugin-typescript');
const nodeResolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const path = require('path');
const {promises: fs} = require('fs');

const distDir = path.join(__dirname, '../../dist/lib/schematics');

const clean = () => ({
	async buildStart() {
		await fs.rm(distDir, {force: true, recursive: true});
	},
});

/** @type {import('rollup').RollupOptions} */
module.exports = [
	{
		input: {
			'ng-add/index': path.join(__dirname, 'ng-add/index.ts'),
			'migrate-ng-bootstrap/index': path.join(__dirname, 'migrate-ng-bootstrap/index.ts'),
		},
		output: [
			{
				dir: distDir,
				format: 'cjs',
			},
		],
		external: ['@angular-devkit/schematics', 'typescript', 'tslib', /^@schematics\/angular/, '@angular-devkit/schematics/tasks', 'jsonc-parser'],
		plugins: [
			clean(),
			commonjs(),
			nodeResolve({extensions: ['.js', '.json', '.node']}),
			json(),
			typescript({
				tsconfig: path.join(__dirname, 'tsconfig.schematics.json'),
			}),
		],
		moduleContext: {
			['../node_modules/@angular/cdk/schematics/update-tool/public-api.mjs']: 'this',
			['../node_modules/@angular/cdk/schematics/utils/index.mjs']: 'this',
			['../node_modules/@angular/cdk/schematics/ng-update/public-api.mjs']: 'this',
		},
	},
];
