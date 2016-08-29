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
  getInitialState: function() {
    return { message: '' }
  },
  getDefaultProps() {
    return { message: '' };
  },
  componentWillReceiveProps(props) {
    if (props.message.length > 0){
      this.setState({message: props.message})
      setTimeout(() => {
        this.setState({message: ''})
      }, 4000)
    }
  },
  render(){ 
    const displayStyle = {display:'none'}
    if (this.state.message){
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