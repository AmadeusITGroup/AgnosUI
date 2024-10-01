Angular applications usually handle slots using [content projection](https://angular.dev/guide/components/content-projection).  
We support this behavior, while going further.

The AgnosUI Angular slots can be set using:

- a simple `string`
- a function `(props: Props) => string`
- a [TemplateRef](https://angular.io/api/core/TemplateRef)
- an Angular component
- a `ComponentTemplate`, an AgnosUI utility allowing to use an Angular component without the host element
