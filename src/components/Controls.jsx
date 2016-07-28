import React from 'react'

const Controls = React.createClass({
  getDefaultProps() {
    return {
      startDisabled: false,
      squashDisabled: true,
      onStart: () => {},
      onSquash: () => {}
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
              <button disabled={this.props.squashDisabled} onClick={this.props.onSquash} className="button is-danger is-large">Squash</button>
            </div>
          </div>
        </div>
      </div>
      )
  }
})

export default Controls