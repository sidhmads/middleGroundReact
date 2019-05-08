export const simpleAction = (prop) => dispatch => {
  console.log(prop)
  dispatch({
    type: 'AUTHENTICATION',
    payload: 'tokenDa'
  })
 }