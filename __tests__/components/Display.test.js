import React from 'react'
import renderer from 'react-test-renderer';
import Display from '../../src/app/main/components/Display'

describe('<Display />', () => {
  
  test('should display the time passed via props', () => {
    const component = renderer.create(<Display time="11:04" />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})