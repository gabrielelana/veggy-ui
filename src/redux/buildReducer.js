// Versione semplificata
const createReducer = (reducer, projector = s => s) => {
  reducer.project = projector
  return reducer
}

const buildReducer = function(mapOrFn, projector = s => s){
  if (typeof(mapOrFn) === 'function'){
    return createReducer(mapOrFn)
  } 
  const reducer = function(state, action) {
    if (action.type in mapOrFn){
      return mapOrFn[action.type](state, action)
    } 
    return state
  }
  reducer.project = projector
  return reducer
}

export default buildReducer