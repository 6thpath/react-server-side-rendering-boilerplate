import React from 'react'

import Landing from './components/landing/index'

export const routes = [
  {
    exact: true,
    path: '/',
    render: <Landing />
  },
  {
    exact: true,
    path: '/a',
    render: <div>a</div>
  }
]