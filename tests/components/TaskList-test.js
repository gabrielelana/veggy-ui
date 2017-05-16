const React = require('react')
const mount = require('enzyme').mount
const TaskList = require('../../src/app/main/components/TaskList')

describe('<TaskList />', () => {
  
  it('should display the tasks', () => {
    const timers = [{
      id: 1,
      startedAt: '2010-04-09 11:10',
      sharedWith: [],
      status: 'completed'
    },{
      id: 2,
      startedAt: '2010-04-11 22:20',
      sharedWith: [],
      status: 'ticking'
    }]
    const component = mount(<TaskList timers={timers} />)
    const rows = component.find('tr')
    expect(3).toEqual(rows.length)
  })
})