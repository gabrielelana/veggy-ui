import buildReducer from '../../../redux/buildReducer'
import moment from 'moment'
import R from 'ramda'

const findShares = (users, sharedWith) => users.filter(u => sharedWith.indexOf(u.timer_id) > -1).map(u => u.username)

export default buildReducer({
  'TIMERS_LOADED': (state, action) => { 
    return {
      timers: action.payload.map(t => {
        return {
          id: t.pomodoro_id, 
          status: t.status, // started | completed | squashed
          startedAt: t.started_at,
          sharedWith: findShares(state.users||[], t.shared_with)
        }
      })
    }
  },
  'POMODORO_STARTED': (state, action) => {
    return {
      timers: [...state.timers, {
        id: action.payload.pomodoroId, 
        status: 'started', 
        startedAt: moment(),
        sharedWith: findShares(state.users, action.payload.sharedWith)
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
            startedAt: t.startedAt,
            sharedWith: t.sharedWith
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
            startedAt: t.started_at,
            sharedWith: t.sharedWith
          }  
        }
        return t
      })
    }
  },
  'POMODORO_VOIDED': (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return {
            id: t.id, 
            status: 'squashed', // TODO: aggiungiamo stato 'voided'?
            startedAt: t.started_at
          }  
        }
        return t
      })
    }
  }
})

