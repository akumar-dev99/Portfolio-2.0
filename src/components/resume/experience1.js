import React, { Component } from 'react'
import SingleExperience from './SingleExperience'

export class Experience extends Component {
  render () {
    return (
      <div>
        <div className='card-content'>
          <div className='card card-main' style={{ paddingTop: 30 }}>
            <h5>
              <strong
                style={{
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  paddingLeft: 20
                }}
              >
                <i class='fas fa-user-edit'></i> Experience
              </strong>
            </h5>
            <SingleExperience
              start='May 2022'
              end='Present'
              country='New Delhi, India'
              company='BharatPe'
              position='Software Engineer'
              description="Responsible for frontend development using ReactJs, Redux, Ant Design for Unity Small finance Bank (India's first truly digital Bank)"
            />
            <SingleExperience
              start='Jan 2021'
              end='July 2021'
              country='New Delhi, India'
              company='MorningCars Tech Pvt ltd.'
              position='Full Stack Developer Intern'
              description='• Using ReactJS I created the company’s new website integrating with Firebase for the backend.
              • Used Material UI along with HTML, CSS, and JavaScript, new UI overhaul was done.
              • Used Firebase functionalities such as Authentication, Firestore, and the cloud function for backend
              integration.
              • Implemented Razorpay using NodeJS, to integrate online payment on the website.'
            />
            <SingleExperience
              start='Mar 2020'
              end='Aug 2020'
              country='New York, NY'
              company='HomeBloc'
              position='Sofware Engieer Intern'
              description="• With the help of WordPress, its plugin Elementor and PHP, built the client's dynamic website (frontend) for their business by adding multiple web pages. • added new features like searching capability for one of the clients. • worked on React Native to create client's News app (frontend) that pulls all the data such as images, text, etc. via given API."
            />
            <SingleExperience
              start='Jun 2019'
              end='Jul 2019'
              country='Jersey City, NJ'
              company='Corp2Corp Inc.'
              position='Software Engineer Intern'
              description='• Built in-depth knowledge in the field of ReactNative, Reactjs, Material UI, and Bootstrap. Acquired working knowledge with google firebase for integration with website and handling databases. Using the knowledge to create my personal website/portfolio.'
            />
            <SingleExperience
              start='Jul 2018'
              end='Aug 2018'
              country='New York, NY'
              company='WebDot Solution'
              position='Summer Intern'
              description="• Revamped one of the client's main screens for their mobile application using React Native and JavaScript and added the feature of reporting a bug on the app. (ReactJs, Material UI, bootstrap knowledge was also inherited). • Acquired working knowledge with google firebase, authentication, fire store, and database for integration with website and handling databases."
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Experience
