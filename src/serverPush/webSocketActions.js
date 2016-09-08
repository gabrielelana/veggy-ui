import dispatcher from '../redux/dispatcher'
import pomodoroTicker from '../app/main/actions/pomodoroTicker'

const webSocketActions = {
  PomodoroStarted(data) {
    pomodoroTicker.start("1:00")
    dispatcher.dispatch({type: 'POMODORO_STARTED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})    
  },
  PomodoroEnded(data){
    pomodoroTicker.stop()
    dispatcher.dispatch({type: 'POMODORO_ENDED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})  
  },
  PomodoroSquashed(data){
    pomodoroTicker.stop()
    dispatcher.dispatch({type: 'POMODORO_SQUASHED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})  
  }
}

export default webSocketActions