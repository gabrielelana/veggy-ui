import React from 'react'
import renderer from 'react-test-renderer'
// import {shallow} from 'enzyme'
import MainContainer from '../../src/app/main/components/MainContainer.jsx'
import Controls from '../../src/app/main/components/Controls'
import sinon from 'sinon'
import nock from 'nock'

// TODO: mockare il local storage
describe('<MainContainer />', () => {
  test('todo', () => { })  
  
  // test('should render', () => {
  //   const component = renderer.create(<MainContainer  />)
  //   expect(component.toJSON()).toMatchSnapshot()
  // })
  // test('On StartPomodoro click should send a command', () => {
  //   var request = nock('http://localhost:4000').post('/commands').reply(201, { });

  //   const component = shallow(<MainContainer users={[]} />)
  //   component.find('#startButton').simulate('click')
  //   expect(request.isDone()).toBe(true)
  // })

  // tes5('On StartPomodoro click should send a command and manage the error', done => {
  //   var request = nock('http://localhost:4000')
  //                   .post('/commands')
  //                   .reply(500, { });

  //   const component = mount(<LayoutContainer users={[]}/>)
  //   component.find('#startButton').simulate('click')
  //   setTimeout(() => { 
  //     expect(component.find('.is-danger').length).toEqual(1)
  //     done()
  //   }, 10)
  //   expect(request.isDone()).toBe(true)
  // })
})