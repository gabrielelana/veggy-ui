var React = require('react')
var mount = require('enzyme').mount
var Controls = require('../../src/app/main/components/Controls')
var assert = require('chai').assert

describe('<Controls />', () => {
  
  it('default value of prop startDisabled should be false', () => {
    const component = mount(<Controls />)
    assert.isFalse(component.prop('startDisabled'))
  })

  it('When start is clicked onStart callback should be called', (done) => {
    const component = mount(<Controls onStart={() => { done() }} />)
    component.find('#startButton').simulate('click')
  })
})