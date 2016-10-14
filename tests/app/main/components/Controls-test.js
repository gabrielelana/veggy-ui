const React = require('react')
const mount = require('enzyme').shallow
const Controls = require('../../../../src/app/main/components/Controls')
const assert = require('chai').assert

describe('<Controls />', () => {
  
  it('should render', () => {
    const component = mount(<Controls />)
    assert.equal(1, component.find('#startButton').length)
  })
  
  it('Should render with start disabled', () => {
    const component = mount(<Controls  startDisabled={true} />)
    assert.isTrue(component.find('#startButton').prop('disabled'))
  })

    it('Should render with start enabled', () => {
    const component = mount(<Controls  startDisabled={false} />)
    assert.isFalse(component.find('#startButton').prop('disabled'))
  })

  it('Click Start should call the callback', done => {
    const component = mount(<Controls  onStart={() => done()} />)
    component.find('#startButton').simulate('click')
  })

})