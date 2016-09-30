var React = require('react')
var shallow = require('enzyme').shallow
var mount = require('enzyme').mount
var dispatcher = require('../../src/redux/dispatcher')
var LayoutContainer = require('../../src/app/main/components/LayoutContainer')
var Controls = require('../../src/app/main/components/Controls')
var sinon = require('sinon')
var assert = require('chai').assert
var nock = require('nock');

describe('<LayoutContainer />', () => {
  
  it('should call the api', () => {
    var request = nock('http://localhost:4000')
                    .post('/commands')
                    .reply(201, { });

    const component = mount(<LayoutContainer dispatcher={dispatcher} users={[]} />)
    component.find('#startButton').simulate('click')
    assert.isTrue(request.isDone())
  })

  it('should call the api and manage the error', () => {
    var request = nock('http://localhost:4000')
                    .post('/commands')
                    .reply(500, { });

    const component = mount(<LayoutContainer dispatcher={dispatcher} users={[]}/>)
    component.find('#startButton').simulate('click')
    assert.isTrue(request.isDone())
  })


  it('should do something', (done) => {
    // TODO: qui vengono chiamate le vere API (usare nock per stubbare le chiamate)
    
    const component = mount(<LayoutContainer users={[]} />)
    // TODO: IMHO e' un grosso smell. Sto facendo assunzioni sull'implementazione 
    // interna di un componente (private)
    // TODO: USA GLI ID! component.find('#startTimer').simulate('click')
    component.find('#startButton').simulate('click')
    done()
  })

  
})