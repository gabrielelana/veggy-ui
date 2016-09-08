const React = require('react')

const Display = React.createClass({
  render(){
    return (
      <div className="column is-three-quarters">
        <div className="box has-text-centered">
          <h1 id="time" className="title is-1">{this.props.time}</h1>
        </div>
      </div>
      )
  }
})

export default Display