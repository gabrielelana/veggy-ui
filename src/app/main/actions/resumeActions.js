import request from 'superagent'
import {hashHistory} from 'react-router'
import moment from 'moment'
import settings from 'settings'
import dispatcher from '../../../redux/dispatcher'
import ws from '../../../serverPush/webSocketConnection'
import pomodoroTicker from './pomodoroTicker'

function getUsers(){
  return request.get(`${settings.host}/projections/latest-pomodori`)
    .then(res => {
      dispatcher.push({type: 'USERS_LOADED', payload: res.body})
    })
    .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))
}

function getTimers(userInfo){
  const today = moment().format('YYYY-MM-DD')
  request.get(`${settings.host}/projections/pomodori-of-the-day?day=${today}&timer_id=${userInfo.timerId}`)
    .then(res => {
      dispatcher.push({type: 'TIMERS_LOADED', payload: res.body})
    })
    .catch(err => dispatcher.push({type: 'API_ERROR', payload: err}))
}

function resumeTimer(userInfo){
  request
    .get(`${settings.host}/projections/latest-pomodoro?timer_id=${userInfo.timerId}`)
    .then(res => {
      if (res.body.status === 'started'){
        const startedAt = moment(res.body.started_at)
        const elapsed = settings.duration - moment().diff(startedAt)
        
        pomodoroTicker.start(elapsed)
        
        dispatcher.push({type: 'RESUME_TIMER', payload: {
          userInfo, 
          time: elapsed,
          timerId: res.body.timer_id,
          pomodoroId: res.body.pomodoro_id,

        }})
      }
    })
    .catch(err => {
      if (err.status !== 404){
        dispatcher.push({type: 'API_ERROR', payload: err})
      }
    })
}

const resumeActions = {
  wireup(){
    if (window.localStorage.getItem('veggy')) {
      const userInfo = JSON.parse(window.localStorage.getItem('veggy'))
      ws.sendCommand(`login:${userInfo.username}`)
      getUsers().then(getTimers(userInfo))
      resumeTimer(userInfo)
      dispatcher.push({type: 'INIT', payload: userInfo})
    } else {
      hashHistory.push('/login')
    }
  }
}

export default resumeActions