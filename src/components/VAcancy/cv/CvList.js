import React from 'react'
import './cv.css'
import logo1 from '../../../asses/Photo2.png'
import { useNavigate } from 'react-router-dom'

export default function CvList() {
    const navigate = useNavigate();
    const data =[
        {
            id:1,
            img:logo1,
            name:'Janidu Wickremesingha',
            job:'Applied for Welder',
            date:'4:14 PM 2022.03.19'
        },
        {
            id:2,
            img:logo1,
            name:'Janidu Wickremesingha',
            job:'Applied for Welder',
            date:'4:14 PM 2022.03.19'
        },
        {
            id:3,
            img:logo1,
            name:'Janidu Wickremesingha',
            job:'Applied for Welder',
            date:'4:14 PM 2022.03.19'
        },
        {
            id:4,
            img:logo1,
            name:'Janidu Wickremesingha',
            job:'Applied for Welder',
            date:'4:14 PM 2022.03.19'
        },
    ]
  return (
    <div className='cv'>
         <div className='cv-body'>
            <div className='cv-herder'>
            <h2>Received CV </h2>
            <p onClick={() =>navigate('/ca')}>Create Cv</p>
            <p onClick={() =>navigate('/ed')}>Edit Cv</p>
            </div>
            {data.map((data)=> (
                <div className='cv-card' >
               <div className='card-name' key={data.id}>
                    <img src={data.img} alt='' />
                    <div className='card-tex' >
                        <h4>{data.name} </h4>
                        <h5>{data.job} </h5>
                        <p> {data.date}</p>
                    </div>
               </div>
               
                    <div className='card-bu'>
                        <button>Download CV</button>
                        <button>View Job </button>
                    
               </div>
            </div>
            ))}
         </div>
    </div>
  )
}
