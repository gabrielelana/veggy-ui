import React from 'react'
//import dispatcher from './AppDispatcher'

const Wrapper = (Container, procs = []) => class WrapperClass extends React.Component {
  constructor(props) {
    super(props)
    console.log(procs)
    this.state = {
      props: {name: 'hello'}
    }
  }
  componentWillMount() {
    // this.subscriptionToken = dispatcher.register(action => {
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
    // })
  }
  componentWillUnmount() {
    //dispatcher.unregister(this.subscriptionToken)
  }
  render() {
    return <Container {...this.state.props} {...this.props}/>
  }
}

export default Wrapper