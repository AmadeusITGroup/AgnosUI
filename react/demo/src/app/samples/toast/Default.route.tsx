import {Toast} from '@agnos-ui/react/components/toast';

const DefaultToastDemo = () => {
	return (
		<>
			<Toast className="text-bg-primary" slotHeader="I am header" autohide={false}>
				Simple primary toast
			</Toast>
		</>
	);
};
export default DefaultToastDemo;
