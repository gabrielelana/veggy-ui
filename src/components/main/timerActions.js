import request from 'superagent'
import {hashHistory} from 'react-router'
import dispatcher from '../../redux/dispatcher'
import commandStore from '../../serverPush/commandStore'
import ws from '../../serverPush/webSocketDispatcher'
import moment from 'moment'
import pomodoroTicker from './pomodoroTicker'


const timerActions = {
  // TODO: remove constant value. (Global settings?) 
  host: 'http://localhost:4000',
  startPomodoro(timerId) {
    request
      .post(`${this.host}/commands`)
      .set('Content-Type', 'application/json')
      // TODO: remove constant value. 
      .send({command: 'StartPomodoro', duration: 6 * 10 * 1000, timer_id: timerId})
      .then(res => {
        commandStore.store(res.body.id)
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  },
  squash(timerId, pomodoroId){
    request
      .post(`${this.host}/commands`)
      .set('Content-Type', 'application/json')  
      .send({command: 'SquashPomodoro', timer_id: timerId, pomodoro_id: pomodoroId})
      .then(res => {
        commandStore.store(res.body.id)
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))

  },
  wireup(){
    if (window.localStorage.getItem('veggy')) {
      const userInfo = JSON.parse(window.localStorage.getItem('veggy'))
      ws.connect(userInfo.username)
      dispatcher.dispatch({type: 'INIT', payload: userInfo})
      request
        .get(`${this.host}/timers/${userInfo.timerId}/pomodori/latest`)
        .then(res => {
          if (res.body.ticking){

            const startedAt = moment(res.body.started_at)
            // Wouldn't be better if server send to the client the remaining time?
            // TODO: remove constant value. 
            const elapsed = 60000 - moment().diff(startedAt)
            const timer = moment(elapsed).format('mm:ss')

            const clientTimerId = pomodoroTicker.start(timer)
            
            dispatcher.dispatch({type: 'RESUME_TIMER', payload: {
              userInfo, 
              timer: timer,
              timerId: res.body.timer_id,
              pomodoroId: res.body.pomodoro_id,
              clientTimerId: clientTimerId
            }})
          }
        })
        .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
    } else {
      hashHistory.push('/login')
    }
  }
}

export default timerActions