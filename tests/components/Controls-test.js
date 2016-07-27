var React = require('react')
var mount = require('enzyme').mount
var Controls = require('../../src/components/Controls')
var assert = require('chai').assert

describe('<Controls />', () => {
  
  it('default value of prop startDisabled should be false', () => {
    const component = mount(<Controls />)
    assert.isFalse(component.prop('startDisabled'))
  })

  it('default value of prop stopDisabled should be true', () => {
    const component = mount(<Controls />)
    assert.isTrue(component.prop('stopDisabled'))
  })

  it('When start is clicked onStart callback should be called', (done) => {
    const component = mount(<Controls onStart={() => { done() }} />)
    component.find('button.is-primary').simulate('click')
  })

  it('When stop is clicked onStop callback should be called', (done) => {
    const component = mount(<Controls stopDisabled={false} onStop={() => { done() }} />)
    component.find('button.is-danger').simulate('click')
  })
})