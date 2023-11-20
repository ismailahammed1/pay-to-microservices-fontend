import React from 'react'
import "./Loging.scss"
const Login = () => {
  return (
    <div className='login'>
      <from>
        <h1>Sign IN</h1>
        <label htmlFor="">Username</label>
        <input type="text" name='username' placeholder='Jhon doe'/>
        <label htmlFor="">Password</label>
        <input type="text" name="password" placeholder="johndoe@gmail.com" />
        <button type='submit'>Login</button>
      </from>
    </div>
  )
}

export default Login