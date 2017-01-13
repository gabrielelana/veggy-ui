import buildReducer from '../../../redux/buildReducer'

const findShares = (users, sharedWith) => users.filter(u => sharedWith.indexOf(u.timerId) > -1).map(u => u.username)

export default buildReducer({
  'TIMERS_LOADED': (state, action) => { 
    return {
      timers: action.payload.map(t => {
        return {
          id: t.pomodoro_id, 
          status: t.status, 
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
        startedAt: new Date(),
        sharedWith: findShares(state.users, action.payload.sharedWith)
      }]
    }
  },
  'POMODORO_COMPLETED': (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return Object.assign({}, t, {status: 'completed'})
        }
        return t
      })
    }
  },
  'POMODORO_SQUASHED': (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return Object.assign({}, t, {status:'squashed'})
        }
        return t
      })
    }
  },
  'POMODORO_VOIDED': (state, action) => {
    return {
      timers: state.timers.filter(t => t.id !== action.payload.pomodoroId)
    }
  }
})

