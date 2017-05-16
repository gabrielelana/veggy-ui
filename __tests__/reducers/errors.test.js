var messages = require('../../src/app/main/reducers/messages')

describe('Messages reducers', () => {
  
  test('API_ERROR should return the timer id', () => {
    const state = messages({}, {type: 'API_ERROR'})
    expect(state.message).toMatch(/There was an error calling the API:\w*/)
  })

})