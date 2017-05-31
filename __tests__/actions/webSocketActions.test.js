import webSocketActions from '../../src/app/main/actions/webSocketActions'
import * as Action from '../../src/app/main/action'

describe('webSocketActions', () => {
  test('foo', () => {

    const mo = jest.mock('../../src/app/main/actions/pomodoroTicker.js')

    const result = webSocketActions({event: Action.PomodoroStarted, data: {}})
    expect(result.type).toBe(Action.PomodoroStarted)
  })
})
