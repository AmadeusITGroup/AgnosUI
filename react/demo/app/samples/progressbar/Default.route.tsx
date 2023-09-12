import {Progressbar, WidgetsDefaultConfig} from '@agnos-ui/react';

const DefaultDemo = () => (
	<WidgetsDefaultConfig progressbar={{showValue: true}}>
		<div className="d-flex flex-column gap-2">
			<Progressbar value={20} />
			<Progressbar value={40} className="text-bg-success" />
			<Progressbar value={60} className="text-bg-info" />
			<Progressbar value={80} className="text-bg-warning" />
			<Progressbar value={100} className="text-bg-danger" />
		</div>
	</WidgetsDefaultConfig>
);

export default DefaultDemo;
