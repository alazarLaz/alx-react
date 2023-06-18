import CourseList from "../CourseList/CourseList";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Notifications from "../Notifications/Notifications";
import "./App.css";
import PropTypes from "prop-types";

import React from "react";

function App({ isLoggedIn }) {
  return (
    <React.Fragment>
      <div className="Notify">
        <Notifications />
      </div>
      <div className="App">
        <Header />
        <body>{isLoggedIn ? <Login /> : <CourseList />}</body>
        <Footer />
      </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};
export default App;
