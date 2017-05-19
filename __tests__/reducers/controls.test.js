var controls = require('../../src/app/main/reducers/controls')

test('PomodoroStarted should return buttons status', () => {
  const state = controls({}, {type: 'PomodoroStarted'})
  expect(state.startDisabled).toBeTruthy()
  expect(state.squashDisabled).toBeFalsy()
})

test('PomodoroSquashed should return buttons status', () => {
  const state = controls({}, {type: 'PomodoroSquashed'})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

test('PomodoroCompleted should return buttons status', () => {
  const state = controls({}, {type: 'PomodoroCompleted'})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

test('PomodoroVoided should return buttons status', () => {
  const state = controls({}, {type: 'PomodoroVoided'})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

