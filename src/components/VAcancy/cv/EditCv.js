import React from 'react'
import Header from '../../Header/Header'
import Siderbar from '../../Siderbar/Siderbar'

export default function EditCv() {
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
            <div className='ac-card' >
              <input type="image" alt=''  />
            </div>
            
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
              <input type="image" alt=''  />
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
