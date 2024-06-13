import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://new-heron-87.hasura.app/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'w0KM7JCMbWR2gC72Oo65UIjn6F0XBbq2TxdAmKyB4cgcf9AGgSf7ZpFTZ5xm8oDs'
  }
});
 export const GET_TASK = gql`
              query MyTask {
                tasks {
                  id
                  task
                }
              }`

 export  const ADD_TODO = gql`
  mutation AddTodo( $task: String!) {
    insert_tasks(objects:[{ task: $task }]) {
      returning {
        id
        task
      }
     affected_rows
    }
  }
`;

export const DELETE_TODO = gql`
  mutation DeleteTodo($id: Int!) {
    delete_tasks(where: { id: { _eq: $id } }) {
      returning {
        id
        task
      }
      affected_rows
    }
  }
`;