const controls = require('../../src/app/main/reducers/controls')
import * as Action from '../../src/app/main/action'

test('PomodoroStarted should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroStarted})
  expect(state.startDisabled).toBeTruthy()
  expect(state.squashDisabled).toBeFalsy()
})

test('PomodoroSquashed should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroSquashed})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

test('PomodoroCompleted should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroCompleted})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

test('PomodoroVoided should return buttons status', () => {
  const state = controls({}, {type: Action.PomodoroVoided})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

