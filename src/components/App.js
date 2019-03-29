import React, { Component } from 'react'
import { Route, Switch, NavLink } from 'react-router-dom'

class App extends Component {
  render () {
    return (
      <>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/x">x</NavLink>
          </li>
          <li>
            <NavLink to="/y">y</NavLink>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" render={() => <div>/</div>} />
          <Route path="/x" render={() => <div>x</div>} />
          <Route path="/y" render={() => <div>y</div>} />
          <Route render={() => <div>404</div>} />
        </Switch>
      </>
    )
  }
}

export default App
