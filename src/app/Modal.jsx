import PropTypes from 'prop-types'

function Modal(props) {
  let cancelButton = null
  if (props.onCancelClick) {
    cancelButton = <a className="button" onClick={props.onCancelClick}>{props.cancelBtnLabel}</a>
  }
  return (
    <div className={`modal ${props.isActive?'is-active':''}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">{props.title}</p>
        </header>
        <section className="modal-card-body">
          {props.children}
        </section>
        <footer className="modal-card-foot">
          <a className="button is-success" onClick={props.onOkClick}>{props.okBtnLabel}</a>
          {cancelButton}
          <WaitingWidget show={props.waiting} />
        </footer>
      </div>
    </div>
  )
}

Modal.defaultProps = {
  cancelBtnLabel: 'Cancel',
  okBtnLabel: 'Ok',
  title: '',
  isActive: false,
  waiting: false
}

Modal.propTypes = {
  onOkClick: PropTypes.func.isRequired
}

function WaitingWidget({show}) {
  if (show){
    return (
      <div className="waiting">
        <svg width="34px" height="34px" preserveAspectRatio="xMidYMid" className="uil-ripple">
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="20" cy="20" r="24" stroke="#1fc8db" fill="none" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;8;16"></animate>
            </circle>
          </g>
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="20" cy="20" r="8" stroke="#ed6c63" fill="none" strokeWidth="2" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;8;16"></animate>
            </circle>
          </g>
        </svg>
      </div>)
  } 
  return null
}

export default Modal
