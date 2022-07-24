import React, { Component } from 'react'
import './landingpage.css'
import im2 from '../assets/amitavatar.jpg'
import { AnimationPresence, motion } from 'framer-motion'

const PageTransition = {
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: '-100%'
  }
}

export class Landingpage extends Component {
  render () {
    return (
      <motion.div
        initial='out'
        animate='in'
        exit='out'
        variants={PageTransition}
      >
        <div class='container main-info-section'>
          <div class='text'>
            <h1>
              <div class='hello'>
                <span class='name'>H</span>
                <span class='m-left'>e</span>
                <span class='m-left'>l</span>
                <span class='m-left'>l</span>
                <span class='m-left'>o</span>
                <span class='m-left'>!</span>
              </div>
              <span>I</span>
              <span class='m-left'>'</span>
              <span class='m-left'>m </span>
              <span> </span>
              <span class='name'>A</span>
              <span class='m-left'>m</span>
              <span class='m-left'>i</span>
              <span class='m-left'>t</span>
              <span> </span>
              <span class='name'>K</span>
              <span class='m-left'>u</span>
              <span class='m-left'>m</span>
              <span class='m-left'>a</span>
              <span class='m-left'>r</span>
              <br />
              <span class='name'>A</span>
              <span class='m-left'>s</span>
              <span class='m-left'>p</span>
              <span class='m-left'>i</span>
              <span class='m-left'>r</span>
              <span class='m-left'>i</span>
              <span class='m-left'>n</span>
              <span class='m-left'>g</span>

              <span
                class='txt-type'
                data-wait='3000'
                data-words='["Software Developer", "Web Designer", "Web Developer", "App Developer", "Photographer", "Videographer"]'
              >
                <span class='name'>S</span>oftware <span class='name'>E</span>
                ngineer
              </span>
            </h1>
            <h2 class='tech'>
              Python| C++ | HTML/CSS | Bootstrap | JavaScript | React | React
              Native
            </h2>
            <div class='desc'>
              <p class='information'>
                As a leader, it is important to not just see your own success,
                but focus on the success of others. -{' '}
                <span class='name'>Sundar Pichai</span>
              </p>
            </div>

            <div class='media' style={{ outline: 'none', boxShadow: 'none' }}>
              <ul>
                <li>
                  <a
                    rel='noopener noreferrer'
                    href='https://www.linkedin.com/in/akumar1999m/'
                    target='_blank'
                  >
                    <i class='fab fa-linkedin'></i>
                  </a>
                </li>
                <li>
                  <a
                    rel='noopener noreferrer'
                    href='mailto:akumar1999m@gmail.com'
                    target='_blank'
                  >
                    <i class='fab fa-google'></i>
                  </a>
                </li>
                <li>
                  <a
                    rel='noopener noreferrer'
                    href='https://github.com/akumar1999'
                    target='_blank'
                  >
                    <i class='fab fa-github'></i>
                  </a>
                </li>
                <li>
                  <a
                    rel='noopener noreferrer'
                    href='https://twitter.com/akumar_1999'
                    target='_blank'
                  >
                    <i class='fab fa-twitter'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    )
  }
}

export default Landingpage
