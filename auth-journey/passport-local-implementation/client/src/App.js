import React, { useState } from "react"
import './App.css';
import axios from "axios"
const API_ROUTE = "http://localhost:8000"

function App() {
  const [form, setForm] = useState({ username: "", password: "" })
  const [loginForm, setLoginForm] = useState({ username: "", password: "" })
  const [status, setStatus] = useState()

  const handleChange = event => {
    if (event.target.name.startsWith("login-")) {
      setLoginForm({
        ...loginForm,
        [event.target.name.split("login-")[1]]: event.target.value
      })
      return;
    }

    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleRegister = event => {
    event.preventDefault()


    axios.post(API_ROUTE + "/user/sign-up", form, { withCredentials: true })
  }

  const handleLogin = event => {
    event.preventDefault()
    axios.post(API_ROUTE + "/user/login", loginForm, { withCredentials: true })
  }

  const handleGetStatus = async () => {
    const { data } = await axios.get(API_ROUTE + "/user/auth-status", { withCredentials: true })
    console.log(data)
  }

  const handleLogout = async () => {
    axios.get(API_ROUTE + "/user/logout", { withCredentials: true })
  }

  return (
    <div className="App">

      <h1>Register Form</h1>

      <form onSubmit={handleRegister}>
        Enter Username:<br />
        <input className="username" type="text" name="username" value={form["username"]} autoComplete="username" onChange={handleChange} />
        <br />Enter Password:<br />
        <input className="password" type="password" name="password" value={form["password"]} autoComplete="new-password" onChange={handleChange} />
        <br /><input type="submit" value="Submit" />
      </form>


      <h1>Login Form</h1>

      <form onSubmit={handleLogin}>
        Enter Username:<br />
        <input className="username" type="text" name="login-username" value={loginForm["username"]} autoComplete="username" onChange={handleChange} />
        <br />Enter Password:<br />
        <input className="password" type="password" name="login-password" value={loginForm["password"]} autoComplete="new-password" onChange={handleChange} />
        <br /><input type="submit" value="Submit" />
      </form>

      <button onClick={handleGetStatus}>get status</button>
      <button onClick={handleLogout}>logout</button>
      <p>{status ? status : null}</p>
    </div>
  );
}

export default App;
