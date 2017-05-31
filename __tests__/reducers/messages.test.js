var messages = require('../../src/app/main/reducers/messages')
import * as Action from '../../src/app/main/action'

describe('Messages reducers', () => {
  
  test('ApiError should return message and its type', () => {
    const state = messages({}, {type: Action.ApiError})
    expect(state.message).toMatch(/There was an error calling the API:\w*/)
    expect(state.message_type).toBe('error')
  })

  test('PomodoroCompleted should return message and its type', () => {
    const state = messages({}, {type: Action.PomodoroCompleted})
    expect(state.message).toMatch(/Good job! Your pomodoro is completed/i)
    expect(state.message_type).toBe('info')
  })

  test('PomodoroSquashed should return message and its type', () => {
    const state = messages({}, {type: Action.PomodoroSquashed})
    expect(state.message).toMatch(/Ouch! Your pomodoro has been interrupted/i)
    expect(state.message_type).toBe('warn')
  })
 
  test('PomodoroVoided should return message and its type', () => {
    const state = messages({}, {type: Action.PomodoroVoided})
    expect(state.message).toMatch(/There was some problem with your pomorodo. Probably some other user squashed it./i)
    expect(state.message_type).toBe('warn')
  })
 
  test('CommandFailed should return message and its type', () => {
    const state = messages({}, {type: Action.CommandFailed, payload: {why: 'foo'}})
    expect(state.message).toMatch(/There was an error:\w*./i)
    expect(state.message_type).toBe('error')
  })

  test('DismissMessage should clear messages', () => {
    const state = messages({}, {type: Action.DismissMessage})
    expect(state.message).toBe('')
    expect(state.message_type).toBe('none')
  })

})