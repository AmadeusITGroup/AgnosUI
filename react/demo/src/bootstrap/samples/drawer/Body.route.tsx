import type {DrawerApi} from '@agnos-ui/react-bootstrap/components/drawer';
import {Drawer} from '@agnos-ui/react-bootstrap/components/drawer';
import {useRef, useState} from 'react';

const BodyDemo = () => {
	const refDrawer = useRef<DrawerApi>(null);
	const [bodyScroll, setBodyScroll] = useState(false);
	const [backdrop, setBackdrop] = useState(true);

	return (
		<>
			<Drawer
				ref={refDrawer}
				className="inline-start"
				header={
					<div className="d-flex">
						<span>Hi, I am drawer!</span>
						<button className="btn-close ms-auto" onClick={() => refDrawer.current?.close()} aria-label="Close"></button>
					</div>
				}
				backdrop={backdrop}
				bodyScroll={bodyScroll}
			>
				<ul>
					<li>First item</li>
					<li>Second item</li>
					<li>Third item</li>
				</ul>
			</Drawer>
			<div className="d-flex align-items-center mb-3">
				<button className="btn btn-primary" onClick={() => refDrawer.current?.open()}>
					Open Drawer
				</button>
				<div className="form-check form-switch ms-3">
					<input
						className="form-check-input"
						type="checkbox"
						id="bodyScroll"
						role="switch"
						checked={bodyScroll}
						onChange={() => setBodyScroll(!bodyScroll)}
					/>
					<label className="form-check-label" htmlFor="bodyScroll">
						Body scrolling
					</label>
				</div>
				<div className="form-check form-switch ms-3">
					<input
						className="form-check-input"
						type="checkbox"
						id="backdrop"
						role="switch"
						checked={backdrop}
						onChange={() => setBackdrop(!backdrop)}
					/>
					<label className="form-check-label" htmlFor="backdrop">
						Backdrop
					</label>
				</div>
			</div>
			<div style={{width: '100px'}}>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
				velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
				anim id est laborum. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
				possimus. Omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus
				saepe eveniet ut et voluptates. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit. Quis autem vel
				eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.
			</div>
			<button className="btn btn-primary">ScrollToMe</button>
		</>
	);
};

export default BodyDemo;
