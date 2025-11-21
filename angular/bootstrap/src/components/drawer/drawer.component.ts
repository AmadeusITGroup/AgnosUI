import type {SlotContent, TransitionFn} from '@agnos-ui/angular-headless';
import {
	auBooleanAttribute,
	auNumberOrNullAttribute,
	BaseWidgetDirective,
	callWidgetFactory,
	ComponentTemplate,
	SlotDirective,
	UseDirective,
	UseMultiDirective,
} from '@agnos-ui/angular-headless';
import {
	ChangeDetectionStrategy,
	Component,
	contentChild,
	Directive,
	inject,
	input,
	output,
	TemplateRef,
	viewChild,
	ViewEncapsulation,
} from '@angular/core';
import type {DrawerContext, DrawerWidget} from './drawer.gen';
import {createDrawer} from './drawer.gen';

/**
 * Directive to define the structure of a drawer component.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
@Directive({selector: 'ng-template[auDrawerStructure]'})
export class DrawerStructureDirective {
	public templateRef = inject(TemplateRef<DrawerContext>);
	static ngTemplateContextGuard(_dir: DrawerStructureDirective, context: unknown): context is DrawerContext {
		return true;
	}
}

/**
 * Directive representing the header of a drawer component.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
@Directive({selector: 'ng-template[auDrawerHeader]'})
export class DrawerHeaderDirective {
	public templateRef = inject(TemplateRef<DrawerContext>);
	static ngTemplateContextGuard(_dir: DrawerHeaderDirective, context: unknown): context is DrawerContext {
		return true;
	}
}

/**
 * Directive to represent the body of a drawer notification.
 * This directive uses a template reference to render the {@link DrawerContext}.
 */
@Directive({selector: 'ng-template[auDrawerBody]'})
export class DrawerBodyDirective {
	public templateRef = inject(TemplateRef<DrawerContext>);
	static ngTemplateContextGuard(_dir: DrawerBodyDirective, context: unknown): context is DrawerContext {
		return true;
	}
}

@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [SlotDirective, DrawerStructureDirective],
	template: ` <ng-template auDrawerStructure #structure let-state="state" let-api="api" let-directives="directives">
		<div class="au-drawer-content">
			@if (state.header()) {
				<div class="au-drawer-header">
					<ng-template [auSlot]="state.header()" [auSlotProps]="{state, api, directives}" />
				</div>
			}
			<div class="au-drawer-body">
				<ng-template [auSlot]="state.children()" [auSlotProps]="{state, api, directives}" />
			</div>
		</div>
	</ng-template>`,
})
class DrawerDefaultSlotsComponent {
	readonly structure = viewChild.required<TemplateRef<DrawerContext>>('structure');
}

/**
 * Represents the default slot structure for the drawer component.
 */
export const drawerDefaultSlotStructure: SlotContent<DrawerContext> = new ComponentTemplate(DrawerDefaultSlotsComponent, 'structure');

/**
 * DrawerComponent is an Angular component that extends the BaseWidgetDirective
 * to provide a customizable drawer widget. This component allows for various
 * configurations and customizations through its inputs and outputs.
 */
@Component({
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [UseMultiDirective, SlotDirective, UseDirective],
	selector: '[auDrawer]',
	template: `
		<ng-template #content><ng-content /></ng-template>
		@if (!state.hidden()) {
			<div [auUseMulti]="[directives.drawerPortalDirective, directives.drawerDirective]">
				<div [auUse]="directives.containerDirective">
					<ng-template [auSlot]="state.structure()" [auSlotProps]="{state, api, directives}" />
				</div>
				@if (state.resizable()) {
					<div [auUse]="directives.splitterDirective" [tabIndex]="0"></div>
				}
			</div>
		}
		@if (!state.backdropHidden()) {
			<div [auUseMulti]="[directives.backdropPortalDirective, directives.backdropDirective]"></div>
		}
	`,
	encapsulation: ViewEncapsulation.None,
})
export class DrawerComponent extends BaseWidgetDirective<DrawerWidget> {
	/**
	 * If `true` opening and closing will be animated.
	 *
	 * @defaultValue `true`
	 */
	readonly animated = input(undefined, {alias: 'auAnimated', transform: auBooleanAttribute});

	/**
	 * aria-labelledby attribute to use for the drawer element.
	 *
	 * @defaultValue `''`
	 */
	readonly ariaLabelledBy = input<string>(undefined, {alias: 'auAriaLabelledBy'});

	/**
	 * aria-describedby attribute to use for the drawer element.
	 *
	 * @defaultValue `''`
	 */
	readonly ariaDescribedBy = input<string>(undefined, {alias: 'auAriaDescribedBy'});

	/**
	 * If `true`, the drawer is shown; otherwise, it is hidden.
	 *
	 * @defaultValue `false`
	 */
	readonly visible = input(undefined, {alias: 'auVisible', transform: auBooleanAttribute});

	/**
	 * The transition function for vertically positioned drawer (top, bottom) that will be executed when the drawer is displayed or hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * collapseVerticalTransition
	 * ```
	 */
	readonly verticalTransition = input<TransitionFn>(undefined, {alias: 'auVerticalTransition'});

