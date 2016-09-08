import request from 'superagent'
import {hashHistory} from 'react-router'
import moment from 'moment'
import dispatcher from '../../../redux/dispatcher'
import ws from '../../../serverPush/webSocketConnection'
import pomodoroTicker from './pomodoroTicker'

function getUsers(){
  request.get('http://localhost:4000/projections/latest-pomodori')
    .then(res => {
      dispatcher.dispatch({type: 'USERS_LOADED', payload: res.body})
    })
    .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
}

function getTimers(userInfo){
  const today = moment().format('YYYY-MM-DD')
  request.get(`http://localhost:4000/projections/pomodori-of-the-day?day=${today}&timer_id=${userInfo.timerId}`)
    .then(res => {
      dispatcher.dispatch({type: 'TIMERS_LOADED', payload: res.body})
    })
    .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
}

function resumeTimer(userInfo){
  request
    .get(`http://localhost:4000/projections/latest-pomodoro?timer_id=${userInfo.timerId}`)
    .then(res => {
      if (res.body.ticking){
        const startedAt = moment(res.body.started_at)
        // Wouldn't be better if server send to the client the remaining time?
        // TODO: remove constant value. 
        const elapsed = 60000 - moment().diff(startedAt)
        const time = moment(elapsed).format('mm:ss')

        pomodoroTicker.start(time)
        
        dispatcher.dispatch({type: 'RESUME_TIMER', payload: {
          userInfo, 
          time: time,
          timerId: res.body.timer_id,
          pomodoroId: res.body.pomodoro_id,

        }})
      }
    })
    .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
}

const resumeActions = {
  // TODO: remove constant value. (Global settings?) 
  
  wireup(){
    if (window.localStorage.getItem('veggy')) {
      const userInfo = JSON.parse(window.localStorage.getItem('veggy'))
      ws.connect(userInfo.username)

      getUsers()
      getTimers(userInfo)
      resumeTimer(userInfo)


      dispatcher.dispatch({type: 'INIT', payload: userInfo})
      
    } else {
      hashHistory.push('/login')
    }
  }
}

export default resumeActions