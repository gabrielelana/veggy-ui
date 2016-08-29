import request from 'superagent'
import dispatcher from '../../redux/dispatcher'
import commandStore from '../../serverPush/commandStore'
import ws from '../../serverPush/webSocketDispatcher'

const timerActions = {
  host: 'http://localhost:4000',
  startPomodoro(timerId) {
    request
      .post(`${this.host}/commands`)
      .set('Content-Type', 'application/json')
      .send({command: 'StartPomodoro', duration: 6 * 10 * 1000, timer_id: timerId})
      .then(res => {
        commandStore.store(res.body.id)
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  },
  wireup(){
    const userInfo = JSON.parse(localStorage.getItem('veggy'))
    ws.connect(userInfo.username)
    dispatcher.dispatch({type: 'INIT', payload: userInfo})
    request
      .get(`${this.host}/timers/${userInfo.timerId}/pomodori/latest`)
      .then(res => {
        if (res.body.ticking){
          dispatcher.dispatch({type: 'RESUME_TIMER', payload: {userInfo, startedAt: res.body.started_at}})
        }
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  }
}

export default timerActions