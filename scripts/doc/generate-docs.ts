import * as fs from 'fs';
import * as path from 'path';
import {parseDocs} from './api-doc';
import type {DeclarationDoc, ObjectDeclarationDoc, WidgetDoc} from './types';

console.log('Doc extraction started');

/**
 * Extracts documentation from sources to a single TS file
 * used by the demo application
 */

const root = path.resolve(__dirname, '../..');
const allDoc = parseDocs(path.join(root, 'core/lib/index.ts'));

const doc = {
	widgets: {} as Record<string, WidgetDoc>,
};
const widgetNames = Object.values(allDoc)
	.filter((item) => item.declarationType === 'type' && item.definition.startsWith('Widget<') && item.name.length > 6 && item.name.endsWith('Widget'))
	.map(({name}) => name.substring(0, name.length - 6))
	.sort();

const getInterfaceProperties = (item: DeclarationDoc | undefined) => {
	if (!item) {
		return [];
	}
	if (item.declarationType != 'interface') {
		throw new Error('Expected an interface for ' + item.name);
	}
	return item.properties;
};

// Widget Refactor for the doc
const widgets = doc.widgets;
for (const widgetName of widgetNames) {
	const json: WidgetDoc = {
		props: getInterfaceProperties(allDoc[`${widgetName}Props`]),
		state: getInterfaceProperties(allDoc[`${widgetName}State`]),
		api: getInterfaceProperties(allDoc[`${widgetName}Api`]),
	};

	const defaultProps = (allDoc[`get${widgetName}DefaultConfig`] as ObjectDeclarationDoc)?.defaultConfigProperties;
	if (defaultProps) {
		for (const prop of json.props) {
			const defaultValue = defaultProps[prop.name];
			if (defaultValue) {
				prop.defaultValue = defaultValue.text;
			}
		}
	}

	widgets[`${widgetName[0].toLowerCase()}${widgetName.substring(1)}`] = json;
}

const dstDir = path.join(root, 'core/dist');
fs.mkdirSync(dstDir, {recursive: true});
fs.writeFileSync(path.join(dstDir, 'api.json'), JSON.stringify(doc, null, '\t'));

console.log('Doc extraction finished');
