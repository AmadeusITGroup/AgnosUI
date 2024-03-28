import type {ProgressbarContext} from '@agnos-ui/react/components/progressbar';
import {Progressbar} from '@agnos-ui/react/components/progressbar';
import {WidgetsDefaultConfig} from '@agnos-ui/react/config';

const DefaultDemo = () => (
	<WidgetsDefaultConfig progressbar={{slotDefault: ({state}: ProgressbarContext) => `${state.percentage}%`}}>
		<div className="d-flex flex-column gap-2">
			<Progressbar value={20} />
			<Progressbar value={40} type="success" />
			<Progressbar value={60} type="info" />
			<Progressbar value={80} type="warning" />
			<Progressbar value={100} type="danger" />
		</div>
	</WidgetsDefaultConfig>
);

export default DefaultDemo;
