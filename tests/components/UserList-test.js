const React = require('react')
const mount = require('enzyme').mount
const UserList = require('../../src/app/main/components/UserList')

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
    const component = mount(<UserList users={users} />)
    const rows = component.find('a.panel-block')
    expect(2).toEqual(rows.length)
  })
})