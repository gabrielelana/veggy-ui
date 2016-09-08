const React = require('react')

const TaskList = React.createClass({
  render(){

    const rows = this.props.timers.map(t => <tr key={t._id}><td>{t.started_at}</td><td>{t.duration}</td></tr>)

    return (
      <div className="column">
        <table className="table">
          <thead>
            <tr>
              <th>Start</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
           {rows}
          </tbody>
        </table>
      </div>
    )
  }
})

export default TaskList