import React from 'react'
import renderer from 'react-test-renderer'
import MessageBar from '../../src/app/MessageBar'

describe('<MessageBar />', () => {
  
  test('should display the message passed via props', () => {
    const component = renderer.create(<MessageBar message="We could be heroes" type="error" />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})