var React = require('react')
var mount = require('enzyme').mount
var shallow = require('enzyme').shallow
var Fake = require('../src/app/Fake')
var assert = require('chai').assert

describe('<Fake />', () => {
  
  it("contains spec with an expectation", function() {
    assert.isTrue(shallow(<Fake />).is('.foo'));
  });

  it("contains spec with an expectation", function() {
    var wrapper = shallow(<Fake />)
    assert.equal(wrapper.state().counter, 0);
  });

  it("contains spec with an expectation", function() {
    var wrapper = shallow(<Fake />)
    wrapper.find('button').simulate('click')
    assert.equal(wrapper.state().counter, 1);
  });

  it("contains spec with an expectation", function() {
    var wrapper = shallow(<Fake />)
    wrapper.find('button').simulate('click')
    wrapper.find('button').simulate('click')
    assert.equal(wrapper.state().counter, 2);
  });
})