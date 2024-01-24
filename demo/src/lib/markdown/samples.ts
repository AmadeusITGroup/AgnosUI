import type {SampleInfo} from '$lib/layout/sample';

import focustrack from '@agnos-ui/samples/focustrack/focustrack';
import floatingUI from '@agnos-ui/samples/floatingUI/floatingUI';
import slotsUsage from '@agnos-ui/samples/slots/usage';
import slotsContext from '@agnos-ui/samples/slots/context';
import alertsIcon from '@agnos-ui/samples/alert/icon';
import slotsHeadless from '@agnos-ui/samples/slots/headless';
import directivesUsage from '@agnos-ui/samples/directives/usage';

const samples: Map<string, SampleInfo> = new Map();
samples.set('focustrack/focustrack', focustrack);
samples.set('floatingUI/floatingUI', floatingUI);
samples.set('slots/usage', slotsUsage);
samples.set('slots/context', slotsContext);
samples.set('alert/icon', alertsIcon);
samples.set('slots/headless', slotsHeadless);
samples.set('directives/usage', directivesUsage);
export default samples;
