var React = require('react')
var shallow = require('enzyme').shallow
var mount = require('enzyme').mount
// var actionStream = require('../../src/redux/actionStream')
var LayoutContainer = require('../../src/app/main/components/LayoutContainer')
var Controls = require('../../src/app/main/components/Controls')
var sinon = require('sinon')
var nock = require('nock');

describe('<LayoutContainer />', () => {
  
  it('On StartPomodoro click should send a command', () => {
    var request = nock('http://localhost:4000').post('/commands').reply(201, { });

    const component = mount(<LayoutContainer users={[]} />)
    component.find('#startButton').simulate('click')
    expect(request.isDone()).toBe(true)
  })

  it('On StartPomodoro click should send a command and manage the error', done => {
    var request = nock('http://localhost:4000')
                    .post('/commands')
                    .reply(500, { });

    const component = mount(<LayoutContainer users={[]}/>)
    component.find('#startButton').simulate('click')
    setTimeout(() => { 
      expect(component.find('.is-danger').length).toEqual(1)
      done()
    }, 10)
    expect(request.isDone()).toBe(true)
  })
})