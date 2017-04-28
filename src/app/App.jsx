import ReactDOM from 'react-dom'
import {Route, Router } from 'react-router'
import { createBrowserHistory } from 'history'

require('../sass/style.scss')

ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <div>
      <Route path="/" component={require('./main')} />
      <Route path="/login" component={require('./login')} />
      <Route path="/foo" component={require('./play')} />
    </div>
  </Router>
  ), document.getElementById('app'))
