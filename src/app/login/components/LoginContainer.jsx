import React from 'react'
import {withRouter} from 'react-router'
import actions from '../actions/loginActions'
import NavBar from '../../NavBar'
import MessageBar from '../../MessageBar'
import WaitingWidget from './WaitingWidget'


const LoginContainer = React.createClass({
  handleLogin(){
    actions.login(this.refs.username.value)
  },
  componentWillReceiveProps(props) {
    if (props.loggedIn){
      actions.redirect(props.username, props.timerId, props.userId)
    }
  },
  render(){
    return (
      <div>
        <NavBar />
        <WaitingWidget show={this.props.waiting} />
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <div className="column is-one-quarter is-offset-4">
              <label className="label">Choose your name</label>
              <p className="control">
                <input ref="username" className="input" type="text" placeholder="username" />
              </p>
            </div>
            <div className="column">
              <a className="button is-primary" onClick={this.handleLogin} style={{marginTop:'25px'}}>Login</a>
            </div>
          </div>
          <div className="columns">
           <MessageBar message={this.props.message} />
          </div>
        </div>
      </div>
    )
  }
})



export default withRouter(LoginContainer)
