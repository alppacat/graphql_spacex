import React from 'react';
import gql from 'graphql-tag'
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom'
import classNames from 'classnames';
import styled from 'styled-components';

const Launch_Query = gql`
  query Launch_Query($flight_number: Int!){
    launch(flight_number: $flight_number){
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local,
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }

    }
  }
`

const Title = styled.h1`
  text-align: center;
`
const Message = styled.div`
  width: 60%;
  align-self: center;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Header = styled.h1`
  align-self: center;
  font-size: 1.5em;
  margin-bottom: 1.5em;
  color: white;
`
const Button = styled(Link)`
  align-self: center;
`

const Launch = (props) => {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number)
  return ( <Container>
    <Query query={Launch_Query} variables={{flight_number}}>
    {
      ({loading, error, data})=>{
        if(loading) return <h1>Loading...</h1>
        if(error) return console.log(error);
        console.log(data)
        return <React.Fragment>
        <Header>Launch Details</Header>
        <Message className="message is-dark">
          <Title className={classNames({ 'has-text-success is-size-6 message-header': data.launch.launch_success,
              'has-text-danger is-size-6 message-header': !data.launch.launch_success})}> Mission:{  data.launch.mission_name}</Title>
              <div className="message-body">
              <p>Launch year: {data.launch.launch_year}</p>
              <p>Rocket name: { data.launch.rocket.rocket_name }</p>
              <p>Rocket type: {data.launch.rocket.rocket_type }</p>
              </div>
        </Message>
        <Button to="/" className="button is-primary">Go back</Button>

        </React.Fragment>
      }
    }

    </Query>
  </Container>)
}

export default Launch;