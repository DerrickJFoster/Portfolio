import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import '../App.css'

class Header extends Component {
  render() {
    return (
      <>
      <Carousel className='carousel'>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://footage.framepool.com/shotimg/qf/478639735-gelnhausen-st-mary's-church-hessen-place-of-worship.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1 className='title-name'>Derrick J Foster</h1>
            <h3>Gelnhausen, Germany</h3>
            <p>I was born in a German hospital nearly 30 years ago. My mother and I came back to the States when I was only 2 months old. One day I would love to go back and visit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://ewscripps.brightspotcdn.com/51/cc/5ce2d37240fda947909849aed687/hazy-denver.png"
            alt="Denver Skyline"
          />

          <Carousel.Caption>
          <h1 className='title-name'>Derrick J Foster</h1>
            <h3>Denver, CO</h3>
            <p>Denver has been my home for nearly a decade. It is a wonderful "up & coming" place with tons to do and beautiful sights to see.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://scontent.fapa1-2.fna.fbcdn.net/v/t31.0-8/18193223_10155242212933126_8011761476845828112_o.jpg?_nc_cat=104&_nc_oc=AQkVKizVMVyo0QJfoqTXYWvKWe5tJWY2WcL6PghiTdoe6HUobdOtCELGZKb96UEe6jy2C77vGLQKyr3v05PUICCf&_nc_ht=scontent.fapa1-2.fna&oh=1d442264e7a688cb5093353dd7e0590e&oe=5DD2DCA8"
            alt="Third slide"
          />

          <Carousel.Caption>
          <h1 className='title-name'>Derrick J Foster</h1>

            <h3>Los Angeles, CA</h3>
            <p>My end game, the place I want to eventually be. I've always wanted to live here because it is where everything I like comes together.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </>
    )
  }
}

export default Header;
