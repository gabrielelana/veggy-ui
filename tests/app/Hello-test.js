const React = require('react')
const mount = require('enzyme').mount
const Hello = require('../../src/app/Hello')
const assert = require('chai').assert
var nock = require('nock')

describe('<Hello />', () => {
  
  it('should render hello', () => {
    const component = mount(<Hello />)
    assert.equal('Hello Codejam', component.find('h3').text())
  })

  it('Click Ping should send a command', () => {
    const component = mount(<Hello />)
    const request = nock('http://localhost:4000').post('/commands').reply(201, { })
    component.find('button').simulate('click')
    assert.isTrue(request.isDone())
  })

})