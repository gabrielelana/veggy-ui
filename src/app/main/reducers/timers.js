import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

const findShares = (users, sharedWith) => users.filter(u => sharedWith.indexOf(u.timerId) > -1).map(u => u.username)

export default buildReducer({
  [Action.TimersLoaded]: (state, action) => { 
    return {
      timers: action.payload.map(t => {
        return {
          id: t.pomodoro_id, 
          status: t.status, 
          startedAt: t.started_at,
          sharedWith: findShares(state.users||[], t.shared_with),
          description: t.description
        }
      })
    }
  },
  [Action.PomodoroStarted]: (state, action) => {
    return {
      timers: [...state.timers, {
        id: action.payload.pomodoroId, 
        status: 'started', 
        startedAt: new Date(),
        sharedWith: findShares(state.users, action.payload.sharedWith)
      }]
    }
  },
  [Action.PomodoroCompleted]: (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return Object.assign({}, t, {status: 'completed'})
        }
        return t
      })
    }
  },
  [Action.PomodoroSquashed]: (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoroId){
          return Object.assign({}, t, {status:'squashed'})
        }
        return t
      })
    }
  },
  [Action.PomodoroVoided]: (state, action) => {
    return {
      timers: state.timers.filter(t => t.id !== action.payload.pomodoroId)
    }
  }
})

