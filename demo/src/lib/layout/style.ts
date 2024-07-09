export interface StyleInfo {
	docMarker: string;
	fileName: string;
	css: () => Promise<string>;
}
