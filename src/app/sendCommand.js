import request from 'superagent'
import settings from 'settings'
import R from 'ramda'
import moment from 'moment'
import {startOffLinePomodoro, squashOffLinePomodoro, isTicking} from './offLineActions'
import Action from './main/action'
import dispatcher from '../redux/dispatcher'

const offlineCommands = []

export default function sendCommand(payload, cb) {
  if (navigator.onLine && !isTicking()) {
    request
      .post(`${settings.host}/commands`)
      .set('Content-Type', 'application/json')
      .send(payload)
      .end((err, res) => {
        if (err){
          dispatcher.dispatch({type: Action.ApiError, payload: err})
        } 
        if (typeof(cb) === 'function'){
          cb(err, res)
        }
      })
  } else {
    manageOffLineCommands(payload)
  } 
}

function manageOffLineCommands(payload) {
  if (payload.command === 'StartPomodoro') {
    payload.started_at = new Date()
    payload.pomodoro_id = `pomodoro_${offlineCommands.length}`
    offlineCommands.push(payload)
    startOffLinePomodoro(payload)
  }

  if (payload.command === 'SquashPomodoro') {
    payload.squashed_at = new Date()
    payload.pomodoro_id = `pomodoro_${offlineCommands.length - 1}`
    offlineCommands.push(payload)
    squashOffLinePomodoro(payload, offlineCommands.length)
  }
}

window.addEventListener("online", sendIfNotTicking)

function sendIfNotTicking() {
  if (isTicking()) {
    setTimeout(sendIfNotTicking, 5000)
  } else {
    sendOfflineCommands()
  } 
}

function sendOfflineCommands() {
  offlineCommands
    .filter(cmd => cmd.command === 'StartPomodoro')
    .forEach(cmd => {
      const squashCommand = R.find(c => c.command === 'SquashPomodoro' && c.pomodoro_id === cmd.pomodoro_id)(offlineCommands)
      if (squashCommand){
        sendCommand({command: 'TrackPomodoroSquashed', timer_id: squashCommand.timer_id, started_at: cmd.started_at, squashed_at: squashCommand.squashed_at})
      } else {
        const completed_at = moment(cmd.started_at).add(settings.duration, 'ms')
        sendCommand({command: 'TrackPomodoroCompleted', timer_id: cmd.timer_id, started_at: cmd.started_at, completed_at: completed_at})  
      }
    })
  offlineCommands.length = 0
}