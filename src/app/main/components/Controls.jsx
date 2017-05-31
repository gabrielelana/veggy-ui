const Controls = ({startDisabled, squashDisabled, onStart, onSquash}) => (
  <div className="column">
    <div className="box">
        <div className="block">
          <button id="startButton" disabled={startDisabled} onClick={onStart} className="button is-primary is-large">Start</button>
          <button id="squashButton" disabled={squashDisabled} onClick={onSquash} className="button is-danger is-large" style={{marginLeft:'10px'}}>Squash</button>
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