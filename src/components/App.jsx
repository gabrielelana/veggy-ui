import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory } from 'react-router'
import Wrapper from '../redux/Wrapper'
import NavBar from './NavBar'
import ws from '../serverPush/webSocketDispatcher'

require('../sass/style.scss')
ws.connect()

export const App = React.createClass({
  render() {
    let children = React.cloneElement(this.props.children, { store: {} })
    return (
      <div>
        <NavBar />
        <div className="container" style={{marginTop: '20px'}}>
          {children}
        </div>
      </div>
    )
  }
})

import LayoutContainer from './LayoutContainer'
import reducers from '../reducers'
import INITIAL_STATE from './INITIAL_STATE'

const Main = Wrapper(LayoutContainer, reducers, INITIAL_STATE)

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Main} />
      <Route path="/index" component={require('./Index')} />
    </Route>
  </Router>
  ), document.getElementById('app'))
