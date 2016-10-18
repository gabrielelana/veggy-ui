import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory } from 'react-router'

require('../sass/style.scss')

export const App = React.createClass({
  render() {
    //const children = React.cloneElement(this.props.children)
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={require('./main')} />
      <Route path="/login" component={require('./login')} />
    </Route>
  </Router>
  ), document.getElementById('app'))
