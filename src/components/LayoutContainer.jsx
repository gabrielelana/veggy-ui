import React from 'react'
import ErrorBar from './ErrorBar'
import Display from './Display'
import Controls from './Controls'
import TaskList from './TaskList'
import UserList from './UserList'
import timerActions from '../actions/timerActions'

const LayoutContainer = React.createClass({
  handleStart(){
    timerActions.startPomodoro()
    //this.props.dispatcher.dispatch({type: 'START_TIMER'})
  },
  handleSquash(){
    this.props.dispatcher.dispatch({type: 'SQUASH_TIMER'})
  },
  render(){ 
    return (
      <div>
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
    )
  }
})

export default LayoutContainer