	/**
	 * The transition function will be executed when the drawer is displayed or hidden.
	 *
	 * @defaultValue
	 * ```ts
	 * collapseHorizontalTransition
	 * ```
	 */
	readonly transition = input<TransitionFn>(undefined, {alias: 'auTransition'});

	/**
	 * The transition to use for the backdrop behind the drawer (if present).
	 *
	 * @defaultValue `fadeTransition`
	 */
	readonly backdropTransition = input<TransitionFn>(undefined, {alias: 'auBackdropTransition'});

	/**
	 * Which element should contain the drawer and backdrop DOM elements.
	 * If it is not null, the drawer and backdrop DOM elements are moved to the specified container.
	 * Otherwise, they stay where the widget is located.
	 *
	 * @defaultValue
	 * ```ts
	 * typeof window !== 'undefined' ? document.body : null
	 * ```
	 */
	readonly container = input<HTMLElement | null>(undefined, {alias: 'auContainer'});

	/**
	 * If `true` displays the backdrop element and disables the body scrolling, otherwise the body of the document is navigable
	 *
	 * @defaultValue `true`
	 */
	readonly backdrop = input(undefined, {alias: 'auBackdrop', transform: auBooleanAttribute});

	/**
	 * If `true` allows body scrolling when the drawer is open.
	 *
	 * @defaultValue `false`
	 */
	readonly bodyScroll = input(undefined, {alias: 'auBodyScroll', transform: auBooleanAttribute});

	/**
	 * Size of the drawer in pixel once the user start interacting.
	 * It corresponds to the height or the width depending on the drawer orientation
	 *
	 * @defaultValue `null`
	 */
	readonly size = input(undefined, {alias: 'auSize', transform: auNumberOrNullAttribute});

	/**
	 * Classes to add on the backdrop DOM element.
	 *
	 * @defaultValue `''`
	 */
	readonly backdropClass = input<string>(undefined, {alias: 'auBackdropClass'});

	/**
	 * CSS classes to be applied on the widget main container
	 *
	 * @defaultValue `'w-full'`
	 */
	readonly className = input<string>(undefined, {alias: 'auClassName'});

	/**
	 * If `true`, the drawer can be resized by the user.
	 *
	 * @defaultValue `false`
	 */
	readonly resizable = input(undefined, {alias: 'auResizable', transform: auBooleanAttribute});

	/**
	 * An event emitted when the drawer size (width or height depending on the orientation).
	 *
	 * Event payload is equal to the newly selected width or height.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly sizeChange = output<number | null>({alias: 'auSizeChange'});

	/**
	 * Event to be triggered when the visible property changes.
	 *
	 * @param visible - new value of the visible propery
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly visibleChange = output<boolean>({alias: 'auVisibleChange'});

	/**
	 * Event to be triggered when the minimized state changes.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly minimizedChange = output<boolean>({alias: 'auMinimizedChange'});

	/**
	 * Event to be triggered when the maximized state changes.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly maximizedChange = output<boolean>({alias: 'auMaximizedChange'});

	/**
	 * Event to be triggered when the user start or stop resizing the drawer.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly resizingChange = output<boolean>({alias: 'auResizingChange'});

	/**
	 * Event to be triggered when the transition is completed and the drawer is not visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly hidden = output<void>({alias: 'auHidden'});

	/**
	 * Event to be triggered when the transition is completed and the drawer is visible.
	 *
	 * @defaultValue
	 * ```ts
	 * () => {}
	 * ```
	 */
	readonly shown = output<void>({alias: 'auShown'});

	constructor() {
		super(
			callWidgetFactory(createDrawer, {
				defaultConfig: {
					structure: drawerDefaultSlotStructure,
				},
				slotTemplates: () => ({
					structure: this.slotStructureFromContent()?.templateRef,
					header: this.slotHeaderFromContent()?.templateRef,
					children: this.slotBodyFromContent()?.templateRef,
				}),
				events: {
					onResizingChange: (event) => this.resizingChange.emit(event),
					onHidden: () => this.hidden.emit(),
					onShown: () => this.shown.emit(),
					onSizeChange: (size: number | null) => {
						this.sizeChange.emit(size);
					},
					onMaximizedChange: (event) => this.maximizedChange.emit(event),
					onMinimizedChange: (event) => this.minimizedChange.emit(event),
					onVisibleChange: (event) => this.visibleChange.emit(event),
				},
				slotChildren: () => this.slotChildren(),
			}),
		);
	}

	/**
	 * Global template for the drawer component
	 */
	readonly structure = input<SlotContent<DrawerContext>>(undefined, {alias: 'auStructure'});
	readonly slotStructureFromContent = contentChild(DrawerStructureDirective);

	/**
	 * Template for the drawer header
	 */
	readonly header = input<SlotContent<DrawerContext>>(undefined, {alias: 'auHeader'});
	readonly slotHeaderFromContent = contentChild(DrawerHeaderDirective);

	/**
	 * Template for the drawer body
	 */
	readonly children = input<SlotContent<DrawerContext>>(undefined, {alias: 'auChildren'});
	readonly slotBodyFromContent = contentChild(DrawerBodyDirective);

	readonly slotChildren = viewChild<TemplateRef<void>>('content');
}
