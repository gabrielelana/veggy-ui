import webSocketActions from './main/actions/webSocketActions'
import dispatcher from '../redux/dispatcher'
import settings from 'settings'
import Action from './main/action'
var timerId = null

export function startOffLinePomodoro(payload){
  dispatcher.dispatch(webSocketActions({event: Action.PomodoroStarted, timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with: [] }))
  timerId = setTimeout(() => {
    dispatcher.dispatch(webSocketActions({event: Action.PomodoroCompleted, timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
    timerId = null
  }, settings.duration)
}

export function squashOffLinePomodoro(payload){
  clearTimeout(timerId)
  timerId = null
  dispatcher.dispatch(webSocketActions({event: Action.PomodoroSquashed, timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
}

export function isTicking(){
  return timerId !== null
}



