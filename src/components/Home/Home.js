import React from 'react'
import Clients from '../Clients/Clients'
import Header from '../Header/Header'
import Siderbar from '../Siderbar/Siderbar'
import User from '../User.js/User'
import './home.css'
const Home = () => {
  return (
    <div className='home'>
        <div className='home-side'>
        <div className='home-r'><Siderbar /></div>
        <div className='home-l'><Header /><Clients /> <User /></div>
        </div>

    </div>
  )
}

export default Home