import request from 'superagent'
import {hashHistory} from 'react-router'
import dispatcher from '../../redux/dispatcher'
import ws from '../../serverPush/webSocketDispatcher'

const loginActions = {
  host: 'http://localhost:4000',
  login(username) {
    request
      .post(`${this.host}/commands`)
      .set('Content-Type', 'application/json')
      .send({command: 'Login', username: username})
      .then(res => {
        dispatcher.dispatch({type: 'WAIT_FOR_LOGIN'})
      })
      .catch(err => {
        dispatcher.dispatch({type: 'API_ERROR', payload: err})
      })
    ws.connect(username)
  },
  redirect(username, timerId, userId){
    window.localStorage.setItem('veggy', JSON.stringify({username, timerId, userId}))
    // TODO: scegliere un metodo di redirect
    //hashHistory.push({pathname: '/', query: {u: username}})
    window.location.href = "/";
  }
}
 
export default loginActions 