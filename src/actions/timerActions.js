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
        /* 
          TODO: Qui e' meglio TIMER_STARTED? O forse dovrei sparare START_TIMER prima di 
          chiamare le API e se le api tornano OK sparare TIMER_STARTED come conferma. 
          Se invece le API tornano errore blocco il timer appena partito.
        */
        dispatcher.dispatch({type: 'START_TIMER', payload: res.body})
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  }
}

export default timerActions