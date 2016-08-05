var commandStore = require('../../src/serverPush/commandStore')
var assert = require('chai').assert

describe('commandStore', () => {
  
  it('Should be able to add a command', () => {
    commandStore.store({id: '123', foo: 'bar'})
    assert.isTrue(commandStore.contains('123'))    
  })

  it('Should be able to add a command and remove it later', () => {
  
    commandStore.store({id: '123', foo: 'bar'})
    commandStore.remove('123')
    assert.isFalse(commandStore.contains('123'))
    
  })


})