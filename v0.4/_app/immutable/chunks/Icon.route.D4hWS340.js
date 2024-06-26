const t=`<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte-bootstrap/config';
	import IconStructure from './IconStructure.svelte';

	createWidgetsDefaultConfig().set({alert: {dismissible: false, className: 'd-flex align-items-center', structure: IconStructure}});
<\/script>

<Alert type="success">Alert success with a customisable icon</Alert>
<Alert type="warning">Alert warning with a customisable icon</Alert>
<Alert type="danger">Alert danger with a customisable icon</Alert>
<Alert type="info">Alert info with a customisable icon</Alert>
<Alert type="light">Alert light with a customisable icon</Alert>
`;export{t as default};
