const Controls = ({start_disabled, squash_disabled, onStart, onSquash}) => (
  <div className="column">
    <div className="box">
      <div className="control is-grouped ">
        <div className="control">
          <button id="startButton" disabled={start_disabled} onClick={onStart} className="button is-primary is-large">Start</button>
          <button id="squashButton" disabled={squash_disabled} onClick={onSquash} className="button is-danger is-large">Squash</button>
        </div>
      </div>
    </div>
  </div>
)

Controls.defaultProps = {
  start_disabled: false,
  squash_disabled: true,
  onStart: () => {},
  onSquash: () => {}
}

export default Controls