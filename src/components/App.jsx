import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory } from 'react-router'
import Wrapper from '../redux/Wrapper'
import NavBar from './NavBar'

require('../sass/style.scss')
 
var websocket = null

function connect() {   
  websocket = new WebSocket('ws://localhost:4000/ws')
  websocket.onopen = (evt) => { 
    // TODO: ping ogni 5s ws.send('ping')
    // TODO: inviare username ws.send('login:username')
    console.log('open', evt) 
  }
  websocket.onclose = (evt) => { console.log('close', evt) }
  websocket.onmessage = (evt) => { console.log('message', evt) }
  websocket.onerror = (evt) => { console.log('error', evt) }
}

function disconnect() {
  websocket.close()
}

connect()


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
