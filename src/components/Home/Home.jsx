import React from 'react'
import {Link} from 'react-router-dom'
import './Home.scss'

const Home = () => {
  return (
    <div className='home-div'>
       <img src='../../src/assets/LogoPaperInk.png' alt="logo" /> 
       <button className='btn-home'><Link to='/form'>Welcome</Link></button>
    </div>
  )
}

export default Home