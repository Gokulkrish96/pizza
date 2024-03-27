import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Orders } from './Orders';

export const Cart = () => {

    const [show, setShow] = useState(false);
  return (
    <>

< Button variant="light" onClick={()=>{setShow(!show)}} className=" btn position-relative ">
<i className="bi bi-cart4"></i>
<span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger">
  3
    <span class="visually-hidden">Cart</span>
  </span>
  </Button>
  <Offcanvas show={show} onClick={()=>{setShow(!show)}} placement='end' >
    <Offcanvas.Header closeButton>
      <Offcanvas.Title>Cart:</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body>Lorem ipsum dolor sit amet consectetur adipisicing elit
      <Orders/>
      <div className="text-end my-3">
        <Button variant='primary'>Checkout</Button>
      </div>
    </Offcanvas.Body>
  </Offcanvas>
    </>
    
  )
}
