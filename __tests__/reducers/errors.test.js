var messages = require('../../src/app/main/reducers/messages')
import * as Action from '../../src/app/main/action'

describe('Messages reducers', () => {
  
  test('ApiError should return the timer id', () => {
    const state = messages({}, {type: Action.ApiError})
    expect(state.message).toMatch(/There was an error calling the API:\w*/)
  })

})