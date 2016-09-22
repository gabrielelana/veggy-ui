import buildReducer from '../../../redux/buildReducer'
import moment from 'moment'

// TODO: gestire altri eventi: POMODORO_SQUASHED, POMODORO_ENDED, ecc...
// cosi posso aggiornare live l'elenco dei task
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
  }),
  'POMODORO_STARTED': (state, action) => ({
    timers: [...state.timers, {
      _id: 't._id', 
      ticking: true, 
      completed: false, 
      started_at: moment()
    }]
  })

})

