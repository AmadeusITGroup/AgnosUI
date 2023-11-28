export interface Schema {
	/**
	 * Name of the project where AgnosUI library should be installed
	 */
	project: string;
	/**
	 * components to migrate
	 */
	components: ('all' | 'accordion' | 'alert' | 'pagination' | 'progressbar' | 'rating')[];
}
