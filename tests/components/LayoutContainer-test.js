var React = require('react')
var shallow = require('enzyme').shallow
var mount = require('enzyme').mount
var LayoutContainer = require('../../src/components/LayoutContainer')
var Controls = require('../../src/components/Controls')
var sinon = require('sinon')
var assert = require('chai').assert

describe('<LayoutContainer />', () => {
  
  it('should ', () => {
    const dispatcher = {dispatch: sinon.spy()}
    const component = mount(<LayoutContainer dispatcher={dispatcher} />)
    component.find('.is-primary').simulate('click')
    assert.isTrue(dispatcher.dispatch.called)
  })
})