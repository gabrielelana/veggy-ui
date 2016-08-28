const React = require('react')
const actions = require('./loginActions')


const LoginContainer = React.createClass({
  handleLogin(){
    actions.login(this.refs.username.value)
  },
  render(){
    
    return (
      <div>
        <label className="label">Choose your username</label>
        <p className="control">
          <input ref="username" className="input" type="text" placeholder="username" />
        </p>
        <a className="button is-primary" onClick={this.handleLogin}>Login</a>
      </div>
      )
  }
})

export default LoginContainer
