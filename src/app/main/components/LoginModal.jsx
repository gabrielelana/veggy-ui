import React from 'react'
import Modal from '../../Modal'

class LoginModal extends React.Component {
  constructor(props){
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
  }
  handleLoginClick() {
    const username = this.refs.username.value
    this.props.onLogin(username)
  }
  render() {
    return (
      <Modal isActive={this.props.isActive} title="Please login..." onOkClick={this.handleLoginClick} okBtnLabel="Login" waiting={this.props.waiting}>
        <div className="field">
          <label className="label">Username</label>
          <p className="control">
            <input className="input" type="text" ref="username"/>
          </p>
        </div>
      </Modal>
    )
  }
}

export default LoginModal