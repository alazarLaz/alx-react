import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import { getLatestNotification } from "../utils/utils";
import PropTypes, { func } from 'prop-types'
import React, { Component } from 'react'
import "./App.css";


const listCourses = [
  {id: 1, name: "ES6", credit: 60},
  {id: 2, name: "Webpack", credit: 20},
  {id: 3, name: "React’", credit: 40},
]

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
]


class App extends React.Component {
  constructor(props){
    super(props)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleKeyDown(event){
    if (event.ctrlKey && event.key === 'h') {
      alert('Logging you out');
      this.props.logOut();
    }
  };
  componentDidMount(){
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  render() {
    return (
    <React.Fragment>
      <div className="Notify">
        <Notifications listNotifications={listNotifications} />
      </div>
      <div className="App">
        <Header />
        <body>{this.props.isLoggedIn ? <Login /> : <CourseList listCourses={ listCourses } />}</body>
        <Footer />
      </div>
    </React.Fragment>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: ()=>{
    return
  }
};
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};


export default App;
