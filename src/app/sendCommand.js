import request from 'superagent'
import settings from 'settings'

export default function sendCommand(payload){
  return (request
      .post(`${settings.host}/commands`)
      .set('Content-Type', 'application/json')
      .send(payload))
}
