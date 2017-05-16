var controls = require('../../src/app/main/reducers/controls')

test('POMODORO_STARTED should return buttons status', () => {
  const state = controls({}, {type: 'POMODORO_STARTED'})
  expect(state.startDisabled).toBeTruthy()
  expect(state.squashDisabled).toBeFalsy()
})

test('POMODORO_SQUASHED should return buttons status', () => {
  const state = controls({}, {type: 'POMODORO_SQUASHED'})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

test('POMODORO_COMPLETED should return buttons status', () => {
  const state = controls({}, {type: 'POMODORO_COMPLETED'})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

test('POMODORO_VOIDED should return buttons status', () => {
  const state = controls({}, {type: 'POMODORO_VOIDED'})
  expect(state.startDisabled).toBeFalsy()
  expect(state.squashDisabled).toBeTruthy()
})

