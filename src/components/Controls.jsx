import React from 'react'
import store from './store'
import Wrapper from './Wrapper'
import dispatcher from './dispatcher'

const Controls = React.createClass({
  startTimer(){
    dispatcher.dispatch({type: 'START_TIMER', payload: {}})
  }, 
  stopTimer(){
    dispatcher.dispatch({type: 'STOP_TIMER', payload: {}})
  }, 
  render(){
    return (
      <div className="column">
        {this.props.running ? 'R':'S'}
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

const INITIAL_STATE = { startDisabled: false, stopDisabled: true, running: false }



export default Wrapper(Controls, [r1, r2], INITIAL_STATE)