import type {CarouselDirectives, CarouselContext} from '@agnos-ui/react-bootstrap/components/carousel';
import type {PointerEvent, TouchEvent} from 'react';
import {useCallback, useEffect, useRef, useState} from 'react';
import '@agnos-ui/common/samples/carousel/autoplay.css';
import PlaySvg from 'bootstrap-icons/icons/play-fill.svg?react';
import PauseSvg from 'bootstrap-icons/icons/pause-fill.svg?react';
import clsx from 'clsx';
import {useDirective} from '@agnos-ui/react-bootstrap/utils/directive';

const AutoplayNavigationTabItem = ({
	active,
	tabIndicator,
	index,
	id,
}: {
	active: boolean;
	tabIndicator: CarouselDirectives['tabIndicator'];
	index: number;
	id: string;
}) => (
	<div className="page-item">
		<button type="button" className={clsx(['page-link', active && 'active'])} {...useDirective(tabIndicator, {index, id})}>
			{index + 1}
		</button>
	</div>
);

export const AutoplayNavigation = ({
	state,
	api,
	directives,
	onPlayingChange,
}: CarouselContext<any> & {onPlayingChange: (playing: boolean) => void}) => {
	const [isPlaying, setIsPlaying] = useState(true);

	const onPointerDown = useCallback((e: PointerEvent) => e.nativeEvent.preventDefault(), []);
	const onTouchStart = useCallback((e: TouchEvent) => e.nativeEvent.stopPropagation(), []);
	const onClick = useCallback(() => {
		if (isPlaying) {
			api.plugins()!.autoplay.stop();
		} else {
			api.plugins()!.autoplay.play();
		}
	}, [api, isPlaying]);
	const refProgressbar = useRef<HTMLDivElement>(null);

	const launchProgressbar = useCallback(() => {
		refProgressbar.current!.style.transition = 'none';
		refProgressbar.current!.style.width = '0%';
		window.requestAnimationFrame(() => {
			window.setTimeout(() => {
				refProgressbar.current!.style.transition = `width ${api.plugins()!.autoplay.timeUntilNext()}ms linear`;
				refProgressbar.current!.style.width = '100%';
			});
		});
	}, [api, refProgressbar]);

	useEffect(() => {
		if (state.initialized && refProgressbar.current) {
			api
				.emblaApi()!
				.on('autoplay:play', () => {
					setIsPlaying(true);
					onPlayingChange(true);
				})
				.on('autoplay:stop', () => {
					setIsPlaying(false);
					onPlayingChange(false);
				})
				.on('autoplay:timerset', () => {
					launchProgressbar();
				})
				.on('autoplay:timerstopped', () => {
					refProgressbar.current!.style.transition = 'none';
					refProgressbar.current!.style.width = '0%';
				});
			launchProgressbar();
		}
	}, [state.initialized, api, onPlayingChange, refProgressbar, launchProgressbar]);

	return (
		<>
			<div className="navigation">
				<div className="d-flex bg-light rounded-4 py-1 px-2" onPointerDown={onPointerDown} onTouchStart={onTouchStart}>
					<button
						type="button"
						className="btn btn-sm btn-outline-primary rounded-5 d-flex align-items-center"
						onClick={onClick}
						aria-label={isPlaying ? 'Pause rotation of slides' : 'Play rotation of slides'}
					>
						{isPlaying ? <PauseSvg /> : <PlaySvg />}
					</button>
				</div>
				<div className="d-flex bg-light rounded-4 py-1 px-3 align-items-center" onPointerDown={onPointerDown} onTouchStart={onTouchStart}>
					<div className="pagination pagination-sm align-items-center" {...useDirective(directives.tabList)}>
						{state.slidesData.map((slideData, index) => (
							<AutoplayNavigationTabItem
								key={slideData.id}
								index={index}
								id={slideData.id}
								active={state.selectedScrollSnap === index}
								tabIndicator={directives.tabIndicator}
							/>
						))}
					</div>
				</div>
			</div>
			<div className={clsx(['progress-container', 'd-none', 'd-sm-flex', !isPlaying && 'opacity-0'])} aria-hidden="true">
				<div className="bg-light rounded-4 py-1 px-3 w-100 d-flex align-items-center">
					<div className="progress w-100">
						<div className="autoplay-progress-bar progress-bar" ref={refProgressbar}></div>
					</div>
				</div>
			</div>
		</>
	);
};
