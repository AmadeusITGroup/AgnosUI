import type {SampleInfo} from '$lib/layout/sample';

import focustrack from '@agnos-ui/samples/focustrack/focustrack';
import floatingUI from '@agnos-ui/samples/floatingUI/floatingUI';

const samples: Map<string, SampleInfo> = new Map();
samples.set('focustrack/focustrack', focustrack);
samples.set('floatingUI/floatingUI', floatingUI);

export default samples;
