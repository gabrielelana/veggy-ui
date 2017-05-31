import R from 'ramda'
import buildReducer from '../../../redux/buildReducer'
import * as Action from '../action'

const findShares = (users, shared_with) => R.compose(R.map(u => u.username), R.filter(u => R.contains(u.timer_id, shared_with)))(users)

export default buildReducer({
  [Action.TimersLoaded]: (state, action) => { 
    return {
      timers: action.payload.map(t => {
        return {
          id: t.pomodoro_id, 
          status: t.status, 
          startedAt: t.started_at,
          shared_with: findShares(state.users||[], t.shared_with),
          description: t.description
        }
      })
    }
  },
  [Action.PomodoroStarted]: (state, action) => {
    return {
      timers: [...state.timers, {
        id: action.payload.pomodoro_id, 
        description: action.payload.description,
        status: 'started', 
        startedAt: new Date(),
        shared_with: findShares(state.users, action.payload.shared_with)
      }]
    }
  },
  [Action.PomodoroCompleted]: (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoro_id){
          return Object.assign({}, t, {status: 'completed'})
        }
        return t
      })
    }
  },
  [Action.PomodoroSquashed]: (state, action) => {
    return {
      timers: state.timers.map(t => {
        if (t.id === action.payload.pomodoro_id){
          return Object.assign({}, t, {status:'squashed'})
        }
        return t
      })
    }
  },
  [Action.PomodoroVoided]: (state, action) => {
    return {
      timers: state.timers.filter(t => t.id !== action.payload.pomodoro_id)
    }
  }
})

