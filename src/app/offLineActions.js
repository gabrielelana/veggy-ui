import webSocketActions from './main/actions/webSocketActions'
import dispatcher from '../redux/dispatcher'
import settings from 'settings'
import * as Action from './main/action'
var timer_id = null

export function startOffLinePomodoro(payload){
  dispatcher.dispatch(webSocketActions({event: Action.PomodoroStarted, timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with: [] }))
  timer_id = setTimeout(() => {
    dispatcher.dispatch(webSocketActions({event: Action.PomodoroCompleted, timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
    timer_id = null
  }, settings.duration)
}

export function squashOffLinePomodoro(payload){
  clearTimeout(timer_id)
  timer_id = null
  dispatcher.dispatch(webSocketActions({event: Action.PomodoroSquashed, timer_id: payload.timer_id, pomodoro_id: payload.pomodoro_id, shared_with:[] }))
}

export function isTicking(){
  return timer_id !== null
}



