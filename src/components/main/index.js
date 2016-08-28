import LayoutContainer from './LayoutContainer'
import reducers from '../../reducers'
import Wrapper from '../../redux/Wrapper'
import INITIAL_STATE from './INITIAL_STATE'

const Main = Wrapper(LayoutContainer, reducers, INITIAL_STATE)

export default Main
