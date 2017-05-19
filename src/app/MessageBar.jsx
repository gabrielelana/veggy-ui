import React from 'react'
import PropTypes from 'prop-types'
import dispatcher from '../redux/dispatcher'
import {DismissMessage} from './globalActionNames'

const types = {
  info: 'notification is-success',
  error: 'notification is-danger',
  warn: 'notification is-warning',
}
function getTypeClass(type){
  return types[type]
}

class MessageBar extends React.Component {
  constructor() {
    super()
    this.state = { show: false }
  }
  componentWillReceiveProps(props) {
    if (props.message.length > 0){
      this.setState({show: true})
      setTimeout(() => {
        dispatcher.dispatch({type: DismissMessage, payload: {}})
        this.setState({show: false})
      }, this.props.timeout)
    }
  }
  render(){ 
    const displayStyle = { display:'none' }
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
}

MessageBar.defaultProps = {
  timeout: 4000
}

MessageBar.propTypes = {
  message: PropTypes.string.isRequired
}

export default MessageBar