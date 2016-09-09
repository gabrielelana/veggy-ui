import dispatcher from '../redux/dispatcher'
import pomodoroTicker from '../app/main/actions/pomodoroTicker'

let _listener = null

// TODO: Possiamo spostarlo direttamnte sul socket? 
// Il socket streamma gli eventi, questo componente li rimappa su azioni applicative
// il wrapper prende tutto e procede
export const producer = {
  id: 2,
  start: function (listener) {
    _listener = listener
  },
  next(action){
    _listener.next(action)
  },
  stop: function () {}
}

const webSocketActions = {
  PomodoroStarted(data) {
    pomodoroTicker.start("1:00")
    _listener.next({type: 'POMODORO_STARTED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})    
  },
  PomodoroEnded(data){
    pomodoroTicker.stop()
    _listener.next({type: 'POMODORO_ENDED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})  
  },
  PomodoroSquashed(data){
    pomodoroTicker.stop()
    _listener.next({type: 'POMODORO_SQUASHED', payload: {
      timerId: data.timer_id,
      pomodoroId: data.pomodoro_id
    }})  
  }
}

export default webSocketActions