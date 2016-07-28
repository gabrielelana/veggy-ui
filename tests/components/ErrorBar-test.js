var React = require('react')
var mount = require('enzyme').mount
var ErrorBar = require('../../src/components/ErrorBar')
var assert = require('chai').assert

describe('<ErrorBar />', () => {
  
  it('should display the message passed via props', () => {
    const component = mount(<ErrorBar message="We could be heroes" />)
    assert.equal('We could be heroes', component.find('.notification').text())
  })
})