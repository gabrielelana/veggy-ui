var React = require('react')
var shallow = require('enzyme').shallow
var mount = require('enzyme').mount
var dispatcher = require('../../src/redux/dispatcher')
var LayoutContainer = require('../../src/components/LayoutContainer')
var Controls = require('../../src/components/Controls')
var sinon = require('sinon')
var assert = require('chai').assert

describe('<LayoutContainer />', () => {
  
  // it('should ', () => {
  //   const dispatcher = {dispatch: sinon.spy()}
  //   const component = mount(<LayoutContainer dispatcher={dispatcher} />)
  //   component.find('.is-primary').simulate('click')
  //   assert.isTrue(dispatcher.dispatch.called)
  // })

  it('should ...', (done) => {
    // TODO: qui vengono chiamate le vere API (usare nock per stubbare le chiamate)
    dispatcher.register(action => done())
    const component = mount(<LayoutContainer />)
    // TODO: IMHO e' un grosso smell. Sto facendo assunzioni sull'implementazione 
    // interna di un componente (private)
    component.find('.is-primary').simulate('click')
  })

  
})