import React, { Component } from 'react'
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import styled from 'styled-components';

const Launches_query = gql `
  query LaunchesQuery{
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

const Header = styled.h1`
  color: black;
  font-size: 1.3em;
`

export class Launches extends Component {
  render() {
    return (
      <div>
        <Header>Launches</Header>
        <Query query={Launches_query}>
          {
            ({ loading, error, data}) => {
              if(loading) return <h4>loading...</h4>
              if(error) console.log(error);
              console.log(data)
              return <h1>prueba</h1>
            }
          }

        </Query>
      </div>
    )
  }
}

export default Launches
