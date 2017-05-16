import React from 'react'
import renderer from 'react-test-renderer';
import Controls from '../../src/app/main/components/Controls'

describe('<Controls />', () => {
  
  test('default value of prop startDisabled should be false', () => {
    const component = renderer.create(<Controls />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  // it('default value of prop squashDisabled should be true', () => {
  //   const component = mount(<Controls />)
  //   expect(component.prop('squashDisabled')).toBe(true)
  // })

  // it('When start is clicked onStart callback should be called', (done) => {
  //   const component = mount(<Controls onStart={() => { done() }} />)
  //   component.find('#startButton').simulate('click')
  // })

  // it('When squash is clicked onSquash callback should be called', (done) => {
  //   const component = mount(<Controls squashDisabled={false} onSquash={() => { done() }} />)
  //   component.find('#squashButton').simulate('click')
  // })
})