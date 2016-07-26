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
      // - passo il payload ai reducers
      // - ogni reducer riceve lo srtato e la action
      //   verifica la action type e se ok riduce (altrimenti ritorna lo stato)
      // - finiti i reducer chiamo il setState
      const newState = reducers.reduce((acc, r) => {
        return Object.assign(this.state.childState, r(this.state.childState, action))  
      }, this.state.childState)


      this.setState({childState: newState})
      console.log('newState', newState)

    //   if (action.type === 'UPDATE_PROPS') {
    //     var newData = null;
    //     if(typeof(action.data) === 'function') {
    //       newData = action.data(this.state.props || {});
    //     } else {
    //       const data = procs.reduce((acc, p) => p(this.state, action.data), action.data)
    //       newData = this.state.props || {};
    //       Object.keys(data).forEach((key) => newData[key] = data[key]);
    //     }
    //     if(newData) {
    //       this.setState({props: newData})
    //     }
    //   }
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