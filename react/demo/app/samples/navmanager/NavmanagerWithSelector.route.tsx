import type {NavManagerItemConfig} from '@agnos-ui/core';
import {createNavManager} from '@agnos-ui/core';
import {useDirective} from '@agnos-ui/react-headless/utils';
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
			selector: (divElement) => divElement.querySelectorAll('input,span'),
		}),
		[navManager],
	);
	const ref = useDirective(navManager.directive, navManagerConfig);

	return (
		<div className="d-flex demo-navmanager-line" ref={ref}>
			<input type="text" defaultValue={text} className="form-control me-1" />
			<span tabIndex={-1} className="form-control w-auto me-1">
				{text}
			</span>
			<input tabIndex={-1} type="checkbox" className="form-check-input align-self-center me-1" />
			<input tabIndex={-1} type="text" defaultValue={text} disabled className="form-control me-1" />
			<input tabIndex={-1} type="text" defaultValue={text} className="form-control me-1" />
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
