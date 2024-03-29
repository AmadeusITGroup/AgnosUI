import {Progressbar} from './Progressbar';
import {RadialProgress} from './RadialProgress';

const DaisyUIDemo = () => (
	<>
		<h2 className="text-lg mb-2">Simple progressbars</h2>

		<Progressbar className="progress-primary" value={20} />
		<Progressbar className="progress-info" value={4} max={5} />

		<h2 className="text-lg mt-4 mb-2">Radial progress</h2>

		<div className="flex gap-6">
			<RadialProgress className="text-primary" min={10} max={20} value={13} />
			<RadialProgress className="bg-info text-info-content border-4 border-info" min={9} max={20} value={17} />
		</div>
	</>
);

export default DaisyUIDemo;
