# Make Middlewared useReducer

Create a version of useReducer with an indefinite number of  middleware functions applied.

[Live demo!][live-demo]

## How to install

```bash
npm i @mvps@make-middlewared-usereducer
```

## How to use

 A middleware function is any function that accepts and returns `[state, dispatch]`

```js
// logger.js
export default ([state, dispatch]) => {
  const newDispatch = action => {
    console.log(action)
    return dispatch(action)
  }
  return [state, newDispatch]
}
```

After you've created some middleware functions, you can create your custom useReducer with an indefinite number of middlewares applied:

```js
// useLoggedReducer.js
import makeMiddlewaredUseReducer from '@mvps/make-middlewared-usereducer'

import logger from '../middlewares/logger'

export default makeMiddlewaredUseReducer(logger)
```

Then, in any component:

```js
// App.js
import React from 'react'

import useLoggedReducer from './hooks/useLoggedReducer'

const reducer = (state, action) => {
  switch (action.type) {
    case 'COUNTER_UP':
      return state + 1
    case 'COUNTER_DOWN':
      return state - 1 || 1
    default:
      return state
  }
}

const App = () => {
  const [count, dispatch] = useLoggedReducer(reducer, 1)
  const up = () => dispatch({ type: 'COUNTER_UP' })
  const down = () => dispatch({ type: 'COUNTER_DOWN' })

  return <div>
    <h1>{count}</h1>
    <button onClick={down}>-</button>
    <button onClick={up}>+</button>
  </div>
}

```

Want to see it in action? Check out the [live demo!][live-demo]

Have fun!

[live-demo]: https://stackblitz.com/edit/make-middlewared-reducer?file=App.js