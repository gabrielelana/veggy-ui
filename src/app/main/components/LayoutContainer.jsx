import React from 'react'
import MessageBar from '../../MessageBar'
import Display from './Display'
import Controls from './Controls'
import TaskList from './TaskList'
import UserList from './UserList'
import timerActions from '../actions/timerActions'
import resumeActions from '../actions/resumeActions'
import NavBar from '../../NavBar'

const LayoutContainer = React.createClass({
  componentWillMount() {
    resumeActions.wireup()
  },
  handleStart(){
    timerActions.startPomodoro(this.props.timerId)
  },
  handleSquash(){
    timerActions.squash(this.props.timerId, this.props.pomodoroId)
  },
  render(){ 
    return (
      <div>
        <NavBar username={this.props.username} />
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <Display time={this.props.time} />
            <Controls startDisabled={this.props.startDisabled} squashDisabled={this.props.squashDisabled} onStart={this.handleStart} onSquash={this.handleSquash} />
          </div>
          <div className="columns">
            <TaskList timers={this.props.timers}/>
            <UserList users={this.props.users}/>
          </div>
          <div className="columns">
            <MessageBar message={this.props.message} type={this.props.messageType} />
          </div>
        </div>
      </div>
    )
  }
})

export default LayoutContainer