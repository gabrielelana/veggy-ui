var React = require('react')
var mount = require('enzyme').mount
var MessageBar = require('../../src/app/MessageBar')

describe('<MessageBar />', () => {
  
  it('should display the message passed via props', () => {
    const component = mount(<MessageBar message="We could be heroes" type="error" />)
    expect('We could be heroes').toEqual(component.find('.notification.is-danger').text())
  })
})