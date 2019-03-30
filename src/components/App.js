import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import { routes } from '../routes'

class App extends Component {
  render () {
    return (
      <>
        <Switch>
          {
            routes.map((route, index) => (
              <Route
                key={index.toString()}
                exact={route.exact}
                path={route.path}
                render={() => route.render}
              />
            ))
          }
          <Route render={() => <div>404</div>} />
        </Switch>
      </>
    )
  }
}

export default App
