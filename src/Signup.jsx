import React from 'react'
import './Signup.css'

const Signup = () => {
  return (
    <div className='form'>
    <h1>Signup</h1>
    <input typr="text" placeholder='Email'></input>
    <input typr="text" placeholder='Create Password'></input>
    <input typr="text" placeholder='Confirm Password'></input>

    
    <button className='login' type="submit"><span>Signup</span></button>
    <h3>Already have an account?<button className='singup' type="submit">Login</button>
    </h3>
    <div className='hrline'>
           <p>-----------------OR------------------</p>
        </div>
        <button className='loginfacebook' type="submit">
            <div className="faceboook">f</div>
            <div className='fcbookcont'>Login with Facebook</div>
            </button>
        <button className='logingoogle' type="submit">
            <div className="gglimg"></div>
            Login with Google
        </button>


   
    </div>
  )
}

export default Signup