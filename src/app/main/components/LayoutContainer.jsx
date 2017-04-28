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

class LayoutContainer extends React.Component {
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
  render(){ 
    return (
      <div>
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

export default LayoutContainer