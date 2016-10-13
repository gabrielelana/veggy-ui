const Controls = props => (
  <div className="column">
    <div className="box">
      <div className="control is-grouped ">
        <div className="control">
          <button id="startButton" disabled={props.startDisabled} onClick={props.onStart} className="button is-primary is-large">Start</button>
        </div>
        <div className="control">
          <button id="squashButton" disabled={props.squashDisabled} onClick={props.onSquash} className="button is-danger is-large">Squash</button>
        </div>
      </div>
    </div>
  </div>
)


Controls.defaultProps = {
  startDisabled: false,
  squashDisabled: true,
  onStart: () => {},
  onSquash: () => {}
}

export default Controls