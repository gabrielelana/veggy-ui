const React = require('react')

const LayoutContainer = React.createClass({
  render(){ 
    return (
      <div style={{marginTop: '20px'}}>
        <div className="columns">
          <div className="column is-three-quarters">
            <div className="box has-text-centered">
              <h1 className="title is-1">25:00</h1>
            </div>
          </div>
          <div className="column">
            <div className="box">
              <div className="control is-grouped ">
                <div className="control">
                  <button className="button is-primary is-large">Start</button>
                </div>
                <div className="control">
                  <button className="button is-danger is-large">Stop</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="column">
            <table className="table">
              <thead>
                <tr>
                  <th>Start</th>
                  <th>Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12:35</td>
                  <td>Task number 1</td>
                </tr>
                <tr>
                  <td>13:20</td>
                  <td>Task number 2</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="column">
            <nav className="panel">
              <p className="panel-heading">
                Users
              </p>
              <a className="panel-block is-active" href="#">
                <span className="panel-icon">
                  <i className="fa fa-user"></i>
                </span>
                user 1
              </a>
              <a className="panel-block" href="#">
                user 2
                <span className="panel-icon">
                  <i className="fa fa-user"></i>
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    )
  }
})

export default LayoutContainer