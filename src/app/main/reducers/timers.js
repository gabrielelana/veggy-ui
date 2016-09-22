import buildReducer from '../../../redux/buildReducer'
import moment from 'moment'

// TODO: gestire altri eventi: POMODORO_SQUASHED, POMODORO_COMPLETED, ecc...
// cosi posso aggiornare live l'elenco dei task
export default buildReducer({
  'TIMERS_LOADED': (state, action) => { 
    console.log('loaded', state, action)
    return {
      timers: action.payload.map(t => {
        return {
          id: t.pomodoro_id, 
          status: t.status, // started | completed | squashed
          started_at: t.started_at
        }
      })
    }
  },
  'POMODORO_STARTED': (state, action) => {
    return {
      timers: [...state.timers, {
        id: action.payload.pomodoroId, 
        status: 'started', 
        started_at: moment()
      }]
    }
  },
  'POMODORO_COMPLETED': (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return {
            id: t.id, 
            status: 'completed',
            started_at: t.started_at
          }  
        }
        return t
      })
    }
  },
  'POMODORO_SQUASHED': (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return {
            id: t.id, 
            status: 'squashed',
            started_at: t.started_at
          }  
        }
        return t
      })
    }
  }
})

