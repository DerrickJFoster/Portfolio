import React, { Component } from 'react'
import '../App.css'
import Ironximpact from '../Images/ironximpact.png'
import KickstART from '../Images/kickstART.png'
import Dreamcatcher from '../Images/dreamcatcher.png'
class Projects extends Component {
  render() {
    return (
      <>
      <div className='projects-header'>
        <h1>Featured Projects</h1>

        <hr />
        <div className="container">
          <a href='https://derrickjfoster.github.io/ironximpact/#/'><img className='thumbnail'src={Ironximpact}></img></a>

          <a href='https://derrickjfoster.github.io/Artsy-Front-End/'><img className='thumbnail'src={KickstART}></img></a>

          <a href='https://mydreamcatcher.herokuapp.com/'><img className='thumbnail'src={Dreamcatcher}></img></a>

          <hr/>
        </div>
      </div>
      <hr/>
      </>
    )
  }
}

export default Projects;
