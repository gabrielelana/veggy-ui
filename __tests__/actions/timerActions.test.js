import timerActions from '../../src/app/main/actions/timerActions'
import nock from 'nock'

describe('timerActions', () => {
  test('startPomodoro should send a command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'StartPomodoro', 
                      duration: /\d+/, 
                      timer_id: '123'
                    }).reply(201, { });   

    timerActions.startPomodoro('123', [])
    expect(request.isDone()).toBe(true)
  })

  test('squashPomodoro should send a command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'SquashPomodoro', 
                      timer_id: '123',
                      pomodoro_id: '456'
                    }).reply(201, { });   

    timerActions.squash('123', '456')
    expect(request.isDone()).toBe(true)
  })

  test('startPomodoro with users should send a StartSharedPomodoro command', () => {
    const request = nock('http://localhost:4000')
                    .post('/commands', {
                      command: 'StartSharedPomodoro',
                      duration: /\d+/,  
                      timer_id: '123',
                      shared_with: ['456', '789']
                    }).reply(201, { });   

    timerActions.startPomodoro('123', [{timer_id:'456', selected: true}, {timer_id:'789', selected: true}])
    expect(request.isDone()).toBe(true)
  })
})
