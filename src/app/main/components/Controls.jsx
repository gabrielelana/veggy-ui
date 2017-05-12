const Controls = ({startDisabled, squashDisabled, onStart, onSquash}) => (
  <div className="column">
    <div className="box">
      <div className="control is-grouped ">
        <div className="control">
          <button id="startButton" disabled={startDisabled} onClick={onStart} className="button is-primary is-large">Start</button>
          <button id="squashButton" disabled={squashDisabled} onClick={onSquash} className="button is-danger is-large">Squash</button>
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