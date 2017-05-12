import React from 'react'

class Modal extends React.Component {
  render() {
    let cancelButton = null
    if (this.props.onCancelClick) {
      cancelButton = <a className="button" onClick={this.props.onCancelClick}>{this.props.cancelBtnLabel}</a>
    }
    return (
      <div className={`modal ${this.props.isActive?'is-active':''}`}>
        <div className="modal-background"></div>
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">{this.props.title}</p>
          </header>
          <section className="modal-card-body">
            {this.props.children}
          </section>
          <footer className="modal-card-foot">
            <a className="button is-success" onClick={this.props.onOkClick}>{this.props.okBtnLabel}</a>
            {cancelButton}
            <WaitingWidget show={this.props.waiting} />
          </footer>
        </div>
      </div>
    )
  }
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
