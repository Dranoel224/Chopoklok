import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import logo from "../../assets/Images/res-logo.png";
import '../Footer/footer.css'
const Footer = () => {
  return <footer className='footer'>
 <Container>
  <Row>
    <Col lg='3' md='4' sm='6'>
    <div className="footer_logo text-start">
            <img src={logo} alt="logo"></img>
            <h5>ChopOklok</h5>
            <p>There is room for inquiries and proposals as to your personal satisfaction.</p>
          </div>
    </Col>

    <Col lg='3' md='4' sm='6'>
      <h5 className='footer_title'>Delivery Time</h5>
      <ListGroup>
        <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <span>Monday - Sunday</span>
          <p>07:00am - 10:00pm</p>
        </ListGroupItem>

        {/* <ListGroupItem className='delivery_time-item  border-0 ps-0'>
          <span>Sunday</span>
          <p>07:00am - 12:00pm</p>
        </ListGroupItem> */}
      </ListGroup>

    </Col>

    <Col lg='3' md='4' sm='6'>
      <h5 className='footer_title'>Contact</h5>
      <ListGroup className='deliver_time-list'>
        <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <p>Location: Bonaberi,Douala, Cameroon</p>
        </ListGroupItem>
        <ListGroupItem className='delivery_time-item border-0 ps-0'>
          <span>Email: example@gmail.com</span>
        </ListGroupItem>
      </ListGroup>
    </Col>

    <Col lg='3' md='4' sm='6' className='footer_title'>
      <h5>Newsletter</h5>
      <p>Subscribe to our newsletter</p>
      <div className="newsletter">
        <input type="email" placeholder='Enter your email' />
        <span>
          <i className="ri-send-plane-line"></i>
        </span>
      </div>
    </Col>
  </Row >
  <Row className='mt-5'>
  <Col lg='6' md='6'>
    <p className='copyright_text'>
      Copyright -2023, website made with love by Level-3 @ SevenAC. All Rights Reserved.
    </p>
  
  </Col>
  <Col lg='6' md='6'>
    <div className='social_links d-flex align-items-center gap-4 justify-content-end'>
      <p className='m-0'>Follow us:</p>
      <span>
        {""}
      <Link to="">
        <i className="ri-facebook-line"></i>
      </Link>
      </span>
      <span>
        {""}
      <Link to="">
        <i className="ri-github-line"></i>
      </Link>
      </span>
      <span>
        {""}
      <Link to="">
        <i className="ri-youtube-line"></i>
      </Link>
      </span>
      <span>
        {""}
      <Link to="">
        <i className="ri-linkedin-line"></i>
      </Link>{""}
      </span>
    </div>
  </Col>
  </Row>
 </Container>
  </footer>
}

export default Footer