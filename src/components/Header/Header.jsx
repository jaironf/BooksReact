import React from 'react'
import './Header.scss'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <div>
        <span>Paper-Ink</span>
        <nav>
            <span><Link to='/'>Home</Link></span>
            <span><Link to='/form'>Form</Link></span>
            <span><Link to='/books'>Books</Link></span>
        </nav>
    </div>
  )
}

export default Header