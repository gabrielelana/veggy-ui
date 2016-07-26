
export default function controls(state, action){
  if (action.type === 'START_TIMER'){
    return { startDisabled: true, stopDisabled: false }
  }
  if (action.type === 'STOP_TIMER') {
    return { startDisabled: false, stopDisabled: true } 
  }
}