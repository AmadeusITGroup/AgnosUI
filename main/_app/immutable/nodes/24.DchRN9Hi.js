import{s as I,e as A,t as T,c as W,b as L,d as k,f as c,m as $,i as d,h as S,j as R,n as x,a as p,r as C,g as m}from"../chunks/scheduler.DDKLfDno.js";import{S as O,i as E,c as g,b as f,m as y,t as w,a as v,e as b}from"../chunks/index.DMnRV_Lo.js";import{H as _}from"../chunks/Header.DTOk29-6.js";import{M as F}from"../chunks/Markdown.BlgDo-BS.js";function M(i){let t,r,n;return{c(){t=A("strong"),r=T("Published on "),n=T(i[0]),this.h()},l(a){t=W(a,"STRONG",{class:!0});var s=L(t);r=k(s,"Published on "),n=k(s,i[0]),s.forEach(c),this.h()},h(){$(t,"class","d-flex mb-2")},m(a,s){d(a,t,s),S(t,r),S(t,n)},p(a,[s]){s&1&&R(n,a[0])},i:x,o:x,d(a){a&&c(t)}}}function V(i,t,r){let{date:n}=t;return n=Intl.DateTimeFormat("en-US",{dateStyle:"full"}).format(new Date(n)),i.$$set=a=>{"date"in a&&r(0,n=a.date)},[n]}class q extends O{constructor(t){super(),E(this,t,V,M,I,{date:0})}}const N=`In [AgnosUI](https://amadeusitgroup.github.io/AgnosUI/latest/), we employ [Tansu](https://github.com/AmadeusITGroup/tansu) to handle our widget states.

This article explores the effective ways to use Tansu for broader state management, drawing upon our practical experience in developing AgnosUI. To follow along, we assume that you have a basic understanding of Tansu's API, as explained in the [README](https://github.com/AmadeusITGroup/tansu/blob/master/README.md) (no need to know them in detail). Feel free to refer to it for reference if needed.

## First example

### Local storage

Before going deeper into the various ways to utilize Tansu, let's start with a simple example.

The primary building block of Tansu is the writable store.

\`\`\`typescript
// Create the store somewhere in the code

const myStore$ = writable('value');

// Listen for changes somewhere in the code
const unsubscribe = myStore$.subscribe((currentValue) => {
	console.log('Value changed for', currentValue);
});

// Set a new value somewhere in the code
myStore$.set('new value');
\`\`\`

From a pure data management perspective, this is all we need. A store is created, containing internal data. Once we acquire the store in another part of the code, we express interest in changes to this specific data, such as for refreshing a display. The method to set a new value allows subscribers to be notified.

This coding approach aligns with the trend in how reactive states are implemented on the internet. Examples include Svelte stores (which influenced Tansu's development), the new Runes (also using Svelte), Angular with Signals, or even SolidJS. While their APIs may differ (for instance, using \`useEffect\` to subscribe to a store with Signals or \`$effect\` with Runes), they share fundamental ideas.

- a \`$\` is conventionally added at the end of the store name, purely for clarity. As these stores are everywhere in AgnosUI, this naming convention provides an instant visual distinction from other variables. Throughout this article, we use this convention in our examples.

- A store is a function that allows you to retrieve the current value (for example \`const currentValue = myStore$()\`).

- Additionally, a store comes with a convenient method, \`update\`. This method takes a function as a parameter. The function receives the current store value and is expected to return the new value. This is convenient when calculating the new value requires knowledge of the old one.  (for example \`counterStore$.update((count) => count + 1)\`)

Let's examine the following code snippet:

\`\`\`typescript
import {getLocalStorageStore} from './stores';

const settings$ = getLocalStorageStore('settings');
const unsubscribe = appSettings$.subscribe((settings) => { 
   // Do something with settings here...
   const sidebarColor = settings.sidebarColor ;
   ...
});

...

// onDestroy:
unsubscribe();
\`\`\`

We can understand from this code that we get a store from the local storage relative to the key \`settings\`. Since local storage values are stored as strings, we can expect this store to contain settings directly as a JSON object. Following the same logic, we also expect that invoking \`settings$.set\` would modify the internal value and save the corresponding JSON string in the localStorage.

Let's improve it.

\`\`\`typescript
// stores.ts

import {writable} from '@amadeus-it-group/tansu';
import type {WritableSignal} from '@amadeus-it-group/tansu';

const cache = new Map<string, WritableSignal<any>>();
export function getLocalStorageStore(key: string) {
	let store$ = cache.get(key);
	if (store$) {
		return store$;
	}
	store$ = writable(JSON.parse(localStorage.getItem(key) ?? '{}'));
	const storeSet = store$.set.bind(store$);
	Object.assign(store$, {
		set(value: any) {
			storeSet(value);
			localStorage.setItem(key, value);
		},
	});

	cache.set(key, store$);
	return store$;
}
\`\`\`

And that's it for this initial iteration. We've successfully crafted a custom store, designed to offer more than just the basic functionality.

To enhance our code, we can use the \`asWritable\` utility provided in Tansu. The issue with the current example lies in the fact that:

1. a \`writable\` provides an \`update\` method that internally uses the \`set\` method. It's crucial to ensure that our customized set method is the one being executed.

2. The current code is not as straightforward as it could be; we have to explicitly bind the primary \`set\` method.

This is precisely what \`asWritable\` is designed for. Let's proceed to rewrite the example:

\`\`\`typescript
// stores.ts

import {writable, asWritable} from '@amadeus-it-group/tansu';
import type {WritableSignal} from '@amadeus-it-group/tansu';

const cache = new Map<string, WritableSignal<any>>();
export function getLocalStorageStore(key: string) {
	const store$ = cache.get(key);
	if (store$) {
		return store$;
	}

	const innerStore$ = writable(JSON.parse(localStorage.getItem(key) ?? '{}'));
	const localStorageStore$ = asWritable(innerStore$, (value: any) => {
		innerStore$.set(value);
		localStorage.setItem(key, value);
	});

	cache.set(key, localStorageStore$);
	return localStorageStore$;
}
\`\`\`

### Enhancing Functionality

Our custom store currently lacks one essential feature: value synchronization across browser tabs. Given that we can listen for storage changes, why not incorporate this functionality?

We can achieve this with the following code:

\`\`\`typescript
// stores.ts
import {writable, asWritable} from '@amadeus-it-group/tansu';
import type {WritableSignal} from '@amadeus-it-group/tansu';

const cache = new Map<string, WritableSignal<any>>();

export function getLocalStorageStore(key: string) {
	const store$ = cache.get(key);
	if (store$) {
		return store$;
	}

	const innerStore$ = writable(JSON.parse(localStorage.getItem(key) ?? '{}'));
	const localStorageStore$ = asWritable(innerStore$, (value: any) => {
		innerStore$.set(value);
		localStorage.setItem(key, value);
	});

	function updateFromStorage(e: StorageEvent) {
		if (e.key === key) {
			innerStore$.set(JSON.parse(e.newValue || '{}'));
		}
	}
	window.addEventListener('storage', updateFromStorage);

	cache.set(key, localStorageStore$);
	return localStorageStore$;
}
\`\`\`

However, a potential issue arises: the event listener is never removed. After its first usage, it will persist, whether we still need it or not (for example, if the component using it is destroyed). Introducing another function to unlisten to the event isn't a viable solution either, as we might have multiple components using it simultaneously, with the active one still requiring synchronization.

To address this, let's leverage a powerful feature provided by Tansu: the setup and teardown methods as the second parameter of the writable. This function is called when the number of subscribers changes from 0 to 1. If this function returns another function, the latter is called when the number of subscribers changes from 1 to 0.

Here's the rewritten version:

\`\`\`typescript
// stores.ts

import {writable, asWritable} from '@amadeus-it-group/tansu';
import type {WritableSignal} from '@amadeus-it-group/tansu';

const cache = new Map<string, WritableSignal<any>>();
export function getLocalStorageStore(key: string) {
	const store$ = cache.get(key);
	if (store$) {
		return store$;
	}

	function updateFromStorage(e: StorageEvent) {
		if (e.key === key) {
			innerStore$.set(JSON.parse(e.newValue || '{}'));
		}
	}

	const innerStore$ = writable(<any>undefined, () => {
		innerStore$.set(JSON.parse(localStorage.getItem(key) ?? '{}'));
		window.addEventListener('storage', updateFromStorage);
		return () => window.removeEventListener('storage', updateFromStorage);
	});

	const localStorageStore$ = asWritable(innerStore$, (value: any) => {
		innerStore$.set(value);
		localStorage.setItem(key, value);
	});

	cache.set(key, localStorageStore$);
	return localStorageStore$;
}
\`\`\`

Now, the code is complete. All tabs utilizing this store will stay synchronized.

The setup and teardown functionality, as demonstrated here, is not available with signals in Angular, though it is present in Svelte stores.

### Concluding remarks for this example

While this seemingly straightforward store may be perceived as a tool or helper, it actually embodies a comprehensive state management system: specifically, the state management for a particular key in the localStorage.

From the user's perspective, interacting with the store is remarkably straightforward:

- No need to understand how local storage operates.
- No concerns about parsing or stringifying values; working with the object is possible.
- No manual addition or removal of events is required.

All that is needed is straightforward utilization. The storage value remains synchronized seamlessly.

Regardless of the specific store in use, the workflow remains consistent:

- Get the store,
- Subscribe to retrieve the value and perform related actions.
- Unsubscribe when the store is no longer needed.

In AgnosUI, we provide various examples to abstract different levels of complexity. For instance:

- \`activeElement$\`: consistently captures the active element on the page. Use it to access the state of the activeElement, regardless of the user's focus movement. This is a global store, as there is only one activeElement.

- [\`focusTrack$\`](../../../../../docs/04-Services/01-Focustrack.md): provide a parameter of DOM elements, and the store returns a boolean value—either true or false—indicating whether the focus is within your elements or not. This functionality is very useful, for instance, when closing a dropdown if the user moves outside a component. Notably, it utilizes the activeElement$ store, and these stores can be seamlessly combined.

- \`intersection$\`: provide a store of DOM elements, ensuring you always have elements within the viewport.

- [\`floatingui$\`](../../../../../docs/04-Services/02-Floating-UI.md): provides the store of the anchor element and the store of the element to position. It delivers position updates to be applied with [floating UI](https://floating-ui.com/), dynamically updated as the user scrolls.

## State management for applications

### Build your custom stores

As demonstrated in the previous example, building a custom store becomes effortless with Tansu's \`asWritable\`. However, the more conventional approach is to utilize \`asReadable\`. The key distinction is that it entirely removes the \`set\` and \`update\` methods while preserving the flexibility to extend the store with a custom API.

Let's illustrate this with a counter store:

\`\`\`typescript
// counter.ts
import {writable, asReadable} from '@amadeus-it-group/tansu';

export function createCounter(initialValue = 0) {
	const counter$ = writable(initialValue);
	return asReadable(counter$, {
		increase: () => counter$.update((count) => count + 1),
		decrease: () => counter$.update((count) => count - 1),
		reset: () => counter$.set(initialValue),
	});
}

// usage.ts
const counter$ = createCounter();
counter$.increase();
counter$.subscribe((value) => console.log('value:', value));

// output:
// value: 1
\`\`\`

In this example, we've crafted a counter store with \`increase\`, \`decrease\`, and \`reset\` APIs available, intentionally excluding the ability to set the value directly. Internally, you still have access to \`set\` and \`update\` to modify the value.

From a ES6 perspective, creating a global state or local state is straightforward:

- using createCounter at the component level will create a local state,
- \`export const counter$ = createCounter()\` will create a global state.

The approach may vary based on the framework you are using. For instance, in Angular, you would employ dependency injection to inject the store at the root level or component level.

### Multiple custom stores to manage your state

While the idea of creating a store that integrates data along with all the associated APIs for management may seem appealing, it's not necessarily the most efficient approach to state management.

In typical discussions about state management in applications, we encounter two types of data: data originating from the server and data generated locally.

When dealing with server-side data, it's common to handle a substantial amount of information simultaneously. These data sets are usually stored in a comprehensive main store, ready to be segmented as necessary when different parts of the application request it.

Conversely, for locally generated data, the approach tends to be quite the opposite. The goal is to create stores with minimal data. Imagining a large store containing the complete state of panels, selected tabs, and all information for each tab is impractical. The strategy involves fragmenting the state into numerous smaller stores, a concept known as fine-grain reactivity. The objective is to ensure that when the application state undergoes changes, only the relevant parts of the application responsive to these changes are triggered.

Consider the scenario where, in our previous example, we wish to keep track of the number of reset operations. One approach could be as follows:

\`\`\`typescript
// counter.ts
export function createCounter(initialValue = 0) {
	const counter$ = writable({
		resetOperations: 0,
		value: initialValue,
	});

	return asReadable(counter$, {
		increase: () =>
			counter$.update((state) => {
				state.value++;
				return state;
			}),

		decrease: () =>
			counter$.update((state) => {
				state.value--;
				return state;
			}),

		reset: () => () =>
			counter$.update((state) => {
				state.resetOperations++;
				state.value = initialValue;
				return state;
			}),
	});
}
\`\`\`

However, a more effective approach is to work with separate stores:

\`\`\`typescript
// counter.ts
export function createCounter(initialValue = 0) {
	const counter$ = writable(initialValue);
	const resetOperations$ = writable(0);
	return {
		counter$: asReadable(counter$),
		resetOperations$: asReadable(resetOperations$),
		increase: () => counter$.update((count) => count + 1),
		decrease: () => counter$.update((count) => count - 1),
		reset: () => {
			counter$.set(initialValue);
			resetOperations$.update((value) => value + 1);
		},
	};
}

// usage.ts
const {counter$, resetOperations$, increase, reset} = createCounter();
reset();
increase();

counter$.subscribe((value) => console.log('Counter value:', value));
resetOperations$.subscribe((value) => console.log('Reset operations:', value));

increase();

// Output
// Counter value: 0
// Reset operations: 1
// Counter value: 1
\`\`\`

Even though we have separate stores, they collaborate seamlessly. Only the subscribers interested in the changes are notified.

This is the technique that is mostly used in AgnosUI.

To conclude with a more practical example, let's consider a search panel containing a search input, a possible error list, a table with the results, and a loading indicator.

The corresponding state for a search panel can be created using the following (simplified) code:

\`\`\`typescript
import {writable, asReadable} from '@amadeus-it-group/tansu';
import {fetchResults} from './queryManagement.ts';

export function createSearchPanel() {
	const errors$ = writable(<string[]>[]);
	const results$ = writable(<any[]>[]);
	const isLoading$ = writable(false);

	return {
		errors$: asReadable(errors$),
		results$: asReadable(results$),
		isLoading$: asReadable(isLoading$),
		async query(text: string) {
			const errors: string[] = [];
			if (!text) {
				errors.push('Search term is mandatory');
			}

			if (text && text.length < 3) {
				errors.push('You must type at least 3 characters');
			} // ...

			errors$.set(errors);
			if (!errors.length) {
				isLoading$.set(true);
				const {results, errors: serverErrors} = await fetchResults(text);
				isLoading$.set(false);
				if (errors.length) {
					errors$.set(serverErrors);
				} else {
					results$.set(results);
				}
			}
		},
	};
}
\`\`\`

To use this in your search panel component:

\`\`\`typescript
const {errors$, results$, isLoading$, query} = createSearchPanel();

// Use errors$, results$, isLoading$ for your display
// Call "query" to launch a search.
\`\`\`

## Conclusion

In this exploration of state management with Tansu, we've delved into powerful techniques for crafting custom stores that suit diverse application needs. By leveraging Tansu's functionalities like \`asWritable\`, \`asReadable\`, \`setup\` and \`teardown\` functions, we've seen how to optimize state management, making it more effective and modular.

The examples presented, highlight the flexibility Tansu offers in managing state at varying levels of complexity. Whether you're dealing with local or server-driven data, the principles explored here provide a foundation for structuring your application's state in a way that promotes maintainability and scalability.

Incorporating these techniques into your projects not only enhances the clarity of your code but also contributes to a more robust and responsive state management.

**Fabrice Basso<br>
Software engineer at Amadeus**
`;function U(i){let t,r,n,a,s,u,l,h;return n=new _({props:{title:"State management with Tansu",noMeta:!0}}),s=new q({props:{date:"02/01/2024"}}),l=new F({props:{source:N}}),{c(){t=A("meta"),r=p(),g(n.$$.fragment),a=p(),g(s.$$.fragment),u=p(),g(l.$$.fragment),this.h()},l(e){const o=C("svelte-1jjkb5h",document.head);t=W(o,"META",{name:!0,content:!0}),o.forEach(c),r=m(e),f(n.$$.fragment,e),a=m(e),f(s.$$.fragment,e),u=m(e),f(l.$$.fragment,e),this.h()},h(){document.title="State management with Tansu",$(t,"name","description"),$(t,"content","Blog article exploring State Management with Tansu.")},m(e,o){S(document.head,t),d(e,r,o),y(n,e,o),d(e,a,o),y(s,e,o),d(e,u,o),y(l,e,o),h=!0},p:x,i(e){h||(w(n.$$.fragment,e),w(s.$$.fragment,e),w(l.$$.fragment,e),h=!0)},o(e){v(n.$$.fragment,e),v(s.$$.fragment,e),v(l.$$.fragment,e),h=!1},d(e){e&&(c(r),c(a),c(u)),c(t),b(n,e),b(s,e),b(l,e)}}}class D extends O{constructor(t){super(),E(this,t,null,U,I,{})}}export{D as component};
