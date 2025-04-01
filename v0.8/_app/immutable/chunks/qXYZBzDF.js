const l=`import {Gallery} from './Gallery';
import {photos} from './photo';

const DemoGallery = () => (
	<div className="w-full flex justify-center">
		<div className="max-w-[600px] lg:max-w-[1000px]">
			<Gallery photos={photos} withNavArrows withShowFullscreen />
		</div>
	</div>
);
export default DemoGallery;
`;export{l as default};
