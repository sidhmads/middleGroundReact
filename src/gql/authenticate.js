import { gql } from "apollo-boost"

export default async function authenticationCall(type, props, client) {
  let data;
  if (type === 'mutation') {
    let { email, password, type } = props;
    await client.mutate({
      mutation: gql`
        mutation generateToken($email: String!, $password: String!, $type: userType!) {
          generateToken(email: $email, password: $password, type: $type) {
            token,
            error
          }
        }
      `,
      variables: {
        email: email,
        password: password,
        type: type
      }
    }).then(result => data = result.data)
  }
  return data;
}