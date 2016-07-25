import React from 'react'
import store from './store'
import Wrapper from './Wrapper'

const Controls = React.createClass({
  render(){
    return (
      <div className="column">
        <div className="box">
          <div className="control is-grouped ">
            <div className="control">
              <button className="button is-primary is-large">Start</button>
            </div>
            <div className="control">
              <button className="button is-danger is-large">Stop</button>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

export default Controls