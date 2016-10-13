import request from 'superagent'
import {hashHistory} from 'react-router'
import moment from 'moment'
import settings from 'settings'
import actionStream from '../../../redux/actionStream'
import ws from '../../../serverPush/webSocketStream'
import pomodoroTicker from './pomodoroTicker'

function resumeTimer(userInfo){
  request
    .get(`${settings.host}/projections/latest-pomodoro?timer_id=${userInfo.timerId}`)
    .then(res => {
      if (res.body.status === 'started'){
        const startedAt = moment(res.body.started_at)
        const elapsed = settings.duration - moment().diff(startedAt)
        
        pomodoroTicker.start(elapsed)
        
        actionStream.push({type: 'RESUME_TIMER', payload: {
          userInfo, 
          time: elapsed,
          timerId: res.body.timer_id,
          pomodoroId: res.body.pomodoro_id,

        }})
      }
    })
    .catch(err => {
      if (err.status !== 404){
        actionStream.push({type: 'API_ERROR', payload: err})
      }
    })
}

const resumeActions = {
  wireup(){
    if (window.localStorage.getItem('veggy')) {
      const userInfo = JSON.parse(window.localStorage.getItem('veggy'))
      ws.sendCommand(`login:${userInfo.username}`)
      resumeTimer(userInfo)
      actionStream.push({type: 'INIT', payload: userInfo})
    } else {
      hashHistory.push('/login')
    }
  }
}

export default resumeActions