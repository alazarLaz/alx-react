import React from "react";
import "./Notifications.css";
import { getLatestNotification } from "../utils/utils";
import image from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape.js";

export default function Notifications({ displayDrawer, listNotifications }) {
  return (
    <React.Fragment>
      {displayDrawer ? (
        <div className="Notifications">
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
            {listNotifications && listNotifications.length > 0 ? (
              listNotifications.map(({ id, html, type, value }) => (
                <NotificationItem
                  id={id}
                  html={html}
                  type={type}
                  value={value}
                />
              ))
            ) : (
              <>
                <NotificationItem value={"No new notification for now"} />
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
              </>
            )}
          </ul>
        </div>
      ) : (
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
      )}
    </React.Fragment>
  );
}

Notifications.protoTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
