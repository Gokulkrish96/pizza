import React, { useState } from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';


export const PickWeek = () => {


    const [show, setShow] = useState(false);

  return (
    <section id='must-try' className='my-3'>
    <div  className="text-center my-2 py-3">
    <h2 className='display-5 text-primary'><i class="bi bi-search-heart-fill"></i> Pick of the Week!</h2>
   </div>
   <Container>
   <Row className='align-items-center'>
    <Col md={7}>
    <Image src={require("../assets/center.jpeg")} fluid={true} alt='pizza' className='rounded'></Image>
    </Col>
    <Col md={5}>
        <div className='p-3'>
           <h2 className='h1'>Double cheese Fajita</h2>
           <p className='lead text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
           <Button variant='primary' onClick={()=>{setShow(true)}}><i class="bi bi-basket"></i> Buy Now</Button>
        </div>
    </Col>
   </Row>
   <ToastContainer position="bottom-end" className=" position-fixed bottom-0 end-0 p-3">
        <Toast onClose ={()=>{setShow(false)}} show={show} delay={3000} autohide>
          <Toast.Header closeButton={false}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Added!!</strong>
            <small className="text-muted">just now</small>
          </Toast.Header>
          <Toast.Body>Item added to Cart...</Toast.Body>
        </Toast>
        
      </ToastContainer>
   </Container>
   
    </section>
  
  )
}
