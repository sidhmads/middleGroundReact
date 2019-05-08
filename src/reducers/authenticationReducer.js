import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://localhost:4000"
});


export default (state = {client, token: '', isLogin: false}, action) => {
  switch (action.type) {
   case 'AUTHENTICATION':
   state.token = action.payload
   state.isLogin = state.token.length > 0
    return {
    ...state
    }
   default:
    return state
  }
 }
 