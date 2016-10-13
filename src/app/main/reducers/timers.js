import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'TIMERS_LOADED': (state, action) => { 
    return {
      timers: action.payload.map(t => {
        return {
          id: t.pomodoro_id, 
          status: t.status, 
          startedAt: t.started_at
        }
      })
    }
  },
  'POMODORO_STARTED': (state, action) => {
    return {
      timers: [...state.timers, {
        id: action.payload.pomodoroId, 
        status: 'started', 
        startedAt: new Date()
      }]
    }
  },
  'POMODORO_COMPLETED': (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return Object.assign(t, {status: 'completed'})
        }
        return t
      })
    }
  },
  'POMODORO_SQUASHED': (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return Object.assign(t, {status:'squashed'})
        }
        return t
      })
    }
  }
})

