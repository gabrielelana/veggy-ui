import React from 'react'
import store from './store'
import Wrapper from './Wrapper'
import dispatcher from './dispatcher'

const Controls = React.createClass({
  startTimer(){
    dispatcher.dispatch({type: 'START_TIMER', payload: {}})
    this.timer = setInterval(() => {
      dispatcher.dispatch({type: 'UPDATE_TIMER', payload: {time: this.props.time + 1}})
    }, 1000)
  }, 
  stopTimer(){
    clearInterval(this.timer)
    dispatcher.dispatch({type: 'STOP_TIMER', payload: {}})
  }, 
  render(){
    return (
      <div className="column">
        {this.props.time}
        <div className="box">
          <div className="control is-grouped ">
            <div className="control">
              <button disabled={this.props.startDisabled} onClick={this.startTimer} className="button is-primary is-large">Start</button>
            </div>
            <div className="control">
              <button disabled={this.props.stopDisabled} onClick={this.stopTimer} className="button is-danger is-large">Stop</button>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

function r1(state, action){
  if (action.type === 'START_TIMER'){
    return { startDisabled: true, stopDisabled: false }
  }
  if (action.type === 'STOP_TIMER') {
    return { startDisabled: false, stopDisabled: true } 
  }
}

function r2(state, action){
  if (action.type === 'START_TIMER'){
    return { running: true }
  }
  if (action.type === 'STOP_TIMER') {
    return { running: false } 
  } 
}

function r3(state, action){
  if (action.type === 'UPDATE_TIMER'){
    return {time: action.payload.time}
  }
}

const INITIAL_STATE = { startDisabled: false, stopDisabled: true, running: false, time: 0 }


export default Wrapper(Controls, [r1, r2, r3], INITIAL_STATE)