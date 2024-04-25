#### Svelte usage

Browser-only directives are natively supported by Svelte, because they inherit the concept from this framework.
You can provide it to the `use` directive, and that's it.

<p>
  If your app is configured for SSR, you will want to setup our <strong>AgnosUI Svelte preprocessor</strong>.<br>
  It allows to preprocess directives that update atttributes / class /style so that they are applied also server-side.
  You can find the documention <a href="https://github.com/AmadeusITGroup/AgnosUI/blob/main/svelte/preprocess/README.md" target="_blank">in this README</a>.
</p>

##### Example

```sample
{Directives Usage:directives/usage:200}
```
