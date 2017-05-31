import ReactDOM from 'react-dom'
import ws from '../redux/webSocketStream.js'
import Main from './main'

require('../sass/style.scss')
ws.connect()

ReactDOM.render(<Main />, document.getElementById('app'))
