import React from "react";
import logo from "../assets/holberton-logo.jpg";
import { StyleSheet, css } from "aphrodite";
const styles = StyleSheet.create({
  "App-header": {
    fontSize: "1.4rem",
    color: "#e0354b",
    display: "flex",
    alignItems: "center",
    borderBottom: "3px solid #e0354b",
  },

  img: {
    width: "200px",
    height: "200px",
  },
});
export default function Header() {
  return (
    <header className={css(styles["App-header"])}>
      <img src={logo} alt="logo" className={css(styles.img)}/>
      <h1>School Dashboard</h1>
    </header>
  );
}
