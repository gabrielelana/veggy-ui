import MainContainer from './components/MainContainer'
import reducers from './reducers'
import WithState from '../../redux/WithState'
import INITIAL_STATE from './INITIAL_STATE'

const Main = WithState(MainContainer, reducers, INITIAL_STATE)

export default Main
