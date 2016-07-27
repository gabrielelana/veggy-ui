import React from 'react'

const Controls = React.createClass({
  getDefaultProps() {
    return {
      startDisabled: false,
      stopDisabled: true,
      onStart: () => {},
      onStop: () => {}
    }
  },
  render() {
    return (
      <div className="column">
        <div className="box">
          <div className="control is-grouped ">
            <div className="control">
              <button disabled={this.props.startDisabled} onClick={this.props.onStart} className="button is-primary is-large">Start</button>
            </div>
            <div className="control">
              <button disabled={this.props.stopDisabled} onClick={this.props.onStop} className="button is-danger is-large">Stop</button>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

export default Controls