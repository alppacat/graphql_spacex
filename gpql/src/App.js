import React from 'react';
import logo from './assets/spacex_logo.png';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Launches from './components/Launches'

import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
})

const ContainerImage = styled.figure`
  width: 50%;
  height: auto;
`
const Image = styled.img`
  width: 100%;
  height: auto;
`

const App= ()=> {
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <ContainerImage>
        <Image src={logo} alt="spacex logo"/>
      </ContainerImage>
    </div>
    <Launches/>
    </ApolloProvider>
  );
}

export default App;
