import { useReducer } from 'react'

export default (...middlewares) => (...args) =>
  middlewares.reduceRight(
    (output, middleware) => middleware(output),
    useReducer(...args)
  )
