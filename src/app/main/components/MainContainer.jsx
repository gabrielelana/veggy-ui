import React from 'react'
import MessageBar from '../../MessageBar'
import Display from './Display'
import Controls from './Controls'
import TaskList from './TaskList'
import UserList from './UserList'
import timerActions from '../actions/timerActions'
import resumeActions from '../actions/resumeActions'
import usersActions from '../actions/usersActions'
import NavBar from '../../NavBar'

class MainContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
  }
  componentWillMount() {
    resumeActions.wireup()
  }
  handleStart(){
    timerActions.startPomodoro(this.props.timerId, this.props.users)
  }
  handleSquash(){
    timerActions.squash(this.props.timerId, this.props.pomodoroId, this.props.isShared)
  }
  handleToggleUser(user){
    usersActions.toggleSelectedUsers(user)
  }
  handleLogin(username){
    usersActions.login(username)
  }
  render(){ 

    return (
      <div>
        <LoginModal isActive={this.props.needLogin} onLogin={this.handleLogin} waiting={this.props.waitingForLogin}/>
        <NavBar username={this.props.username} />
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <Display time={this.props.time} isShared={this.props.isShared} />
            <Controls startDisabled={this.props.startDisabled} squashDisabled={this.props.squashDisabled} onStart={this.handleStart} onSquash={this.handleSquash} />
          </div>
          <div className="columns">
            <TaskList timers={this.props.timers}/>
            <UserList 
              users={this.props.users} 
              onToggleUser={this.handleToggleUser}/>
          </div>
          <div className="columns">
            <MessageBar message={this.props.message} type={this.props.messageType} />
          </div>
        </div>
      </div>
    )
  }
}

export default MainContainer

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
      <div className={`modal ${this.props.isActive?'is-active':''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Please login...</p>
          </header>
          <section className="modal-card-body">
            <div className="field">
              <label className="label">Username</label>
              <p className="control">
                <input className="input" type="text" ref="username"/>
              </p>
            </div>
          </section>
          <footer className="modal-card-foot">
            <a className="button is-success" onClick={this.handleLoginClick}>Login</a>
            <WaitingWidget show={this.props.waiting} />
          </footer>
        </div>
      </div>
    )
  }
}

function WaitingWidget({show}) {
  if (show){
    return (
      <div className="waiting">
        <svg width="34px" height="34px" preserveAspectRatio="xMidYMid" className="uil-ripple">
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="20" cy="20" r="24" stroke="#1fc8db" fill="none" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;8;16"></animate>
            </circle>
          </g>
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="20" cy="20" r="8" stroke="#ed6c63" fill="none" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;8;16"></animate>
            </circle>
          </g>
        </svg>
      </div>)
  } 
  return null
}
