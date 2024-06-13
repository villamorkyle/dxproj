import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider} from '@apollo/client';
import { client } from './queries';
import './index.css';
import TodoApp from './TodoApp';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
        <TodoApp />
    </ApolloProvider>
  </React.StrictMode>
);
reportWebVitals();
