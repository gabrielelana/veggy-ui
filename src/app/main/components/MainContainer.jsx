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
import LoginModal from './LoginModal'
import DescriptionModal from './DescriptionModal'
import dispatcher from '../../../redux/dispatcher'

class MainContainer extends React.Component {
  constructor(props){
    super(props)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleCancelStart = this.handleCancelStart.bind(this)
    this.handleStart = this.handleStart.bind(this)
    this.handleStartRequest = this.handleStartRequest.bind(this)
    this.handleSquash = this.handleSquash.bind(this)
  }
  componentWillMount() {
    resumeActions.wireup()
  }
  handleStart(description) {
    timerActions.startPomodoro(this.props.timerId, this.props.users, description)
  }
  handleStartRequest(){
    dispatcher.dispatch({type: 'StartRequested', payload: {}})
  }
  handleSquash() {
    timerActions.squash(this.props.timerId, this.props.pomodoroId, this.props.isShared)
  }
  handleToggleUser(user) {
    usersActions.toggleSelectedUsers(user)
  }
  handleLogin(username) {
    usersActions.login(username)
  }
  handleCancelStart() {
    dispatcher.dispatch({type: 'StartCanceled', payload: {}})
  }
  render(){ 
    return (
      <div>
        <DescriptionModal isActive={this.props.needDescription} onStart={this.handleStart} onCancel={this.handleCancelStart} />
        <LoginModal isActive={this.props.needLogin} onLogin={this.handleLogin} waiting={this.props.waitingForLogin}/>
        <NavBar username={this.props.username} />
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <Display time={this.props.time} isShared={this.props.isShared} />
            <Controls 
              startDisabled={this.props.startDisabled} 
              squashDisabled={this.props.squashDisabled} 
              onStart={this.handleStartRequest} 
              onSquash={this.handleSquash} />
          </div>
          <div className="columns">
            <TaskList timers={this.props.timers}/>
            <UserList users={this.props.users} onToggleUser={this.handleToggleUser}/>
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
