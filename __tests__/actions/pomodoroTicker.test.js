import pomodoroTicker from '../../src/app/main/actions/pomodoroTicker'
import dispatcher from '../../src/redux/dispatcher'
import {UpdateTimer} from '../../src/app/main/action'

describe('pomodoroTicker', () => {
  test('start should dispatch an action', done => {

    const id = dispatcher.register(action => {
      expect(action.type).toBe(UpdateTimer)
      expect(action.payload.time).toBe(9000)
      done()
      dispatcher.unregister(id)
    })

    pomodoroTicker.start(10000)
  })
  
})