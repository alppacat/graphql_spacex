import React from 'react';
import logo from './assets/spacex_logo.png';
import styled from 'styled-components';

import './App.css';

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
    <div className="App">
      <ContainerImage>
        <Image src={logo} alt="spacex logo"/>
      </ContainerImage>

    </div>
  );
}

export default App;
