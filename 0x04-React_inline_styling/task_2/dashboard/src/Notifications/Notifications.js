import React from "react";
import image from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape.js";
import { StyleSheet, css } from "aphrodite";
import  { Component } from 'react'

const styles = StyleSheet.create({
  Notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '2.5em',
    right: '0',
  },
  
  notificationHeader: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  
  menuItem: {
    textAlign: 'right',
  },
  
  '[data-notification-type="default"]': {
    color: 'blue',
  },
  
  '[data-urgent]':{
    color: 'red',
  },
  '[data-notification-type="urgent"]':{
    color: 'red',
  },
})

export default class Notifications extends Component {
  constructor(props){
    super(props)
    this.markAsRead = this.markAsRead.bind(this)
  }
  shouldComponentUpdate(nextProp){
    if(this.props.listNotifications.length < nextProp.length){
      return true
    }
  }

  markAsRead(id){
    console.log(`Notification ${id} has been marked as read`)
  }
  render() {
    const { displayDrawer, listNotifications } = this.props
    return (
      <React.Fragment>
      {displayDrawer ? (
        <div className={css(styles.Notifications)}>
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
                  markAsRead={this.markAsRead}
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
        <div className={css(styles.menuItem)}>
          <p>Your notifications</p>
        </div>
      )}
    </React.Fragment>
    )
  }
}




Notifications.protoTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};
Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};
