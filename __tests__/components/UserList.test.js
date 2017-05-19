import React from 'react'
import renderer from 'react-test-renderer'
import UserList from '../../src/app/main/components/UserList'

describe('<UserList />', () => {
  
  it('should display the tasks', () => {
    const users = [{
      user_id: 1,
      selected: false,
      username: 'ema'
    },{
      user_id: 2,
      selected: true,
      username: 'gabriele'
    }]
    const component = renderer.create(<UserList users={users} />)
    expect(component.toJSON()).toMatchSnapshot()
  })
})