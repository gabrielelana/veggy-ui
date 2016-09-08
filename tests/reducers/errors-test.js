var errors = require('../../src/app/main/reducers/messages')
var assert = require('chai').assert

describe('Messages reducers', () => {
  
  it('API_ERROR should return the timer id', () => {
    const state = errors({}, {type: 'API_ERROR'})
    assert.match(state.message, /There was an error calling the API:\w*/)
  })

})