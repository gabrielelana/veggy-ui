import React from 'react'

const types = {
  info: 'notification is-success',
  error: 'notification is-danger',
  warn: 'notification is-warning',
}
function getTypeClass(type){
  return types[type]
}

const ErrorBar = React.createClass({
  getInitialState() {
    return { show: false }
  },
  getDefaultProps() {
    return { timeout: 4000 };
  },
  componentWillReceiveProps(props) {
    if (props.message.length > 0){
      this.setState({show: true})
      setTimeout(() => {
        this.setState({show: false})
      }, this.props.timeout)
    }
  },
  render(){ 
    const displayStyle = {display:'none'}
    if (this.state.show){
      displayStyle.display = 'block'
    }
    const messageClass = getTypeClass(this.props.type)
    return (
      <div className="column is-half is-offset-one-quarter is-gapless">
        <div className={messageClass} style={displayStyle} >
          {this.props.message}
        </div>
      </div>
      )
  }
})

export default ErrorBar