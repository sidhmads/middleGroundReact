import authenticate from '../gql/authenticate'

export const authenticationAction = (type, props) => async dispatch => {
  let payload = ''
  switch (type) {
    case 'LOGIN':
      let { data, client } = props;
      payload = data;
      let result = await authenticate('mutation', {email: "siddharth@gmail.com", password:"siddharth", type: 'individual'}, client)
      let {token, error} = result.generateToken
      payload = !error ? token : ''
      break;
    case 'LOGOUT':
      payload = '';
      break;
    default:
      payload = '';
  }
  dispatch({
    type: 'AUTHENTICATION',
    payload
  })
 }