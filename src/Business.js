import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Card from 'react-bootstrap/Card';

function Business(props) {
  console.log(props)
  const {business} = props;
  // const business = {
  //   imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  //   name: 'MarginOtto Pizzeria',
  //   address: '1010 Paddington Way',
  //   city: 'Flavortown',
  //   state: 'NY',
  //   zipCode: '10101',
  //   category: 'Italian',
  //   rating: 4.5,
  //   reviewCount: 90
  // }

  return (
    // <div>
    //   <img src={business.imageSrc}/>
    //   <p>{business.name}</p>
    //   <p>{business.address}</p>
    //   <p>{business.city}</p>
    //   <p>{business.state}</p>
    //   <p>{business.zipCode}</p>
    //   <p>{business.category}</p>
    //   <p>{business.rating}</p>
    //   <p>{business.reviewCount}</p>
    // </div>
    <div>
      <Card className='m-4'>
        <Card.Img variant='top' src={business.imageSrc}/>
        <Card.Body>
          <Card.Title>
            {business.name}
          </Card.Title>
          <Container>
            <Row>
              <Col className='text-start text-nowrap'>{business.address}</Col>
              <Col className='text-end'>{business.category}</Col>
            </Row>
            <Row>
              <Col className='text-start'>{business.city}</Col>
              <Col className='text-end'>{business.rating}</Col>
            </Row>
            <Row>
              <Col className='text-start'>{business.zipCode}</Col>
              <Col className='text-end'>{business.reviewCount}</Col>
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Business;