import React from 'react'
import renderer from 'react-test-renderer';
import Controls from '../../src/app/main/components/Controls'

describe('<Controls />', () => {
  
  test('default value of prop start_disabled should be false', () => {
    const component = renderer.create(<Controls />)
    expect(component.toJSON()).toMatchSnapshot()
  })

  // it('default value of prop squash_disabled should be true', () => {
  //   const component = mount(<Controls />)
  //   expect(component.prop('squash_disabled')).toBe(true)
  // })

  // it('When start is clicked onStart callback should be called', (done) => {
  //   const component = mount(<Controls onStart={() => { done() }} />)
  //   component.find('#startButton').simulate('click')
  // })

  // it('When squash is clicked onSquash callback should be called', (done) => {
  //   const component = mount(<Controls squash_disabled={false} onSquash={() => { done() }} />)
  //   component.find('#squashButton').simulate('click')
  // })
})