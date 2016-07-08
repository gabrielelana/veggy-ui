const React = require('react')

const TaskList = React.createClass({
  render(){
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
            <tr>
              <td>12:35</td>
              <td>Task number 1</td>
            </tr>
            <tr>
              <td>13:20</td>
              <td>Task number 2</td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
})

export default TaskList