import React from 'react'
import './sider.css'
import logo1 from '../../asses/FIM LOGO FINAL 1.jpg'
const Siderbar = () => {
  return (
    <div className='sider-body'>
        <div className='side-logo'>
            <img src={logo1} alt='' />
        </div>
        <div className='side-bu'>
            <button>DASHBOARD</button>
            <button>VACANCY</button>
            <button>REPORTS</button>
        </div>
    </div>
  )
}

export default Siderbar