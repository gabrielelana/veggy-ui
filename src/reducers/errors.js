export default function error(state, action){
  if (action.type === 'API_ERROR'){
    console.log('ERROR', action.payload)
    return { message: `There was an error calling the API: ${action.payload}` }
  }
}