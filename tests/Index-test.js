var React = require('react')
var mount = require('enzyme').mount
var shallow = require('enzyme').shallow
var Index = require('../src/components/Index')
var assert = require('chai').assert

describe('<Index />', () => {
  
  it("contains spec with an expectation", function() {
    assert.isTrue(shallow(<Index />).is('.foo'));
  });

  it("contains spec with an expectation", function() {
    var wrapper = shallow(<Index />)
    assert.equal(wrapper.state().counter, 0);
  });

  it("contains spec with an expectation", function() {
    var wrapper = shallow(<Index />)
    wrapper.find('button').simulate('click')
    assert.equal(wrapper.state().counter, 1);
  });

  it("contains spec with an expectation", function() {
    var wrapper = shallow(<Index />)
    wrapper.find('button').simulate('click')
    wrapper.find('button').simulate('click')
    assert.equal(wrapper.state().counter, 2);
  });
})