import React from 'react';
import './NewsLetter.css';
import { Container, Row, Col } from "reactstrap";
import maletourist from '../assets/images/male-tourist.png'

const NewsLetter = () => {
  return <section className='newsletter'>
    <Container>
        <Row>
            <Col lg='6'>
                <div className="newsletter__content">
                    <h2>subscribe to get useful information</h2>
                    <div className="newsletter__input">
                        <input type="email" placeholder='enter your email' />
                         <button className="btn newsletter__btn">Subscribe</button>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque ratione mollitia molestias, culpa at accusantium ad doloribus! Eum ab recusandae culpa delectus quisquam. Voluptas officia dolore cupiditate culpa, dignissimos blanditiis.
                    </p>
                </div>
            </Col>
            <Col lg='6'>
                <div className="newsletter__img">
                    <img src={maletourist} alt="" />
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default NewsLetter
