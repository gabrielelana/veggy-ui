import ReactDOM from 'react-dom'
//import {Route, Router } from 'react-router'
//import { createBrowserHistory } from 'history'
import ws from '../redux/webSocketStream.js'
import Main from './main'

require('../sass/style.scss')

ws.connect()


ReactDOM.render(<Main />, document.getElementById('app'))

/*ReactDOM.render((
  <Router history={createBrowserHistory()}>
    <div>
      <Route path="/" component={require('./main')} />
      <Route path="/login" component={require('./login')} />
      <Route path="/foo" component={require('./play')} />
    </div>
  </Router>
  ), document.getElementById('app'))*/
