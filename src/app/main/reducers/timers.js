import buildReducer from '../../../redux/buildReducer'
import moment from 'moment'

export default buildReducer({
  'TIMERS_LOADED': (state, action) => ({ 
    
    timers: action.payload.map(t => {
      const completed = moment(t.ended_at).diff(t.started_at, 'milliseconds') === t.duration
      return {
        _id: t._id, 
        ticking: t.ticking, 
        completed: completed, 
        started_at: t.started_at
      }
    })
  })
})

