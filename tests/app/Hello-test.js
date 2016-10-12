const React = require('react')
const mount = require('enzyme').mount
const Hello = require('../../src/app/Hello')
const assert = require('chai').assert

describe('<Hello />', () => {
  
  it('should render hello', () => {
    const component = mount(<Hello />)
    assert.equal('Hello Codejam', component.find('div').text())
  })

})