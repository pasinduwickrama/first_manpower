import React from 'react'
import { BsSearch } from 'react-icons/bs';
import logo1 from '../../asses/Photo.png'
import logo2 from '../../asses/Photo1.png'
import logo3 from '../../asses/Photo2.png'
import logo4 from '../../asses/Color.png'
import './header.css'
const Header = () => {
  return (
    <div className='header'>
        <div className='header-body'>
          <div className='header-l'>
            <BsSearch size={30}/>
            <input placeholder='Search' />
          </div>
          <div className='header-r'>
            <img src={logo1} alt='' />
            <img src={logo2} alt='' />
            <img src={logo3} alt='' />
            <img src={logo4} alt='' />
           
          </div>
        </div>
    </div>
  )
}

export default Header