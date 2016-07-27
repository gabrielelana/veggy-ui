import React from 'react'
import request from 'superagent'
import Display from './Display'
import Controls from './Controls'
import TaskList from './TaskList'
import UserList from './UserList'
import dispatcher from '../redux/dispatcher'

const pomodoroActions = {
  startPomodoro() {

    request
      .post('/timer')
      .set('Content-Type', 'application/json')
      .send({command: 'StartPomodoro'})
      .end((err, res) => {
        if (err){
          return dispatcher.dispatch({type: 'API_ERROR', payload: err})          
        } 
        dispatcher.dispatch({type: 'START_TIMER'})    
      })
  }
}

const LayoutContainer = React.createClass({
  handleStart(){
    //pomodoroActions.startPomodoro()
    this.props.dispatcher.dispatch({type: 'START_TIMER'})
  },
  handleStop(){
    this.props.dispatcher.dispatch({type: 'STOP_TIMER'})
  },
  render(){ 
    return (
      <div>
        <div className="columns">
          <Display timer={this.props.timer} />
          <Controls startDisabled={this.props.startDisabled} stopDisabled={this.props.stopDisabled} onStart={this.handleStart} onStop={this.handleStop} />
        </div>
        <div className="columns">
          <TaskList />
          <UserList />
        </div>
      </div>
    )
  }
})

export default LayoutContainer