import request from 'superagent'
import moment from 'moment'
import settings from 'settings'
import dispatcher from '../../../redux/dispatcher'
import ws from '../../../redux/webSocketStream'
import pomodoroTicker from './pomodoroTicker'
import * as Action from '../action'
import {getUsers, getTimers, getTags} from './loaders'

function getElapsed(time) {
  const startedAt = moment(time)
  const elapsed = settings.duration - moment().diff(startedAt)
  return elapsed
}

function resumeTimer(userInfo){
  return request
    .get(`${settings.host}/projections/latest-pomodoro?timer_id=${userInfo.timer_id}`)
    .then(res => {
      if (res.body.status === 'started'){
        const elapsed = getElapsed(res.body.started_at)
        pomodoroTicker.start(elapsed)
        dispatcher.dispatch({type: Action.ResumeTimer, payload: { time: elapsed, timer_id: res.body.timer_id, pomodoro_id: res.body.pomodoro_id }})
      }
    })
    .catch(err => {
      if (err.status !== 404){
        dispatcher.dispatch({type: Action.ApiError, payload: err})
      }
    })
}

const resumeActions = {
  wireup(){
    if (window.localStorage.getItem('veggy')) {
      const user = JSON.parse(window.localStorage.getItem('veggy'))
      ws.sendCommand(`login:${user.username}`)
      Promise.all([ getUsers(), getTimers(user), getTags(user), resumeTimer(user)]).then(() => dispatcher.dispatch({type: Action.Init, payload: user}))      
    } else {
      dispatcher.dispatch({type: Action.NeedLogin, payload: {}})
    }
  }
}

export default resumeActions
