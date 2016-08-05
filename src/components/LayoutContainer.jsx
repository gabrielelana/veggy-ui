import React from 'react'
import ErrorBar from './ErrorBar'
import Display from './Display'
import Controls from './Controls'
import TaskList from './TaskList'
import UserList from './UserList'
import Login from './Login'
import timerActions from '../actions/timerActions'
import NavBar from './NavBar'

const LayoutContainer = React.createClass({
  handleStart(){
    timerActions.startPomodoro()
  },
  handleSquash(){
    this.props.dispatcher.dispatch({type: 'SQUASH_TIMER'})
  },
  render(){ 
    return (
      <div>
        <NavBar username={this.props.username} />
        <div className="container" style={{marginTop: '20px'}}>
          <Login active={!this.props.isLoggedIn} />
          <div className="columns">
            <Display timer={this.props.timer} />
            <Controls startDisabled={this.props.startDisabled} squashDisabled={this.props.squashDisabled} onStart={this.handleStart} onSquash={this.handleSquash} />
          </div>
          <div className="columns">
            <TaskList />
            <UserList />
          </div>
          <div className="columns">
           <ErrorBar message={this.props.message} />
          </div>
        </div>
      </div>
    )
  }
})

export default LayoutContainer