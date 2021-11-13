import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';



const Banner = () => {

    return (
       <>
       <Carousel className="bg-info" >
  <Carousel.Item >
    <img
      className="d-block mx-auto w-75 " 
      src="https://cimg3.ibsrv.net/ibimg/hgm/1920x1080-1/100/683/ferrari-laferrari_100683803.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
    <NavLink style={{textDecoration:"none"}} to="/explores">  <Button className="btn btn-warning">Explore</Button></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://wallpaperaccess.com/full/3365084.jpg"
      alt="Second slide"
    />

    <Carousel.Caption>
    <NavLink style={{textDecoration:"none"}} to="/explores">  <Button className="btn btn-warning">Explore</Button></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block mx-auto w-75"
      src="https://i.pinimg.com/originals/bf/b8/a1/bfb8a1e40a0da24c6c299532311b915b.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
    
    <NavLink style={{textDecoration:"none"}} to="/explores">  <Button className="btn btn-warning">Explore</Button></NavLink>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
       </>
    );
};

export default Banner;