import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import image from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from 'prop-types';


export default function Notifications({ displayDrawer }) {
  return (
    <React.Fragment>
      <div className="menuItem">Your notifications</div>
      {displayDrawer && <div className="Notifications">
        <button
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            background: "white",
          }}
          aria-label="Close"
          onClick={() => console.log("Close button has been clicked")}>
          <img src={image} alt="" />
        </button>
        <p>Here is the list of notifications</p>
        <ul>
          {/* <li data='default'></li> */}
          <NotificationItem value={"New course available"} type={"default"} />
          <NotificationItem value={"New resume available"} type={"urgent"} />
          <NotificationItem html={getLatestNotification()} type={"urgent"} />
        </ul>
      </div>}
    </React.Fragment>
  );
}
Notifications.protoTypes = {
  displayDrawer: PropTypes.bool
}
Notifications.defaultProps = {
  displayDrawer: false
}
