import timerActions from '../../src/app/main/actions/timerActions'
import {assert} from 'chai'
import nock from 'nock'

describe('timerActions', () => {
  it('startPomodoro should send a command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'StartPomodoro', 
                      duration: /\d+/, 
                      timer_id: '123'
                    }).reply(201, { });   

    timerActions.startPomodoro('123', [])
    assert.isTrue(request.isDone())
  })
})
