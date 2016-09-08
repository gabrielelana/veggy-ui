import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'TIMERS_LOADED': (state, action) => ({ 
    timers: action.payload
  })
})