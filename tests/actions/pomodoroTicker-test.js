import pomodoroTicker from '../../src/app/main/actions/pomodoroTicker'
import dispatcher from '../../../redux/dispatcher'
import {assert} from 'chai'


describe('pomodoroTicker', () => {
  
  // it('start should start sending messages to the stream', (done) => {
  //   const stream = dispatcher.createStream()
  //   var isDone = false
  //   const listener = stream.addListener({
  //       next: s => {
  //         if (!isDone){
  //           isDone = true
  //           assert.equal(4000, s.payload.time)
  //           stream.removeListener(listener)
  //           done()
  //         }
  //       },
  //       error: (err) => {},
  //       complete: () => {},
  //     })
  //   pomodoroTicker.start(5000)
  // })
})