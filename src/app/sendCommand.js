import request from 'superagent'

const host = 'http://localhost:4000'

export default function sendCommand(payload){
  return (request
      .post(`${host}/commands`)
      .set('Content-Type', 'application/json')
      .send(payload))
}
