import buildReducer from '../redux/buildReducer'

export default buildReducer({
  'API_ERROR': (state, action) => ({ message: `There was an error calling the API: ${action.payload}` })
})