import React from 'react'
import './styles.css'
import Home from '../Home/Home'
import Signup from '../Signup/Signup'
import { Route, Routes } from 'react-router-dom'
import NotFound from "../NotFound/NotFound";
const Main = () => {
  return (
	  <div className='main'>
		  <Routes>
			  <Route exact path='/home' element={<Home/>}></Route>
			  <Route exact path='/signup' element={<Signup/>}></Route>
			  <Route exact path='*' element={<NotFound/>}></Route>
		  </Routes>
	  </div>
  )
}
export default Main;