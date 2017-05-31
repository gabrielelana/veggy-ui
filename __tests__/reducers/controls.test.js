const controls = require('../../src/app/main/reducers/controls')
import * as Action from '../../src/app/main/action'

test('PomodoroStarted should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroStarted})
  expect(state.start_disabled).toBeTruthy()
  expect(state.squash_disabled).toBeFalsy()
})

test('PomodoroSquashed should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroSquashed})
  expect(state.start_disabled).toBeFalsy()
  expect(state.squash_disabled).toBeTruthy()
})

test('PomodoroCompleted should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroCompleted})
  expect(state.start_disabled).toBeFalsy()
  expect(state.squash_disabled).toBeTruthy()
})

test('PomodoroVoided should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroVoided})
  expect(state.start_disabled).toBeFalsy()
  expect(state.squash_disabled).toBeTruthy()
})

test('ResumeTimer should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroStarted})
  expect(state.start_disabled).toBeTruthy()
  expect(state.squash_disabled).toBeFalsy()
})

