
export default function controls(state, action){
  if (action.type === 'START_TIMER'){
    return { startDisabled: true, squashDisabled: false }
  }
  if (action.type === 'SQUASH_TIMER') {
    return { startDisabled: false, squashDisabled: true } 
  }
}