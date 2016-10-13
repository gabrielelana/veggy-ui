import React from 'react'
import request from 'superagent'

const Hello = React.createClass({
  getInitialState(){
    return {counter: 0}
  },
  componentDidMount() {
    const ws = new WebSocket('ws://localhost:4000/ws')
    ws.onopen = () => { 
      setInterval(() => ws.send('ping'), 5000)
    }
    ws.onmessage = (evt) => {
      const data = JSON.parse(evt.data)
      if (data.event === 'Pong') {
        this.setState({ counter: data.counter })
      }
    }
  },
  
  handlePing() {
    request
      .post('http://localhost:4000/commands')
      .set('Content-Type', 'application/json')
      .send({command: 'Ping'})
      .end()
  },
  render() {
    return (
      <div>
        <h3>Hello Codejam</h3>
        <button className="button" onClick={this.handlePing}>Ping</button>
        <p>Pongs received: {this.state.counter}</p>
      </div>
    )
  }
})

export default Hello