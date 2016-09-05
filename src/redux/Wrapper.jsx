import React from 'react'
import dispatcher from './dispatcher'
import R from 'ramda'

const Wrapper = (Container, reducers = [], initialState = {}) => class WrapperClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      childState: initialState
    }
  }
  componentWillMount() {
    this.subscriptionToken = dispatcher.register(action => {
      const newState = reducers.reduce((acc, r) => {
        return Object.assign(this.state.childState, r(r.project(this.state.childState), action))  
      }, this.state.childState)

      this.setState({childState: newState})
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