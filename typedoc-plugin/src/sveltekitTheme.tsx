import type {PageEvent, Reflection, RenderTemplate} from 'typedoc';
import {DefaultTheme, DefaultThemeRenderContext, JSX} from 'typedoc';

export class SvelteKitThemeRenderContext extends DefaultThemeRenderContext {
	defaultLayout = (template: RenderTemplate<PageEvent<Reflection>>, props: PageEvent<Reflection>) => (
		<>
			{this.hook('body.begin')}
			{this.hook('content.begin')}
			{this.header(props)}
			{template(props)}
			{this.hook('content.end')}
			<div class="overlay"></div>
			{this.hook('body.end')}
		</>
	);
	breadcrumb = () => <></>;
}

export class SvelteKitTheme extends DefaultTheme {
	override getRenderContext(pageEvent: PageEvent<Reflection>): SvelteKitThemeRenderContext {
		return new SvelteKitThemeRenderContext(this, pageEvent, this.application.options);
	}

	override render(page: PageEvent<Reflection>, template: RenderTemplate<PageEvent<Reflection>>): string {
		const templateOutput = this.defaultLayoutTemplate(page, template);
		return JSX.renderElement(templateOutput);
	}
}
