const e=`<script lang="ts">
	import {Alert} from '@agnos-ui/svelte/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte/config';

	createWidgetsDefaultConfig().set({alert: {type: 'success'}});
<\/script>

<Alert>Alert not dismissible and of type success, type overriden by child config</Alert>
`;export{e as default};
