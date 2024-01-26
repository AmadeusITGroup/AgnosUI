## Slots in Svelte

Svelte manages slots using the [slot special element](https://svelte.dev/docs/special-elements#slot).  
Note that this will change when Svelte 5 comes out and brings snippets to the fray.  
We support this behavior, while going further.

The AgnosUI Svelte slots can be set using:

- a simple `string`
- a function `(props: Props) => string`
- a Svelte component
