import request from 'superagent'
import dispatcher from '../redux/dispatcher'
  
const timerActions = {
  host: 'http://localhost:4000',
  startPomodoro() {
    request
      .post(`${this.host}/timer`)
      .set('Content-Type', 'application/json')
      .send({command: 'StartPomodoro' /*, duration: 10 * 1000*/})
      .then(res => {
        /* 
          TODO: Qui e' meglio TIMER_STARTED? O forse dovrei sparare START_TIMER prima di 
          chiamare le API e se le api tornano OK sparare TIMER_STARTED come conferma. 
          Se invece le API tornano errore blocco il timer appena partito.
        */
        /*
          - Se online devo aspettare il ws che mi invii l'evento di pomodoro partito
          - Se offline faccio partire e mi tengo via il comando per fare il track_completed_pomodoro/track_squashed_pomodoro 
          successivamente
        */
        dispatcher.dispatch({type: 'START_TIMER', payload: res.body})
      })
      .catch(err => dispatcher.dispatch({type: 'API_ERROR', payload: err}))
  }
}

export default timerActions