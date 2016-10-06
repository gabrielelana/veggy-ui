const Display = props => (
  <div className="column is-three-quarters">
    <div className="box has-text-centered">
      <h1 id="time" className="title is-1">{props.time}{props.isShared && <i className="shared-icon fa fa-share-alt"></i>}</h1>
    </div>
  </div>
)

Display.defaultProps = {
  time: '25:00'
}

export default Display