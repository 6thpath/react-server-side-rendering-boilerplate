import React from 'react'
import { hydrate } from 'react-dom'
import { Router } from 'react-router-dom'

import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

import App from './components/App'

hydrate(
  <Router history={history}>
    <App />
  </Router>,
  document.getElementById('root')
)
