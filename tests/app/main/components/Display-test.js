const React = require('react')
const mount = require('enzyme').shallow
const Display = require('../../../../src/app/main/components/Display')
const assert = require('chai').assert

describe('<Display />', () => {
  
  it('should render', () => {
    const component = mount(<Display time="25:00" />)
    assert.equal('25:00', component.find('h1').text())
  })
})