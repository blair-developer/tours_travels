import React from 'react'
import './footer.css';
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import logo3 from '../../assets/images/logo3.png'

const quick__links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        display:'About'
    },
    {
        path:'/tours',
        display:'Tours'
    },
    

];
const quick__links2=[
    {
        path:'/gallery',
        display:'Gallery'
    },
    {
        path:'/login',
        display:'Login'
    },
    {
        path:'/register',
        display:'Register'
    },
    

]

const footer = () => {

  const year = new Date().getFullYear()

  return (
    <footer className='footer'>
        <Container>
            <Row>
                <Col lg='3'>
                    <div className="logo">
                        <img src={logo3} alt="" />
                        <p>Lorem ipsum dolor sit amet</p>
                        <div className="social__links d-flex align-items-center gap-4">
                            <span>
                                <Link to='#'><i class='ri-youtube-line'></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class='ri-github-fill'></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class='ri-facebook-circle-line'></i></Link>
                            </span>
                            <span>
                                <Link to='#'><i class='ri-instagram-line'></i></Link>
                            </span>
                        </div>
                    </div>
                </Col>
                <Col lg='3'>
                    <h5 className='footer__link-title'>Discovery</h5>
                    <ListGroup className='footer__quick-links'>
                       {
                        quick__links.map((item,index)=>(
                            <ListGroupItem key={index} className='bg-secondary ps-4 border-0'>
                               <Link to={item.path} className='text-white'>{item.display}</Link>
                            </ListGroupItem>
                        ))
                       }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className='footer__link-title'>Quick Links</h5>
                    <ListGroup className='footer__quick-links'>
                       {
                        quick__links2.map((item,index)=>(
                            <ListGroupItem key={index} className='bg-primary ps-4 border-0'>
                               <Link to={item.path} className='text-white'>{item.display}</Link>
                            </ListGroupItem>
                        ))
                       }
                    </ListGroup>
                </Col>
                <Col lg='3'>
                <h5 className='footer__link-title'>Contact Us</h5>
                    <ListGroup className='footer__quick-links'>
                            <ListGroupItem className='bg-success ps-4 border-0 d-flex align-items-center'>
                              <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-map-pin-line"></i></span>
                                Adress:
                              </h6>
                              <p className='mb-0'>nairobi, Kenya</p>
                            </ListGroupItem>
                            <ListGroupItem className='bg-success ps-4 border-0 d-flex align-items-center'>
                              <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-mail-line"></i></span>
                                Email:
                              </h6>
                              <p className='mb-0'>blair@gmail.com</p>
                            </ListGroupItem>
                            <ListGroupItem className='bg-success ps-4 border-0 d-flex align-items-center'>
                              <h6 className='mb-0 d-flex align-items-center gap-2'>
                                <span><i class="ri-phone-fill"></i></span>
                                Phone:
                              </h6>
                              <p className='mb-0'>0726720085</p>
                            </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col lg='12' className='text-center pt-5'>
                    <p className='copyright text-success fw-700'>Copyright {year}, design and developed by Blair. All rights reserved</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default footer
