import React from 'react'
import moment from 'moment'

const centerTd = {textAlign: 'center'}

const TaskList = props => {
  const rows = props.timers.map(t => <TaskRow key={t._id} {...t} />)
  return (
    <div className="column">
      <table className="table">
        <thead>
          <tr>
            <th>Started at</th>
            <th style={centerTd}>Ticking</th>
            <th style={centerTd}>Completed</th>
          </tr>
        </thead>
        <tbody>
         {rows}
        </tbody>
      </table>
    </div>
  )
}

function TaskRow(props){
  const ticking = props.ticking? <span className="icon is-small"><i className="fa fa-clock-o"></i></span> : <span></span>
  const completed = props.completed? <span className="icon is-small"><i className="fa fa-check"></i></span> : <span></span>
  return (
    <tr>
      <td>{moment(props.started_at).format('DD-MM-YYYY hh:mm:ss')}</td>
      <td style={centerTd}>{ticking}</td>
      <td style={centerTd}>{completed}</td>
    </tr>)
}

export default TaskList