/*
  TODO: sto facendo in modo che i reducer ritornino il loro "pezzo" di stato
  e non il nuovo stato completo.
  In pratica il merge (tramite Object.assign) lo faccio fare al chiamante.
  Opinioni?
*/

export default function controls(state, action){
  if (action.type === 'START_TIMER'){
    return { startDisabled: true, squashDisabled: false }
  }
  if (action.type === 'SQUASH_TIMER') {
    return { startDisabled: false, squashDisabled: true } 
  }
}