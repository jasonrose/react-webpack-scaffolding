require('./styles.styl')

import React from 'react'
import { render } from 'react-dom'
import Hello from './modules/hello/hello'

render((
  <Hello />
)
, document.getElementById('root'))
