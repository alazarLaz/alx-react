import React from "react";
import './Header.css'
import logo from '../assets/holberton-logo.jpg'

export default function Header() {
  return (
    <header className="App-header">
      <img src={logo} alt="logo" />
      <h1>School Dashboard</h1>
    </header>
  );
}
