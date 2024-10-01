React manages slots using the `children` specific property, as [documented here](https://react.dev/learn/passing-props-to-a-component#passing-jsx-as-children).  
We support this behavior, while going further.

The AgnosUI React slots can be set using:

- a simple `string`
- a function `(props: Props) => string`
- a React node
- a function `(props: Props) => React.ReactNode` returning a React node
- a React class or function component
