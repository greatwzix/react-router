import React from 'react'
import './style.css'
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
const Home = () => {
  return (
	  <>
		  <Header/>
		  <section className='Home'>
			  <h1 className='Home__title'>Home Page Header</h1>
			  <p className='Home__text'>The biggest collection of free homepage design ideas 2023 for your inspiration. Create your own homepage design with the best website design software.</p>
		  </section>
		  <Footer/>
	  </>
  )
}

export default Home;