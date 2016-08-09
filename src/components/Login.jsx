const React = require('react')
const actions = require('../actions/loginActions')


// TODO: remove
actions.login('emadb_fake')

// TODO: la login non e' un container quindi non deve avere accesso alle actions.
// Deve essere il container a chiamare la login.

const Login = React.createClass({
  handleLogin(){
    actions.login(this.refs.username.value)
  },
  render(){
    const isActive = this.props.active?'is-active':''
    return <div></div>
    // return (
    //   <div className={`modal ${isActive}`}>
    //     <div className="modal-background"></div>
    //      <div className="modal-card">
    //        <header className="modal-card-head">
    //          <p className="modal-card-title">Veggy</p>
    //        </header>
    //        <section className="modal-card-body">
    //          <label className="label">Choose your username</label>
    //          <p className="control">
    //            <input ref="username" className="input" type="text" placeholder="username" />
    //          </p>
    //        </section>
    //        <footer className="modal-card-foot">
    //          <a className="button is-primary" onClick={this.handleLogin}>Login</a>
    //        </footer>
    //      </div>
    //   </div>
    //   )
  }
})

export default Login
