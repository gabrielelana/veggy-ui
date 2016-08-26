import request from 'superagent'
import dispatcher from '../redux/dispatcher'
import commandStore from '../serverPush/commandStore'
import ws from '../serverPush/webSocketDispatcher'

const loginActions = {
  host: 'http://localhost:4000',
  login(username) {
    request
      .post(`${this.host}/login`)
      .set('Content-Type', 'application/json')
      .send({command: 'Login', payload: {username: username}})
      .then(res => {
        // TODO: va bene qui?
        // Forse meglio dispatchare una nuova action che fara' il suo login
        ws.connect(username)
        commandStore.store(res.body.id)
      })
      .catch(err => {
        dispatcher.dispatch({type: 'API_ERROR', payload: err})})
  }
}
 
export default loginActions 