var errors = require('../../src/reducers/errors')
var assert = require('chai').assert

describe('Errors reducers', () => {
  
  it('API_ERROR should return the timer id', () => {
    const state = errors({}, {type: 'API_ERROR'})
    assert.match(state.message, /There was an error calling the API:\w*/)
  })

})