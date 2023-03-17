import React from 'react'
import './client.css'
import logo1 from  '../../asses/Photo3.png'
import logo2 from  '../../asses/Photo4.png'
import logo3 from  '../../asses/Photo1.png'
import Bar from './Bar/AvaBar/Bar'
import Bar1 from './Bar/LilaBar/Bar1'
import Bar2 from './Bar/SomBar/Bar2'


const Clients = () => {
    const data =[
        {
            id:1,
            img:logo2,
            name:'Ava Gregoraci',
            city:'Bulgaria',
            bar:(<Bar />)
        },
        {
            id:1,
            img:logo1,
            name:'Somun Ae-Ri',
            city:'Bulgaria',
            bar:(<Bar1 />)
        },
        {
            id:1,
            img:logo3,
            name:'Lilah Ioselev',
            city:'Bulgaria',
            bar:(<Bar2 />)
        }
    ]
    
  return (
    <div className='cl'>
        <div className='cl-body'>
            <h2>Clients</h2>
            <div className='cl-bodyy' >
            {data.map((data)=> (
              <div key={data.id} >
              <div className='cl-name'>
               <div className='cl-img'><img src={data.img} alt='' /></div>
                    <div className='cl-tex'>
                        <div><h4>{data.name}</h4></div>
                        <div><p>{data.city}</p></div>
                    </div>
                    
               </div>
               <div className='cl-bar' >
                        <div>{data.bar}</div>
                        
                    </div>
              </div>
            ))}
           
                
            </div>
        </div>
    </div>
  )
}

export default Clients