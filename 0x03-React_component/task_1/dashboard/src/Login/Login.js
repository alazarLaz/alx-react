import React from 'react'
import './Login.css'

export default function Login() {
  return (
    <div className="Login">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor='name'>Username: </label>
          <input name='name' type="text" />
          <label htmlFor='password'>Password: </label>
          <input name='password' type="text" />
          <button>Ok</button>
        </form>
      </div>
  )
}
