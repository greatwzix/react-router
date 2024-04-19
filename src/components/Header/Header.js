import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <header className='Header'>
	<nav className='Header__nav'>
		<NavLink to='/home' className='Header__logo'>Home</NavLink>
		<ul className='Header__mainnav'>
		</ul>
		<ul className='Header__secondarynav'>
			<li className='Header_navItem' ><NavLink to='/signup' className='Header__navLink'>SignUp</NavLink></li>
		</ul>
	</nav>
    </header>
  )
}

export default Header;