import React from 'react'
import xs from 'xstream'
import dispatcher from './dispatcher'
import ws from '../serverPush/webSocketConnection'
import wsa from '../serverPush/webSocketActions'
import R from 'ramda'

function combineReducers(reducers, state, action){
  const newState = reducers.reduce((acc, r) => {
    const projection = r.project(state)
    return Object.assign(state, r(projection, action))  
  }, state)
  return newState
}

const Wrapper = (Container, reducers = [], initialState = {}) => class WrapperClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childState: initialState
    }
  }
  componentWillMount() {
    
    const actions = dispatcher.getStream() 
    const stream = xs.merge(ws.stream.map(s => wsa(s)), actions)

    stream
      .map(s => combineReducers(reducers, this.state.childState, s))
      // store states.
      .map(s => {
        //history.push(this.state.childState)
        return s
      })
      .addListener({
        next: s => this.setState({childState: s}),
        error: (err) => { console.log('err', err)},
        complete: () => {},
      })
  }
  componentWillUnmount() {
    //dispatcher.unregister(this.subscriptionToken)
  }
  render() {
    return <Container {...this.state.childState} {...this.props} dispatcher={dispatcher} />
  }
}

export default Wrapper