import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import './Register.scss';

const Register = () => {
  const [file, setFile] = useState(null);
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
    isSeller: false,
    // Include other fields here
  });
 const navigate=useNavigate();
  const handleChange = (e) => {

    const value = e.target.value.trim();

    setUser((prev) => ({ ...prev, [e.target.name]: value }));
  };
  
  
  const handleSeller = (e) => {
    setUser((prev) => {
      return { ...prev, isSeller: e.target.checked };
    });
  };

  const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'Pay2microServices');

    try {
      const response = await axios.post(
        'https://api.cloudinary.com/v1_1/dfn1s2ysa/image/upload',
        formData
      );
      const { url } = response.data;
      return url;
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const imgUrl = file ? await uploadFile(file) : null;
  
      const data = {
        username: user.username,
        email: user.email,
        password: user.password,
        isSeller: user.isSeller,
        img: imgUrl,
        // Include other fields here
      };
  
    
      
      await newRequest.post("/auth/register", data);
  
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  
  
  return (
    <div className='register'>
      <form onSubmit={handleSubmit}>
        <div className="left">
          <h1>create a new account</h1>
          <label htmlFor="">username</label>
          <input type="text" name='username' 
          placeholder='jhondeo' onChange={handleChange}/>
          <label htmlFor="">Email</label>
          <input type="text" name='email' placeholder='email' onChange={handleChange} value={user.email} />


          <label htmlFor="">Password</label>
          <input type="text" name='password' 
          placeholder='password' onChange={handleChange}/>
          <label htmlFor="">Profile Picture</label>
          <input type="file" onChange={(e)=>setFile(e.target.files[0])}/>
          <label htmlFor="">Country</label>
          <input type="text" name='country' 
          placeholder='country' onChange={handleChange}/>
          <button type='submit'>Register</button>
        </div>
        <div className="right">
          <h1>i want to become a saller</h1>
          <div className="toggle">
            <label htmlFor="">Active the Seller Account</label>
            <label className='switch'>
              <input type="checkbox" onChange={handleSeller} />
              <span className="slider round" ></span>
            </label>
          </div>
          <label htmlFor="">Phone Number</label>
          <input type="text" name='phone' placeholder='+088164646464'  onChange={handleChange}/>
          <label htmlFor="">Description</label>
          <textarea placeholder='A short Description of your' name="desc" id="" cols="30" rows="10" onChange={handleChange}></textarea>
        </div>
      </form>
    </div>
  )
}

export default Register