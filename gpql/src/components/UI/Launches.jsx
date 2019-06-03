import React from 'react'
import styled from 'styled-components';
import classNames from 'classnames';
import Moment from 'react-moment'

const Card = styled.div`
  background-color: white;
  border-radius: 1em;
  width: 80%;
  height: 10em;
  margin: 1em;
`
const Button = styled.a`
  position: relative;
  left: 5px;
  margin-top: 1.5em;
  margin-left: 1.5em;
`
const CardContainer = styled.div`
  padding: 5px;
  margin-left: 1.5em;
`
const Span = styled.span`
  margin-right: .4em;
  font-size: 1.2em;
`


const Launches = (props) => {
  console.log(props)
  return (
    props.data.launches.map((launch)=>{
      console.log(launch)
      return (
              <Card className="card" key={launch.flight_number}>
            <header className="card-header">
              <p className="card-header-title"><Span className="fas fa-rocket"></Span> 
              <Span>Mission:</Span> 
               <Span className={classNames({ 'has-text-success': launch.launch_success,
              'has-text-danger': !launch.launch_success})}>{launch.mission_name}</Span></p>
            </header>
              <CardContainer className="card-content">
              <p>Date: <Moment format="YYYY-DD-MM HH:mm">{launch.launch_date_local}</Moment> </p>
              </CardContainer>
              <Button className="button is-info">More info</Button>
          </Card>
      )
    })
  )
}



export default Launches