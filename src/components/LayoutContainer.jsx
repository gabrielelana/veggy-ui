import React from 'react'
import Wrapper from './Wrapper'
import store from './store'
import dispatcher from './dispatcher'
import Display from './Display'
import Controls from './Controls'
import TaskList from './TaskList'
import UserList from './UserList'
  
const LayoutContainer = React.createClass({
  handleStart(){
    dispatcher.dispatch({type: 'START_TIMER'})
  },
  handleStop(){
    dispatcher.dispatch({type: 'STOP_TIMER'})
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

function controlsReducer(state, action){
  if (action.type === 'START_TIMER'){
    return { startDisabled: true, stopDisabled: false }
  }
  if (action.type === 'STOP_TIMER') {
    return { startDisabled: false, stopDisabled: true } 
  }
}

function displayReducers(state, action){
  if (action.type === 'START_TIMER'){
    const timerId = setInterval(() => {
      const timer = decrease(state.timer)
      dispatcher.dispatch({type: 'UPDATE_TIMER', payload: {timer: timer}})
    }, 1000)
    return {timerId: timerId}
  }
  if (action.type === 'STOP_TIMER') {
    clearInterval(state.timerId)
    return {timerId: null}
  }
  if (action.type === 'UPDATE_TIMER') {
    return {timer: action.payload.timer}
  }
}

function decrease(timeStr){
  var minutes = parseInt(timeStr.split(':')[0], 10)
  var seconds = parseInt(timeStr.split(':')[1], 10)
  if (seconds === 0){
    seconds = 59
    minutes = minutes - 1
  } else {
    seconds = seconds - 1
  }
  const minutesStr = '00'.substring(0, 2 - minutes.toString().lenght) + minutes.toString()
  const secondsStr = '00'.substring(0, 2 - seconds.toString().lenght) + seconds.toString()
  return `${minutes}:${seconds}`
}

const INITIAL_STATE = { 
  startDisabled: false, 
  stopDisabled: true,
  timer: '25:00',
  timerId: null,

}

export default Wrapper(LayoutContainer, [controlsReducer, displayReducers], INITIAL_STATE)