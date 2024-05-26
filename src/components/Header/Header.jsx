import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
        <span className='navbar-brand'>Paper-Ink</span>
        <nav className='navbar-nav'>
            <span className='navbar-item'><Link to='/'>Home</Link></span>
            <span className='navbar-item'><Link to='/form'>Form</Link></span>
            <span className='navbar-item'><Link to='/books'>Books</Link></span>
        </nav>
    </div>
  )
}

export default Header