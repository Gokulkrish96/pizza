import { Col, Container, Row } from "react-bootstrap";
import Carousel from 'react-bootstrap/Carousel';


export const Banner = () => {
  return (
    <section id="home">
      <Container fluid >
        <Row className="justify-content-center align-items-center">
            <Col lg={8} >
            <Carousel>
      <Carousel.Item interval={2000}>
        <img className="w-100 " src={require('../assets/one.jpeg')} alt="image1"/>
        <Carousel.Caption>
          <h3>Margherita</h3>
          <p className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="w-100" src={require('../assets/two.jpeg')}alt="image2"/>
        <Carousel.Caption>
          <h3>Cheese Pizza</h3>
          <p  className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="w-100" src={require('../assets/three.jpeg')} alt="image3"/>
        <Carousel.Caption>
          <h3>Pepporoni</h3>
          <p  className="d-none d-sm-block">
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
       <div className="text-center">
       <h2 className="display-5 mt-3">Pizzes for Every Occasion!</h2>
       <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
       </div>

       
      </Container>
      </section>
  )
}
