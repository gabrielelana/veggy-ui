import MainContainer from './components/MainContainer'
import reducers from './reducers'
import Wrapper from '../../redux/Wrapper'
import INITIAL_STATE from './INITIAL_STATE'

const Main = Wrapper(MainContainer, reducers, INITIAL_STATE)

export default Main
