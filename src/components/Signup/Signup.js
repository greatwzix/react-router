import React from 'react'
import './style.css'
import Header from "../Header/Header";
const Signup = () => {
  return (
	  <>
		  <Header/>
		  <section className='Signup'>
			  <div className='Signup__content'>
				  <h1 className='Signup__title'>SignUp Now</h1>
				  <p className='Signup__text'>Enter your email and password</p>

				  <form>
					  <input className = 'Signup__input' type='email' placeholder='Email' required/>
					  <input className = 'Signup__input' type='password' placeholder='Password' required/>
					  <button className='Signup__button'>SignUp Now</button>
				  </form>
			  </div>
		  </section>
	  </>

  )
}

export default Signup;