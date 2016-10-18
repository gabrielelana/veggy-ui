import ReactDOM from 'react-dom'
import {Route, Router, hashHistory } from 'react-router'

require('../sass/style.scss')

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={require('./main')} />
    <Route path="/login" component={require('./login')} />
  </Router>
  ), document.getElementById('app'))
