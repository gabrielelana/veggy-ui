import LoginContainer from './components/LoginContainer'
import reducers from './reducers/login'
import Wrapper from '../../redux/Wrapper'
import INITIAL_STATE from './INITIAL_STATE'

const Login = Wrapper(LoginContainer, [reducers], INITIAL_STATE)

export default Login
