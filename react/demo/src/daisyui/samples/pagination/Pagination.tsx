import {type PaginationProps, createPagination} from '@agnos-ui/react-headless/components/pagination';
import {useWidgetWithConfig} from '@agnos-ui/react-headless/config';
import clsx from 'clsx';

export function Pagination(props: Partial<PaginationProps>) {
	const {
		state,
		api: {first, last, next, previous, select},
	} = useWidgetWithConfig(createPagination, props, 'pagination');

	return (
		<nav aria-label={state.ariaLabel}>
			<div className={clsx('join', state.className)}>
				{state.boundaryLinks && (
					<button
						className="join-item btn btn-outline"
						aria-label={state.ariaFirstLabel}
						onClick={() => first()}
						disabled={state.previousDisabled}
						aria-disabled={state.previousDisabled ? 'true' : undefined}
						tabIndex={state.previousDisabled ? -1 : undefined}
					>
						<span aria-hidden="true"> « </span>
					</button>
				)}
				{state.directionLinks && (
					<button
						className="join-item btn btn-outline"
						disabled={state.previousDisabled}
						aria-label={state.ariaPreviousLabel}
						onClick={() => previous()}
						tabIndex={state.previousDisabled ? -1 : undefined}
						aria-disabled={state.previousDisabled ? 'true' : undefined}
					>
						<span aria-hidden="true"> ‹ </span>
					</button>
				)}
				{state.pages.map((page) => (
					<button
						key={page}
						className={clsx('join-item', 'btn', 'btn-outline', page === state.page ? 'btn-active' : '')}
						aria-current={page === state.page ? 'page' : undefined}
						tabIndex={page === -1 ? -1 : state.disabled ? -1 : undefined}
						onClick={page === -1 ? () => {} : () => select(page)}
						disabled={page === -1 || state.disabled}
					>
						{page}
						{state.page === page && <span className="sr-only">{state.activeLabel}</span>}
					</button>
				))}
				{state.directionLinks && (
					<button
						className="join-item btn btn-outline"
						disabled={state.nextDisabled}
						aria-label={state.ariaNextLabel}
						onClick={() => next()}
						tabIndex={state.nextDisabled ? -1 : undefined}
						aria-disabled={state.nextDisabled ? 'true' : undefined}
					>
						<span aria-hidden="true"> › </span>
					</button>
				)}
				{state.boundaryLinks && (
					<button
						className="join-item btn btn-outline"
						aria-label={state.ariaLastLabel}
						onClick={() => last()}
						disabled={state.nextDisabled}
						tabIndex={state.nextDisabled ? -1 : undefined}
						aria-disabled={state.nextDisabled ? 'true' : undefined}
					>
						<span aria-hidden="true"> » </span>
					</button>
				)}
			</div>
			<div aria-live="polite" className="sr-only">
				{`${state.ariaLiveLabelText}`}
			</div>
		</nav>
	);
}
