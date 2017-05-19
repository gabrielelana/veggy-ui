var messages = require('../../src/app/main/reducers/messages')

describe('Messages reducers', () => {
  
  test('ApiError should return the timer id', () => {
    const state = messages({}, {type: 'ApiError'})
    expect(state.message).toMatch(/There was an error calling the API:\w*/)
  })

})