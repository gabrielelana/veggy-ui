import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory } from 'react-router'

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



ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={require('./main')} />
      <Route path="/login" component={require('./login')} />
      <Route path="/index" component={require('./Index')} />
    </Route>
  </Router>
  ), document.getElementById('app'))
