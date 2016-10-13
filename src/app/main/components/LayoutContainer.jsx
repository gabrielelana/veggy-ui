import React from 'react'
import MessageBar from '../../MessageBar'
import Display from './Display'
import Controls from './Controls'
import timerActions from '../actions/timerActions'
import NavBar from '../../NavBar'

const LayoutContainer = React.createClass({
  handleStart(){
    timerActions.startPomodoro()
  },
  render(){ 
    return (
      <div>
        <NavBar username="username" />
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <Display time={this.props.time} />
            <Controls startDisabled={this.props.startDisabled} onStart={this.handleStart} />
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