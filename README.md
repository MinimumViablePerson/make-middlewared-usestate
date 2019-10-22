# Make Middlewared useReducer

Create a version of useReducer with an indefinite number of  middleware functions applied.

[Live demo!][live-demo]

## How to install

```bash
npm i @mvps/make-middlewared-usestate
```

## How to use

 A middleware function is any function that accepts and returns `[state, dispatch]`

```js
// logger.js
export default ([state, setState]) => {
  const newSetState = state => {
    console.log(state)
    return setState(state)
  }
  return [state, newSetState]
}
```

After you've created some middleware functions, you can create your custom useState with an indefinite number of middlewares applied:

```js
// useLoggedAndAPICallingReducer.js
import makeMiddlewaredUseReducer from '@mvps/make-middlewared-usereducer'

import consoleLogger from '../middlewares/consoleLogger'
import eventLogger from '../middlewares/eventLogger'
import APICaller from '../middlewares/APICaller'

export default makeMiddlewaredUseReducer(consoleLogger, eventLogger, APICaller)
```

Then, in any component:

```js
// App.js
import React from 'react'

import useState from './hooks/useLoggedAndAPICallingReducer'

const App = () => {
  const [count, setCount] = useState(0)
  const up = () => setCount(count + 1)
  const down = () => setCount(count - 1)

  return <div>
    <h1>{count}</h1>
    <button onClick={down}>-</button>
    <button onClick={up}>+</button>
  </div>
}
```

Want to see it in action? Check out the [live demo!][live-demo]

Have fun!

[live-demo]: https://codesandbox.io/s/use-middlewared-usestate-x1v6k
