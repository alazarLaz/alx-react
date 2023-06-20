import React from "react";
import { StyleSheet, css } from "aphrodite";

const styles = StyleSheet.create({
  "App-body": {
    fontSize: "1rem",
    padding: "2em",
    borderBottom: "3px solid #e0354b",
    height: "45%",
  },

  input: {
    margin: "10px",
  },
});

export default function Login() {
  return (
    <div className={styles["App-body"]}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="name">Username: </label>
        <input className={styles.input} name="name" type="text" />
        <label htmlFor="password">Password: </label>
        <input className={styles.input} name="password" type="text" />
        <button>Ok</button>
      </form>
    </div>
  );
}
