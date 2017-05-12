import webSocketActions from './main/actions/webSocketActions'
import dispatcher from '../redux/dispatcher'
import settings from 'settings'

var timerId = null

export function startOffLinePomodoro(payload){
  dispatcher.dispatch(webSocketActions({event: 'PomodoroStarted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with: [] }))
  timerId = setTimeout(() => {
    dispatcher.dispatch(webSocketActions({event: 'PomodoroCompleted', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
    timerId = null
  }, settings.duration)
}

export function squashOffLinePomodoro(payload){
  clearTimeout(timerId)
  timerId = null
  dispatcher.dispatch(webSocketActions({event: 'PomodoroSquashed', timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
}

export function isTicking(){
  return timerId !== null
}



