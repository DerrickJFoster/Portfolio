import React, { Component } from 'react'
import '../App.css'
import Ironximpact from '../Images/ironximpact.png'
import KickstART from '../Images/kickstART.png'

class Projects extends Component {
  render() {
    return (
      <div className='projects'>
        <h1>Featured Projects</h1>
        <hr />
        <div className="container">
            <ul>
              <li>
                <a href='https://derrickjfoster.github.io/ironximpact/#/'><img className='thumbnail'src={Ironximpact}></img></a>
                {/* <img className='thumbnail'src={Ironximpact}></img> */}
              </li>

              <li>
                <a href='https://derrickjfoster.github.io/ironximpact/#/'><img className='thumbnail'src={KickstART}></img></a>
              </li>
            </ul>

        </div>
        <hr/>
      </div>
    )
  }
}

export default Projects;
