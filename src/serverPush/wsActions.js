import dispatcher from '../redux/dispatcher'
import pomodoroTicker from '../components/main/pomodoroTicker'

var clientTimerId = null

const wsActions = {
  PomodoroStarted(data) {
    clientTimerId = pomodoroTicker.start("1:00")
    dispatcher.dispatch({type: 'POMODORO_STARTED', payload: {
      clientTimerId: clientTimerId,
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})    
  },
  PomodoroEnded(data){
    pomodoroTicker.stop(clientTimerId)
    clientTimerId = null
    dispatcher.dispatch({type: 'POMODORO_ENDED', payload: {
      clientTimerId: null,
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})  
  },
  PomodoroSquashed(data){
    pomodoroTicker.stop(clientTimerId)
    clientTimerId = null
    dispatcher.dispatch({type: 'POMODORO_SQUASHED', payload: {
      clientTimerId: null,
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})  
  },
  LoggedIn(data){
    dispatcher.dispatch({type: data.event, payload: data})   
  },
  TimerCreated(data){
    dispatcher.dispatch({type: data.event, payload: data})   
  },
}

export default wsActions