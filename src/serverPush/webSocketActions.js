import dispatcher from '../redux/dispatcher'
import pomodoroTicker from '../app/main/actions/pomodoroTicker'

function webSocketActions(data){
  switch(data.event){
  case 'PomodoroStarted':
    pomodoroTicker.start("1:00")
    return {type: 'POMODORO_STARTED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }}
  case 'PomodoroEnded':
    pomodoroTicker.stop()
    return {type: 'POMODORO_ENDED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }}  
  case 'PomodoroSquashed':
    pomodoroTicker.stop()
    return {type: 'POMODORO_SQUASHED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }}
  case 'LoggedIn':
    return {type: 'LOGGED_IN', payload: {
      loggedIn: true, 
      timerId: data.timer_id,
      username: data.username, 
      userId: data.user_id 
    }}
  default: 
    return data
  }
}

export default webSocketActions