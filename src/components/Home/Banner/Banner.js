import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import banner1 from '../../../images/banner1.jpg'
 import banner2 from '../../../images/banner2.jpg'
 import banner3 from '../../../images/banner3.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel>
  <Carousel.Item interval={1000}>
    <img
      height={'500px'}
      className="d-block w-100"
      src={banner1}
      alt="First slide"
    />
    <Carousel.Caption  className='text-dark'>
      <h3>Wedding photography</h3>
      <p>Choose us and make your special day more special!!!!</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={500}>
    <img
     height={'500px'}
      className="d-block w-100"
      src={banner3}
      alt="Second slide"
    />
    <Carousel.Caption className='text-dark'>
      <h3>Wild life photography</h3>
      <p>If you like nature then you can enjoy it</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
     height={'500px'}
      className="d-block w-100"
      src={banner2}
      alt="Third slide"
    />
    <Carousel.Caption  className='text-dark'>
      <h3>Birthday Photography</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Banner;