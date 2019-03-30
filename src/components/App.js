import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import './x.css'
import './x.less'

class App extends Component {
  render () {
    return (
      <>
        <button className='redButton asd'>asd</button>
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
