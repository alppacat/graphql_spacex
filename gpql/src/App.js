import React from 'react';
import logo from './assets/spacex_logo.png';
import styled from 'styled-components';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter, Route } from 'react-router-dom'
import Launches from './components/Launches'
import Launch from './components/Launch'

import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
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
    <BrowserRouter>
    <div className="App">
      <ContainerImage>
        <Image src={logo} alt="spacex logo"/>
      </ContainerImage>
    </div>
    <Route exact path="/" component={Launches} />
    <Route exact path="/launch/:flight_number" component={Launch} />
    </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
