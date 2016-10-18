import buildReducer from '../../../redux/buildReducer'

export default buildReducer({
  'TIMERS_LOADED': (state, action) => ({ 
    timers: action.payload.map(t => ({
      pomodoroId: t.pomodoro_id,
      status: t.status,
      startedAt: t.started_at
    }) 
    )
  })
})