import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import newRequest from "../../utils/newRequest";
import "./Loging.scss";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate=useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await newRequest.post("/auth/login", { username, password });

      localStorage.setItem("currentUser", JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      console.error('Login Error:', err);
      setError(`[${err.response.status}] ${err.response.data.message || 'An error occurred during login.'}`);
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
        <Link to="/register">create an account?</Link>
        {error&&error}
      </form>
    </div>
  );
}

export default Login;
