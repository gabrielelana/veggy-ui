import buildReducer from '../redux/buildReducer'

export default buildReducer({
  'START_TIMER': (state, action) => ({ startDisabled: true, squashDisabled: false }),
  'SQUASH_TIMER': (state, action) => ({ startDisabled: false, squashDisabled: true })
})

// var r2 = createReducer((state, action) => {
//   if (action.type === 'START_TIMER'){
//     return { startDisabled: true, squashDisabled: false }
//   }
//   if (action.type === 'SQUASH_TIMER') {
//     return { startDisabled: false, squashDisabled: true } 
//   }
// })
