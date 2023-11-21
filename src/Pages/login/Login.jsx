import axios from "axios";
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Loging.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8800/api/auth/login", {
        username,
        password
      });
console.log(res.data);
    } catch (err) {
      setError(err);
      console.log(err);
    }
  }

  return (
    <div className='login'>
      <form onSubmit={handleSubmit}>
        <h1>Sign In</h1>
        <label htmlFor="username">Username</label>
        <input type="text" name='username' placeholder='John Doe' onChange={e => setUsername(e.target.value)} />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="johndoe@gmail.com" autoComplete="off" onChange={e => setPassword(e.target.value)} />
        <Link className='forget' to="/">Forget password</Link>
        <button type='submit'>Login</button>
      </form>
    </div>
  );
}

export default Login;
