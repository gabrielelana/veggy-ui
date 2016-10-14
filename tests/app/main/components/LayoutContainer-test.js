const React = require('react')
const mount = require('enzyme').mount
const LayoutContainer = require('../../../../src/app/main/components/LayoutContainer')
const assert = require('chai').assert
var nock = require('nock')

describe('<LayoutContainer />', () => {
  
  it('should render', () => {
    const component = mount(<LayoutContainer />)
    assert.equal(1, component.find('#startButton').length)
  })

  it('Click Start should send a StartPomodoro command', () => {
    const component = mount(<LayoutContainer />)
    const request = nock('http://localhost:4000').post('/commands').reply(201, {command: 'StartPomodoro', duration: /\d*/ })
    component.find('#startButton').simulate('click')
    assert.isTrue(request.isDone())
  })

})