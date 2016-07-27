import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory } from 'react-router'
import NavBar from './NavBar'

require('../sass/style.scss')

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

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={require('./LayoutContainer')} />
      <Route path="/index" component={require('./Index')} />
    </Route>
  </Router>
  ), document.getElementById('app'))
