const React = require('react')

const Index = React.createClass({
  getInitialState() {
    return { counter: 0 }
  },
  componentDidMount() {
    console.log('cdm')
  },
  count(){
    this.setState({counter: this.state.counter + 1})
  },
  render(){ 
    return (
      <div className="foo">
        <button onClick={this.count}>Click to count</button>
        <div>{this.state.counter}</div>
      </div>
    )
  }
})

export default Index