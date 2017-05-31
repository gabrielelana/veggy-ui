import React from 'react'
import renderer from 'react-test-renderer'
import TaskList from '../../src/app/main/components/TaskList'

describe('<TaskList />', () => {
  
  test('should display the tasks', () => {
    const timers = [{
      id: 1,
      startedAt: '2010-04-09 11:10',
      shared_with: [],
      status: 'completed'
    },{
      id: 2,
      startedAt: '2010-04-11 22:20',
      shared_with: [],
    }]
    const component = renderer.create(<TaskList timers={timers} />)
    expect(component.toJSON()).toMatchSnapshot()
    
  })
})