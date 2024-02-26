const e=`<script lang="ts">
	import {Alert} from '@agnos-ui/svelte/components/alert';
	import {createWidgetsDefaultConfig} from '@agnos-ui/svelte/config';

	createWidgetsDefaultConfig().set({alert: {dismissible: false}});
<\/script>

<Alert type="primary">Simple primary alert</Alert>
<Alert type="secondary">Simple secondary alert</Alert>
`;export{e as default};
