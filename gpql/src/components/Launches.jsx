import React, { Component } from 'react'
import gql from 'graphql-tag';
import LaunchesUI from './UI/Launches'
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
  color: white;
  font-size: 1.9em;
  text-align: center;
`
const Container = styled.div`
  display:flex;
  flex-direction: column;
`
const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

`
const Info = styled.div`
  text-align: center;
  color: white;
  * {
    margin-left: .5em;
  }

`


export class Launches extends Component {
  render() {
    return (
      <Container>
        <Header>Launches</Header>
        <Info>
        <span><i className="fas fa-square has-text-success"></i> = success</span>
        <span><i className="fas fa-square has-text-danger"></i> = failed  </span>
        </Info>
        <Query query={Launches_query}>
          {
            ({ loading, error, data}) => {
              if(loading) return <h4>loading...</h4>
              if(error) console.log(error);
              return (
                <ContainerCards>
                <LaunchesUI data={data} />
                </ContainerCards>
              )
            }
          }

        </Query>
      </Container>
    )
  }
}

export default Launches
