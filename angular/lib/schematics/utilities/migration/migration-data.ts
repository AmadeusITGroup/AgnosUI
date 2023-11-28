import type {TemplateMigrator} from './template-migrator';
import type {TypescriptMigrator} from './typescript-migrator';

export interface ComponentMigrator {
	component: string;
	template?: TemplateMigrator;
	typescript?: TypescriptMigrator;
	importMapping?: Record<string, string>;
	wontTouch?: string[];
}

export interface MigrationData {
	depPkg: string;
	components: ComponentMigrator[];
}
