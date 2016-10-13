import request from 'superagent'
import settings from 'settings'
import actionStream from '../redux/actionStream'

export default function sendCommand(payload, cb) {
  request
    .post(`${settings.host}/commands`)
    .set('Content-Type', 'application/json')
    .send(payload)
    .end((err, res) => {
      if (err){
        actionStream.push({type: 'API_ERROR', payload: err})
      } 
      if (typeof(cb) === 'function'){
        cb(err, res)
      }
    })
}