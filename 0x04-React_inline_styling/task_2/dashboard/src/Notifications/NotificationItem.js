import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";
import React from "react";

const styles = StyleSheet.create({
  default: {
    color: "blue",
  },
  urgent: {
    color: "red",
  },
});

export default class NotificationItem extends React.PureComponent {
  render() {
    const { id, type, value, html, markAsRead } = this.props;

    return (
      <>
        {type && value ? (
          <li
            className={
              type === "default" ? css(styles.default) : css(styles.urgent)
            }
            onClick={markAsRead(id)}
            data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? (
          <li
            className={css(styles.urgent)}
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
