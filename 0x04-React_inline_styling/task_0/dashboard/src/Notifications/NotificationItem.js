import "./Notifications.css";
import PropTypes from "prop-types";
import React from "react";

export default class NotificationItem extends React.PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;

    return (
      <>
        {type && value ? (
          <li onClick={markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            onClick={markAsRead(id)}
            data-notification-type={type}
            dangerouslySetInnerHTML={{ __html: html }}></li>
        ) : null}
      </>
    );
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number,
};
NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func");
  },
  id: 0,
};
