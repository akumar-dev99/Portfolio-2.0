import React, { Component } from "react";
import SingleProject from "./SingleProject";

export class ResumeProject extends Component {
  render() {
    return (
      <div>
        <div className="card-content">
          <div className="card card-main" style={{ paddingTop: 30 }}>
            <h5>
              <strong
                style={{
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  paddingLeft: 20,
                }}
              >
                <i class="fas fa-server"></i> Projects
              </strong>
            </h5>
            <SingleProject
              type="Mobile App"
              name="Foodini"
              tech="React Native, react-native Element, Firebase"
              description=" After getting selected for a startup program, we came up with
              the idea of creating a food delivery app that provided
              knowledge about cultural dishes and focused primarily on
              dishes rather than the restaurant.
              It was built with React Native for the frontend and JavaScript for
              some Interactive features.
              Google firebase services such as firestore to store data of the
              users and data we provided like dishes information and firebase
              functions for our backend for user to interact with our app
              seamlessly.
              Came 2nd and won $10,000 for the startup funded by the city
              college of New York, NY, and came 1st and won $5,000 for BNY
              Mellon program, NY."
            />
             <SingleProject
              type="Web App"
              name="COVID Tracker"
              tech="React Js, Material-mdl, react-router-dom"
              description=" In tough times of COVID-19, built a static web page using
              ReactJS for users to track COVID cases throughout the world by
              using open-source API for the data."
            />
             <SingleProject
              type="Mobile App"
              name="Notes App"
              tech="React Native"
              description="Notes Application was created to keep track of your day to day
              TODO list with React Native and Pure JavaScript."
            />
            <SingleProject
              type="Web App"
              name="Personal Portfolio"
              tech="React Js, Material-mdl, react-router-dom"
              description=" Used React framework (Reactjs), nodejs, yarn, Html5, CSS and UI components like Material UI to build personal portfolio with the help of open source platform netlify. Link: akumarportfolio.netlify.com"
            />
            <SingleProject
              type="Desktop App"
              name="Python ChatBot"
              tech="Python, GTTS, smtp library"
              description=" Python based desktop assistant, helping in performing basic tasks i.e., sending mails, opening specific folder. Uses GTTS (google text-to-speech) and smtp library of Python."
            />

            <SingleProject
              type="Web App"
              name="Personal Portfolio"
              tech="React Js, Material-mdl, react-router-dom"
              description=" Used React framework (Reactjs), nodejs, yarn, Html5, CSS and UI components like Material UI to build personal portfolio with the help of open source platform netlify. Link: akumarportfolio.netlify.com"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ResumeProject;
