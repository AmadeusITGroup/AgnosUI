import {type Rule} from '@angular-devkit/schematics';
import {COMPONENTS, MIGRATORS} from './rules';
import type {Schema} from './schema';
import {getMigrationRule} from '../utilities/migration';

export function migrateNgBootstrap(options: Schema): Rule {
	return getMigrationRule({...options, depPkg: '@ng-bootstrap/ng-bootstrap'}, COMPONENTS, MIGRATORS);
}
