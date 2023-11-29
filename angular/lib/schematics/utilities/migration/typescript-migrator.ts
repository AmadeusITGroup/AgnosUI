import type * as ts from 'typescript';

export type Replacement = [offset: number, width: number, newText: string];

export abstract class TypescriptMigrator {
	/** Returns the data needed to update the given node. */
	abstract getReplacements(node: ts.SourceFile, typeChecker: ts.TypeChecker): Replacement[];
}
