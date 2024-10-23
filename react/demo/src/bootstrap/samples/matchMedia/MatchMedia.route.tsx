import {useObservable} from '@agnos-ui/react-bootstrap/utils/stores';
import {Alert} from '@agnos-ui/react-bootstrap/components/alert';
import {aboveMd$} from './stores';

const MatchMediaDemo = () => {
	const aboveMd = useObservable(aboveMd$);
	return (
		<>
			<div className="mb-2">Resize the window to see the message below updated.</div>
			<Alert dismissible={false} type="info">
				Window width is above 768 px ? <strong>{aboveMd ? 'YES' : 'NO'}</strong>
			</Alert>
		</>
	);
};
export default MatchMediaDemo;
