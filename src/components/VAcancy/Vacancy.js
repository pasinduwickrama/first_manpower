import React from 'react'
import Header from '../Header/Header'
import Siderbar from '../Siderbar/Siderbar'
import CvList from './cv/CvList'

export default function Vacancy() {
  return (
    <div className='home'>
    <div className='home-side'>
    <div className='home-r'><Siderbar /></div>
    <div className='home-l'><Header /> <CvList /></div>
    </div>

</div>
  )
}
