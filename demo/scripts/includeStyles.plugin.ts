import type {Plugin} from 'vite';
import {readFile} from 'fs/promises';
import {existsSync} from 'fs';
import path from 'path';

const __dirname = import.meta.dirname;

const stylePrefix = '@agnos-ui/styles/';
const rawStyleSuffix = '?raw&style';

/**
 * This plugin is used to extract style documentation (variables) from scss files.
 * It works based on imports like `import sliderCssVars from '@agnos-ui/styles/core-bootstrap/_slider?slider-css-vars` and does the following:
 * - Export a default StyleInfo object, which contains a property css which resolves to an import with a specific suffix `raw&style`.
 * - once the import is resolved, the plugin reads the scss file from the package `core-bootstrap/src/scss/_slider.scss` and extracts the content between `// scss-docs-start ${docMarker}` and `// scss-docs-end ${docMarker}`.
 * 	 In the example, the docMarker is `slider-css-vars`.
 * The extracted content is then returned as a default export of the module.
 */
export const includeStyles = (): Plugin => {
	return {
		name: 'include-styles',
		async resolveId(source) {
			if (source.startsWith(stylePrefix)) {
				return {id: source};
			}
		},
		load: {
			order: 'pre',
			async handler(id) {
				if (id.substring(0, id.lastIndexOf('&')).endsWith(rawStyleSuffix)) {
					const docMarker = id.substring(id.lastIndexOf('&') + 1);
					id = id.substring(0, id.length - rawStyleSuffix.length - docMarker.length - 1);
					const fileContent = await readFile(id, 'utf8');
					const startTag = `// scss-docs-start ${docMarker}`;
					const endTag = `// scss-docs-end ${docMarker}`;
					const regex = new RegExp(`${startTag}([\\s\\S]*?)${endTag}`, 'g');
					const match = regex.exec(fileContent);
					return `export default ${JSON.stringify(match ? match[1].trim().replace(/\t/g, '') : '')};`;
				} else if (id.startsWith(stylePrefix)) {
					const parts = id.substring(stylePrefix.length).split('/');
					if (parts.length !== 2) {
						throw new Error('Invalid style path: ' + id);
					}
					const cssFrameworkPackage = parts[0];
					if (parts[1].split('?').length !== 2) {
						throw new Error('Invalid style file or doc marker: ' + id);
					}
					const [fileName, docMarker] = parts[1].split('?');
					const filePath = path.join(__dirname, '..', '..', cssFrameworkPackage, 'src', 'scss', fileName + '.scss');
					let output = `export default {fileName: ${JSON.stringify(fileName)}, docMarker: ${JSON.stringify(docMarker)}, `;
					if (existsSync(filePath)) {
						this.addWatchFile(filePath);
						output += `css: () => import(${JSON.stringify(filePath + rawStyleSuffix + '&' + docMarker)}).then(css=>css.default)`;
					}
					output += `};`;
					return output;
				}
			},
		},
	};
};
