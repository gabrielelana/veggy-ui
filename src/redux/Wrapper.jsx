import React from 'react'
import xs from 'xstream'
import actionStream from './actionStream'
import ws from '../serverPush/webSocketConnection'
import wsa from '../serverPush/webSocketActions'

function combineReducers(reducers, state, action){
  const newState = reducers.reduce((acc, r) => {
    const projection = r.project(state)
    return Object.assign(state, r(projection, action))  
  }, state)
  return newState
}

function Wrapper(InnerComponent, reducers = [], initialState = {}) {
  return React.createClass({
    getInitialState(){
      return {childState: initialState}
    },
    componentWillMount() {
      const actions = actionStream.createStream() 
      this.stream = xs.merge(ws.createStream().map(wsa), actions)
      this.listener = {
        next: s => this.setState({childState: s}),
        error: (err) => { console.log('err', err)},
        complete: () => {},
      }

      this.stream
        .map(s => combineReducers(reducers, this.state.childState, s))
        .addListener(this.listener)
    },
    componentWillUnmount() {
      this.stream.removeListener(this.listener)
    },
    render() {
      return <InnerComponent {...this.state.childState} {...this.props} />
    }
  })
}

export default Wrapper