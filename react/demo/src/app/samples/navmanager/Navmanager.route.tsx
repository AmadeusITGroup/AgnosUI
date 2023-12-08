import type {NavManagerItemConfig} from '@agnos-ui/react/services/navManager';
import {createNavManager} from '@agnos-ui/react/services/navManager';
import {useDirective} from '@agnos-ui/react/utils/directive';
import {useMemo} from 'react';

const NavmanagerSampleLine = ({text}: {text: string}) => {
	const navManager = useMemo(createNavManager, []);
	const navManagerConfig = useMemo(
		(): NavManagerItemConfig => ({
			keys: {
				ArrowLeft: navManager.focusLeft,
				ArrowRight: navManager.focusRight,
				Home: navManager.focusFirst,
				End: navManager.focusLast,
			},
		}),
		[navManager],
	);
	const ref1 = useDirective(navManager.directive, navManagerConfig);
	const ref2 = useDirective(navManager.directive, navManagerConfig);
	const ref3 = useDirective(navManager.directive, navManagerConfig);
	const ref4 = useDirective(navManager.directive, navManagerConfig);
	const ref5 = useDirective(navManager.directive, navManagerConfig);

	return (
		<div className="d-flex demo-navmanager-line">
			<input ref={ref1} type="text" defaultValue={text} className="form-control me-1" />
			<span ref={ref2} tabIndex={-1} className="form-control w-auto me-1">
				{text}
			</span>
			<input ref={ref3} tabIndex={-1} type="checkbox" className="form-check-input align-self-center me-1" />
			<input ref={ref4} tabIndex={-1} type="text" defaultValue={text} disabled className="form-control me-1" />
			<input ref={ref5} tabIndex={-1} type="text" defaultValue={text} className="form-control me-1" />
		</div>
	);
};

const NavmanagerSample = () => {
	return (
		<div className="demo-navmanager">
			<div dir="ltr" className="mt-3 pb-3">
				<h2>Left-to-right</h2>
				<NavmanagerSampleLine text="Hello" />
			</div>

			<div dir="rtl" className="mt-3 pb-3">
				<h2>Right-to-left</h2>
				<NavmanagerSampleLine text={'\u05e9\u05c1\u05b8\u05dc\u05d5\u05b9\u05dd'} />
			</div>
		</div>
	);
};
export default NavmanagerSample;
