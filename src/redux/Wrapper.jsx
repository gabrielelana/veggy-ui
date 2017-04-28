import React from 'react'
import xs from 'xstream'
import actions from './actionStream'
import ws from './webSocketStream'

function combineReducers(reducers, state, action){
  const newState = reducers.reduce((acc, r) => {
    const projection = r.project(acc)
    return Object.assign({}, acc, r(projection, action))  
  }, state)
  return newState
}

function WithState(InnerComponent, reducers = [], initialState = {}) {
  return class withState extends React.Component {
    constructor(props) {
      super(props)
      this.state = { innerState: initialState }
    }

    componentWillMount() {
      const actionStream = actions.createStream()
      const wsStream = ws.createStream() 
      this.stream = xs.merge(wsStream, actionStream)
      this.listener = {
        next: s => this.setState({innerState: s})
      }

      this.stream
        .map(action => combineReducers(reducers, this.state.innerState, action))
        .addListener(this.listener)

      // this.regId = dispatcher.register(action => {
      //   const nextState = combineReducers(reducers, this.state.innerState, action)
      //   this.setState({innerState: nextState})
      // })
    }
    componentWillUnmount() {
      this.stream.removeListener(this.listener)
      // dispatcher.unregister(this.regId)
    }
    render() {
      return <InnerComponent {...this.state.innerState} {...this.props} />
    }
  }
}

export default WithState