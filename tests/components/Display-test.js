var React = require('react')
var mount = require('enzyme').mount
var Display = require('../../src/app/main/components/Display')

describe('<Display />', () => {
  
  it('should display the time passed via props', () => {
    const component = mount(<Display time="11:04" />)
    expect('11:04').toEqual(component.find('#time').text())
  })
})