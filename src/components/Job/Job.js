import React from 'react'
import Header from '../Header/Header'
import Siderbar from '../Siderbar/Siderbar'
import logo1 from '../../asses/Photo3.png'
export default function Job() {
    const data =[
        {
            id:1,
            img:logo1,
            name:'Vacancy In Kuwait',
            job:'Posted by Cyberpixels',
            date:'4:14 PM 2022.03.19'
        },
        {
            id:2,
            img:logo1,
            name:'Vacancy In Kuwait',
            job:'Posted by Cyberpixels',
            date:'4:14 PM 2022.03.19'
        },
        {
            id:3,
            img:logo1,
            name:'Vacancy In Kuwait',
            job:'Posted by Cyberpixels',
            date:'4:14 PM 2022.03.19'
        },
        {
            id:4,
            img:logo1,
            name:'Vacancy In Kuwait',
            job:'Posted by Cyberpixels',
            date:'4:14 PM 2022.03.19'
        },
    ]
  return (
    <div className='home'>
    <div className='home-side'>
    <div className='home-r'><Siderbar /></div>
    <div className='home-l'><Header /> 

    <div className='cv'>
         <div className='cv-body'>
            <div className='cv-herder'>
            <h2>Received CV </h2>
          
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
                        <button>View Vacancy</button>
                        <button>View Job </button>
                    
               </div>
            </div>
            ))}
         </div>
    </div>

    </div>
    </div>

</div>
  )
}
