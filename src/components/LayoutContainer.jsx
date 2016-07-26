import React from 'react'
import Wrapper from '../redux/Wrapper'
import INITIAL_STATE from './INITIAL_STATE'
import Display from './Display'
import Controls from './Controls'
import TaskList from './TaskList'
import UserList from './UserList'
import reducers from '../reducers'

const LayoutContainer = React.createClass({
  handleStart(){
    this.props.dispatcher.dispatch({type: 'START_TIMER'})
  },
  handleStop(){
    this.props.dispatcher.dispatch({type: 'STOP_TIMER'})
  },
  render(){ 
    return (
      <div style={{marginTop: '20px'}}>
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

export default Wrapper(LayoutContainer, reducers, INITIAL_STATE)