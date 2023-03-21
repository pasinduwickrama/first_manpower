import React from 'react'
import './sider.css'
import logo1 from '../../asses/FIM LOGO FINAL 1.jpg'
import { useNavigate } from 'react-router-dom'
const Siderbar = () => {
  const navigate = useNavigate();
  return (
    <div className='sider-body'>
        <div className='side-logo'>
            <img src={logo1} alt='' />
        </div>
        <div className='side-bu'>
            <button onClick={()=> navigate('/')}>DASHBOARD</button>
            <button onClick={()=> navigate('/va')}>VACANCY</button>
            <button onClick={()=> navigate('/job')}>JOB</button>
        </div>
    </div>
  )
}

export default Siderbar