export interface CharPosition {
	line: number;
	character: number;
	position: number;
}

export interface NodePosition {
	fileName: string;
	start: CharPosition;
	end: CharPosition;
}

export interface TSDocInfo {
	name: string;
	description: string;
	deprecated?: {version: string; description: string};
	since?: {version: string; description: string};
}

export interface PropertyDoc extends TSDocInfo, NodePosition {
	type: string;
	defaultValue?: string;
}

export interface BaseDeclaration extends TSDocInfo, NodePosition {}

export interface InterfaceDeclarationDoc extends BaseDeclaration {
	declarationType: 'interface';
	properties: PropertyDoc[];
}

export interface TypeDeclarationDoc extends BaseDeclaration {
	declarationType: 'type';
	definition: string;
}

export interface ObjectDeclarationDoc extends BaseDeclaration {
	declarationType: 'object';
	type: string;
	defaultConfigProperties?: Record<string, {text: string; type: string}>;
}

export type DeclarationDoc = InterfaceDeclarationDoc | TypeDeclarationDoc | ObjectDeclarationDoc;

export interface WidgetDoc {
	props: PropertyDoc[];
	state: PropertyDoc[];
	api: PropertyDoc[];
}
