const e=`import type {AdaptSlotContentProps} from '@agnos-ui/react/types';
import type {ProgressbarContext} from '@agnos-ui/react/components/progressbar';

export const Coffee = ({state}: AdaptSlotContentProps<ProgressbarContext>) => (
	<div className="position-relative" style={{height: '300px'}}>
		<div className="cup">
			<div className="cup-fill-parent">
				<div className="cup-fill" style={{height: \`\${1.7 * state.percentage}px\`}}>
					{state.percentage >= 50 ? (
						<>
							<div className="bubble bubble-1"></div>
							<div className="bubble bubble-2"></div>
							<div className="bubble bubble-3"></div>
						</>
					) : null}
				</div>
			</div>
		</div>
	</div>
);
`;export{e as default};
