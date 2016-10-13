import React from 'react'
import actionStream from '../redux/actionStream'

const types = {
  info: 'notification is-success',
  error: 'notification is-danger',
  warn: 'notification is-warning',
}
function getTypeClass(type){
  return types[type]
}

const MessageBar = React.createClass({
  getInitialState() {
    return { show: false }
  },
  getDefaultProps() {
    return { timeout: 4000, message: '' };
  },
  componentWillReceiveProps(props) {
    if (props.message.length > 0){
      this.setState({show: true})
      setTimeout(() => {
        console.log('DISMISSSS')
        actionStream.push({type: 'DISMISS_MESSAGE', payload: {}})
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
      <div id="messageBox" className="column is-half is-offset-one-quarter is-gapless">
        <div className={messageClass} style={displayStyle} >
          {this.props.message}
        </div>
      </div>
      )
  }
})

export default MessageBar