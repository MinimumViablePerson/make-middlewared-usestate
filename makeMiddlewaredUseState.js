import { useState } from 'react'

export default (...middlewares) => state =>
  middlewares.reduceRight(
    (output, middleware) => middleware(output),
    useState(state)
  )
