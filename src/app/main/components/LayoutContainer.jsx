import React from 'react'
import request from 'superagent'
import Display from './Display'
import Controls from './Controls'
import stringifyTime from './stringifyTime'
const duration = 25 * 60 * 1000

const LayoutContainer = React.createClass({
  getInitialState(){
    return {time: '25:00', startDisabled: false}
  },
  componentDidMount() {
    const ws = new WebSocket('ws://localhost:4000/ws')
    ws.onopen = () => { 
      setInterval(() => ws.send('ping'), 5000)
    }
    ws.onmessage = (evt) => {
      const data = JSON.parse(evt.data)
      if (data.event === 'PomodoroStarted') {
        this.ms = duration
        setInterval(() => {
          this.ms = this.ms - 1000
          this.setState({ time: stringifyTime(this.ms), duration: duration })
        }, 1000)
        this.setState({ startDisabled: true })
      }
    }
  },
  handleStart(){
    request
      .post('http://localhost:4000/commands')
      .set('Content-Type', 'application/json')
      .send({command: 'StartPomodoro', duration: duration })
      .end()
  },
  render(){ 
    return (
      <div>
        <div className="container" style={{marginTop: '20px'}}>
          <div className="columns">
            <Display time={this.state.time} />
            <Controls startDisabled={this.state.startDisabled} onStart={this.handleStart} />
          </div>
        </div>
      </div>
    )
  }
})

export default LayoutContainer