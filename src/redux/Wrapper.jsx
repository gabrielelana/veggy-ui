import React from 'react'
import xs from 'xstream'
import dispatcher from './dispatcher'
import ws from '../serverPush/webSocketConnection'
import wsa from '../serverPush/webSocketActions'

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
    const stream = xs.merge(ws.stream.map(wsa), actions)

    stream
      .map(s => combineReducers(reducers, this.state.childState, s))
      .addListener({
        next: s => this.setState({childState: s}),
        error: (err) => { console.log('err', err)},
        complete: () => {},
      })
  }
  render() {
    return <Container {...this.state.childState} {...this.props} dispatcher={dispatcher} />
  }
}

export default Wrapper