import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory } from 'react-router'
import Wrapper from '../redux/Wrapper'

require('../sass/style.scss')

export const App = React.createClass({
  render() {
    let children = React.cloneElement(this.props.children, { store: {} })
    return (
      <div>
        {children}
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
