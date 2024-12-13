import type {SlotContent} from '@agnos-ui/angular-headless';
import {BaseWidgetDirective, callWidgetFactory, ComponentTemplate, SlotDirective, UseDirective} from '@agnos-ui/angular-headless';
import {ChangeDetectionStrategy, Component, Directive, inject, input, output, TemplateRef, viewChild} from '@angular/core';
import type {TreeContext, TreeItem, NormalizedTreeItem, TreeSlotItemContext, TreeWidget} from './tree.gen';
import {createTree} from './tree.gen';

/**
 * Directive to provide a template reference for tree structure.
 *
 * This directive uses a template reference to render the {@link TreeContext}.
 */
@Directive({selector: 'ng-template[auTreeStructure]', standalone: true})
export class TreeStructureDirective {
	public templateRef = inject(TemplateRef<TreeContext>);
	static ngTemplateContextGuard(_dir: TreeStructureDirective, context: unknown): context is TreeContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, TreeStructureDirective, SlotDirective],
	template: `
		<ng-template auTreeStructure #structure let-state="state" let-directives="directives" let-api="api">
			<ul role="tree" class="au-tree {{ state.className() }}" [auUse]="directives.navigationDirective">
				@for (node of state.normalizedNodes(); track trackNode($index, node)) {
					<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: node}" />
				}
			</ul>
		</ng-template>
	`,
})
class TreeDefaultStructureSlotComponent {
	readonly structure = viewChild.required<TemplateRef<TreeContext>>('structure');

	trackNode(index: number, node: NormalizedTreeItem): string {
		return node.label + node.level + index;
	}
}

/**
 * A constant representing the default slot for tree structure.
 */
export const treeDefaultSlotStructure: SlotContent<TreeContext> = new ComponentTemplate(TreeDefaultStructureSlotComponent, 'structure');

/**
 * Directive to provide a template reference for tree item toggle.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
@Directive({selector: 'ng-template[auTreeItemToggle]', standalone: true})
export class TreeItemToggleDirective {
	public templateRef = inject(TemplateRef<TreeSlotItemContext>);
	static ngTemplateContextGuard(_dir: TreeItemToggleDirective, context: unknown): context is TreeSlotItemContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, TreeItemToggleDirective],
	template: `
		<ng-template auTreeItemToggle #toggle let-directives="directives" let-item="item">
			@if (item.children.length > 0) {
				<button [auUse]="[directives.itemToggleDirective, {item}]">
					<span class="au-tree-expand-icon-svg"></span>
				</button>
			} @else {
				<span class="au-tree-expand-icon-placeholder"></span>
			}
		</ng-template>
	`,
})
class TreeDefaultItemToggleSlotComponent {
	readonly toggle = viewChild.required<TemplateRef<TreeSlotItemContext>>('toggle');
}

/**
 * A constant representing the default slot for tree item toggle.
 */
export const treeDefaultItemToggle: SlotContent<TreeSlotItemContext> = new ComponentTemplate(TreeDefaultItemToggleSlotComponent, 'toggle');

/**
 * Directive to provide a template reference for tree item content.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
@Directive({selector: 'ng-template[auTreeItemContent]', standalone: true})
export class TreeItemContentDirective {
	public templateRef = inject(TemplateRef<TreeSlotItemContext>);
	static ngTemplateContextGuard(_dir: TreeItemContentDirective, context: unknown): context is TreeSlotItemContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, TreeItemContentDirective],
	template: `
		<ng-template auTreeItemContent #treeItemContent let-state="state" let-directives="directives" let-item="item" let-api="api">
			<span class="au-tree-item">
				<ng-template [auSlot]="state.itemToggle()" [auSlotProps]="{state, api, directives, item}" />
				{{ item.label }}
			</span>
		</ng-template>
	`,
})
class TreeDefaultItemContentSlotComponent {
	readonly treeItemContent = viewChild.required<TemplateRef<TreeSlotItemContext>>('treeItemContent');
}

/**
 * A constant representing the default slot for tree item.
 */
export const treeDefaultSlotItemContent: SlotContent<TreeSlotItemContext> = new ComponentTemplate(
	TreeDefaultItemContentSlotComponent,
	'treeItemContent',
);

/**
 * Directive to provide a template reference for tree item.
 *
 * This directive uses a template reference to render the {@link TreeSlotItemContext}.
 */
@Directive({selector: 'ng-template[auTreeItem]', standalone: true})
export class TreeItemDirective {
	public templateRef = inject(TemplateRef<TreeSlotItemContext>);
	static ngTemplateContextGuard(_dir: TreeItemDirective, context: unknown): context is TreeSlotItemContext {
		return true;
	}
}

