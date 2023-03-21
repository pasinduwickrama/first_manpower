import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BiMenuAltLeft } from 'react-icons/bi';
import logo1 from '../../asses/Photo.png'
import logo2 from '../../asses/Photo1.png'
import logo3 from '../../asses/Photo2.png'
import logo4 from '../../asses/Color.png'
import logo5 from '../../asses/FIM LOGO FINAL 1.jpg'
import './header.css'
import { useNavigate } from 'react-router-dom';
const Header = () => {
 const  navigate=useNavigate();
 const [open,setOpen] = useState(false)
  return (
    <div className='header'>
        <div className='header-body'>
            <div className='h-body' style={{left:`${open ? "-20px" : "-550px"}`,}}>
            <div className='f' ><AiOutlineCloseCircle size={50} onClick={()=>{setOpen(false);}}  /></div>
                
                <div className='h-bu'>
                    <button onClick={()=> navigate('/')}>DASHBOARD</button>
                    <button onClick={()=> navigate('/va')}>VACANCY</button>
                    <button onClick={()=> navigate('/job')}>JOB</button>
                </div>
            </div>
          <div className='header-l'>
            <BiMenuAltLeft size={50} onClick={() =>{setOpen(true)}} className='ff'  />
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