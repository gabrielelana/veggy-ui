import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, hashHistory } from 'react-router'

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
    <Route component={App}>
      <Route path="/" component={require('./Index')} />
    </Route>
  </Router>
  ), document.getElementById('container'))
