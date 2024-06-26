const e=`<script lang="ts">
	import {Alert} from '@agnos-ui/svelte-bootstrap/components/alert';
<\/script>

<Alert type="primary" dismissible={false}>Label provided by slot</Alert>
<Alert type="secondary" dismissible={false} children="Label provided by property" />
<Alert type="info" dismissible={false} children="When both prop and slot are provided, the prop's content will take precedence."
	>This content is ignored.</Alert
>
`;export{e as default};
