import type {SampleInfo} from '$lib/layout/sample';

import focustrack from '@agnos-ui/samples/focustrack/focustrack';
import floatingUI from '@agnos-ui/samples/floatingUI/floatingUI';
import slotsUsage from '@agnos-ui/samples/slots/usage';
import slotsContext from '@agnos-ui/samples/slots/context';
import alertsIcon from '@agnos-ui/samples/alert/icon';
import slotsHeadless from '@agnos-ui/samples/slots/headless';
import directivesUsage from '@agnos-ui/samples/directives/usage';
import configurationBasic from '@agnos-ui/samples/configuration/basic';
import configurationDown from '@agnos-ui/samples/configuration/down';
import transitionCollapse from '@agnos-ui/samples/transition/collapseDemo';
import transitionFlip from '@agnos-ui/samples/transition/flipDemo';
import transitionTransition from '@agnos-ui/samples/transition/transition';

const samples: Map<string, SampleInfo> = new Map();
samples.set('focustrack/focustrack', focustrack);
samples.set('floatingUI/floatingUI', floatingUI);
samples.set('slots/usage', slotsUsage);
samples.set('slots/context', slotsContext);
samples.set('alert/icon', alertsIcon);
samples.set('slots/headless', slotsHeadless);
samples.set('directives/usage', directivesUsage);
samples.set('configuration/basic', configurationBasic);
samples.set('configuration/down', configurationDown);
samples.set('transition/collapse', transitionCollapse);
samples.set('transition/flip', transitionFlip);
samples.set('transition/transition', transitionTransition);
export default samples;
