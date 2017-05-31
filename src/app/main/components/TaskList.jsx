import moment from 'moment'

const TaskList = ({timers}) => {
  const rows = timers.map(t => <TaskRow key={t.id} {...t} />)
  return (
    <div className="column is-one-third">
      <table className="table">
        <thead>
          <tr>
            <th>Started at</th>
            <th>Description</th>
            <th>Shared</th>
            <th className="centered">Status</th>
          </tr>
        </thead>
        <tbody>
         {rows}
        </tbody>
      </table>
    </div>
  )
}

TaskList.defaultProps = {
  timers: []
}

function TaskRow(props){
  var shared_with = props.shared_with.map(w => <span className="tag is-info" key={w} >{`${w}`}</span>)
  return (
    <tr>
      <td>{moment(props.startedAt).format('DD-MM-YYYY hh:mm:ss')}</td>
      <td>{props.description}</td>
      <td>{shared_with}</td>
      <td className="centered">{getStatusIcon(props.status)}</td>
    </tr>)
}

const statuses = {
  'started': 'pi-pomodoro-ticking',
  'completed': 'pi-pomodoro-done',
  'squashed': 'pi-pomodoro-squashed'
}

function getStatusIcon(status){
  return <span className="icon"><i className={statuses[status]}></i></span>  
}

export default TaskList