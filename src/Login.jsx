import React from 'react'
import './Login.css'


const Login = () => {
  return (
    // <div className='main-page'>
        
        <div className='form'>
        <h1>Login</h1>
        <input typr="text" placeholder='Email'></input>
        <input typr="text" placeholder='Password'></input>
        
        <button className='forget' type="submit">Forget Password?</button>
        <button className='login' type="submit"><span>Login</span></button>
        <h3>Don't have an account?<button className='singup' type="submit">Singup</button>
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
    // </div>
  )
}

export default Login