@Component({
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseDirective, SlotDirective, TreeItemDirective],
	template: `
		<ng-template auTreeItem #treeItem let-state="state" let-directives="directives" let-item="item" let-api="api">
			<li [auUse]="[directives.itemAttributesDirective, {item}]">
				<ng-template [auSlot]="state.itemContent()" [auSlotProps]="{state, api, directives, item}" />
				@if (state.expandedMap().get(item)) {
					<ul role="group">
						@for (child of item.children; track trackNode($index, child)) {
							<ng-template [auSlot]="state.item()" [auSlotProps]="{state, api, directives, item: child}" />
						}
					</ul>
				}
			</li>
		</ng-template>
	`,
})
class TreeDefaultItemSlotComponent {
	readonly treeItem = viewChild.required<TemplateRef<TreeSlotItemContext>>('treeItem');

	trackNode(index: number, node: NormalizedTreeItem) {
		return node.label + node.level + index;
	}
}

/**
 * A constant representing the default slot for tree item.
 */
export const treeDefaultSlotItem: SlotContent<TreeSlotItemContext> = new ComponentTemplate(TreeDefaultItemSlotComponent, 'treeItem');

/**
 * TreeComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable tree widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	selector: '[auTree]',
	standalone: true,
	imports: [SlotDirective],
	template: ` <ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" /> `,
})
export class TreeComponent extends BaseWidgetDirective<TreeWidget> {
	constructor() {
		super(
			callWidgetFactory({
				factory: createTree,
				widgetName: 'tree',
				defaultConfig: {
					structure: treeDefaultSlotStructure,
					item: treeDefaultSlotItem,
					itemContent: treeDefaultSlotItemContent,
					itemToggle: treeDefaultItemToggle,
				},
				events: {
					onExpandToggle: (item: NormalizedTreeItem) => this.expandToggle.emit(item),
				},
				slotTemplates: () => ({
					structure: this.slotStructureFromContent()?.templateRef,
					item: this.slotItemFromContent()?.templateRef,
					itemContent: this.slotItemContentFromContent()?.templateRef,
					itemToggle: this.slotItemToggleFromContent()?.templateRef,
				}),
			}),
		);
	}
	/**
	 * Optional accessibility label for the tree if there is no explicit label
	 *
	 * @defaultValue `''`
	 */
	readonly ariaLabel = input<string>(undefined, {alias: 'auAriaLabel'});
	/**
	 * Array of the tree nodes to display
	 *
	 * @defaultValue `[]`
	 */
	readonly nodes = input<TreeItem[]>(undefined, {alias: 'auNodes'});
	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `''`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});
	/**
	 * Retrieves expand items of the TreeItem
	 *
	 * @param node - HTML element that is representing the expand item
	 *
	 * @defaultValue
	 * ```ts
	 * (node: HTMLElement) => node.querySelectorAll('button')
	 * ```
	 */
	readonly navSelector = input<(node: HTMLElement) => NodeListOf<HTMLElement>>(undefined, {alias: 'auNavSelector'});
	/**
	 * Return the value for the 'aria-label' attribute of the toggle
	 * @param label - tree item label
	 *
	 * @defaultValue
	 * ```ts
	 * (label: string) => `Toggle ${label}`
	 * ```
	 */
	readonly ariaLabelToggleFn = input<(label: string) => string>(undefined, {alias: 'auAriaLabelToggleFn'});

	/**
	 * An event emitted when the user toggles the expand of the TreeItem.
	 *
	 * Event payload is equal to the TreeItem clicked.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly expandToggle = output<NormalizedTreeItem>({alias: 'auExpandToggle'});

	/**
	 * Slot to change the default tree item content
	 */
	readonly itemContent = input<SlotContent<TreeSlotItemContext>>(undefined, {alias: 'auItemContent'});
	readonly slotItemContentFromContent = viewChild(TreeItemContentDirective);

	/**
	 * Slot to change the default display of the tree
	 */
	readonly structure = input<SlotContent<TreeContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = viewChild(TreeStructureDirective);

	/**
	 * Slot to change the default tree item toggle
	 */
	readonly itemToggle = input<SlotContent<TreeSlotItemContext>>(undefined, {alias: 'auItemToggle'});
	readonly slotItemToggleFromContent = viewChild(TreeItemToggleDirective);

	/**
	 * Slot to change the default tree item
	 */
	readonly item = input<SlotContent<TreeSlotItemContext>>(undefined, {alias: 'auItem'});
	readonly slotItemFromContent = viewChild(TreeItemDirective);
}
