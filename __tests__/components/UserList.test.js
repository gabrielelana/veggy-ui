import React from 'react'
import renderer from 'react-test-renderer'
import UserList from '../../src/app/main/components/UserList'

describe('<UserList />', () => {
  
  it('should display the tasks', () => {
    const users = [{
      userId: 1,
      selected: false,
      username: 'ema'
    },{
      userId: 2,
      selected: true,
      username: 'gabriele'
    }]
    const component = renderer.create(<UserList users={users} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})