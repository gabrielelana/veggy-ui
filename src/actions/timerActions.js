import request from 'superagent'
import dispatcher from '../redux/dispatcher'
  
const timerActions = {
  host: 'http://localhost:3000',
  startPomodoro() {
    request
      .post(`${this.host}/timer`)
      .set('Content-Type', 'application/json')
      .send({command: 'StartPomodoro'})
      .then(res => {
        dispatcher.dispatch({type: 'START_TIMER', payload: res.body})
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  }
}

export default timerActions