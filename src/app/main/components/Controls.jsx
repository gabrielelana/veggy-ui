const Controls = ({startDisabled, squashDisabled, onStart, onSquash}) => (
  <div className="column">
    <div className="box">
      <div className="control is-grouped ">
        <div className="control">
          <button id="startButton" disabled={startDisabled} onClick={onStart} className="button is-primary is-large">Start</button>
          <input className="input" type="text" placeholder="Text input" />
        </div>
        <div className="control">
          <button id="squashButton" disabled={squashDisabled} onClick={onSquash} className="button is-danger is-large">Squash</button>
        </div>
      </div>
    </div>
  </div>
)

/*
const Modal = () => (
  <div className="modal is-active">
      <div className="modal-background"></div>
      <div className="modal-card is-active">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete"></button>
        </header>
        <section className="modal-card-body">
          Ciao!!
        </section>
        <footer className="modal-card-foot">
          <a className="button is-primary">Save changes</a>
          <a className="button">Cancel</a>
        </footer>
      </div>
    </div>
)*/



Controls.defaultProps = {
  startDisabled: false,
  squashDisabled: true,
  onStart: () => {},
  onSquash: () => {}
}

export default Controls