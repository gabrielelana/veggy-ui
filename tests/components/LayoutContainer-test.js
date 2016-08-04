var React = require('react')
var shallow = require('enzyme').shallow
var mount = require('enzyme').mount
var dispatcher = require('../../src/redux/dispatcher')
var LayoutContainer = require('../../src/components/LayoutContainer')
var Controls = require('../../src/components/Controls')
var sinon = require('sinon')
var assert = require('chai').assert
var nock = require('nock');

describe('<LayoutContainer />', () => {
  
  it('should call the api', () => {
    var request = nock('http://localhost:4000')
                    .post('/timer')
                    .reply(201, { fake: 'yo' });

    const component = mount(<LayoutContainer dispatcher={dispatcher} />)
    component.find('.is-primary').simulate('click')
    assert.isTrue(request.isDone())
  })

  it('should call the api and manage the error', () => {
    var request = nock('http://localhost:4000')
                    .post('/timer')
                    .reply(500, { fake: 'yo' });

    const component = mount(<LayoutContainer dispatcher={dispatcher} />)
    component.find('.is-primary').simulate('click')
    assert.isTrue(request.isDone())

    // TODO:Assert sull'errore visualizzato
  })


  it('should ...', (done) => {
    // TODO: qui vengono chiamate le vere API (usare nock per stubbare le chiamate)
    dispatcher.register(action => done())
    const component = mount(<LayoutContainer />)
    // TODO: IMHO e' un grosso smell. Sto facendo assunzioni sull'implementazione 
    // interna di un componente (private)
    // TODO: USA GLI ID! component.find('#startTimer').simulate('click')
    component.find('.is-primary').simulate('click')
  })

  
})