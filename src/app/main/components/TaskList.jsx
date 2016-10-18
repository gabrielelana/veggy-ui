
function TaskList(props){

  const rows = props.timers.map(t => {
    return <TaskRow timer={t} key={t.pomodoroId}/>
  })

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Started at</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  )
}


function TaskRow({timer}){
  return (
    <tr>
      <td>{timer.startedAt}</td>
      <td>{timer.status}</td>
    </tr>
    )
}

export default TaskList