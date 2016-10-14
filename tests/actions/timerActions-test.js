import timerActions from '../../src/app/main/actions/timerActions'
import {assert} from 'chai'
import nock from 'nock'

describe('timerActions', () => {
  it('startPomodoro should send a command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'StartPomodoro', 
                      duration: /\d+/
                    }).reply(201, { });   

    timerActions.startPomodoro()
    assert.isTrue(request.isDone())
  })
})
