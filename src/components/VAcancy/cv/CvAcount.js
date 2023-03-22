
import Header from '../../Header/Header'
import Siderbar from '../../Siderbar/Siderbar'
import React, { useState } from 'react'

export default function CvAcount() {
  const [name,setName] = useState("");

  const [myData, setMydata] = useState ([]);

  return (
    <div className='home'>
    <div className='home-side'>
    <div className='home-r'><Siderbar /></div>
    <div className='home-l'>
    <Header /> 
    <div className='cv'>
         <div className='ac-body'>
            <div className='ac-herder'>
              <h2> Image </h2>           
            </div>
            <hr className='br' />
            <div className='ac-card' >
              <input type="image" alt=''  />
            </div>

            <div className='ac-herder'>
              <h2> Title </h2>           
            </div>
            <hr className='br' />
            <div className='ac-tcard' >
              <input type="text"   alt=''  />
            </div>

            <div className='ac-herder'>
              <h2> Description </h2>           
            </div>
            <hr className='br' />
            <div className='ac-decard' >
              <input type="text" alt=''   />
            </div>

            <div className='ac-herder'>
              <h2> Choose a Catergory </h2>           
            </div>
            <hr className='br' />
            <div className='ac-ccard' >
            <select  >
            </select>
            </div>

            <div className='ac-herder'>
              <h2>Requirements </h2>           
            </div>
            <hr className='br' />
            <div  >
              <input className='re'  type="text"
             value={name} 
            onChange={(e)=>{
            e.preventDefault()
            setName(e.target.value
            )}}   />

<button className='btn' onClick={()=> {
                setMydata((pre) => [ ...pre, {
                  name, 
                },]);

             setName((pre) => (pre.length > 0 ? "" : pre));

              }}
              >+</button>
              
            </div>
            <div>{myData.map((myData)=> (
              <div key={myData.id} className='ac-card'> 
              <h5>{myData.name}</h5>
              </div>
            ))} </div>
            
            <div className='ac-herder'>
              <h2>Country </h2>           
            </div>
            <hr className='br' />
            <div className='ac-ccard' >
            <select  >
            </select>
            </div>
            

            <div className='ac-herder'>
              <h2>Saraly </h2>           
            </div>
            <hr className='br' />
            <div className='ac-card' >
              <input type="text" alt=''  />
            </div>

            <div className='cvac-bu'>
              <button>Save</button>
            </div>
         </div>
    </div>
    </div>
    </div>

</div>
  )
}
