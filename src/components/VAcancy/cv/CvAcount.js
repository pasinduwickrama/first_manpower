
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
    
    <div className=' container-fluid'>
    <form class="row g-3">
    <div>
  <label for="formFileLg" class="form-label">Image</label>
  <input class="form-control form-control-lg" id="formFileLg" type="file"/>
</div>
    <div class="col-12">
    <label for="inputAddress" class="form-label">Title</label>
    <hr className='br' />
    <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St"/>
  </div>
  <div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Description</label>
  <hr className='br' />
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
  <div class="col-12">
  <label for="exampleFormControlTextarea1" class="form-label">Choose a Catergory</label>
   
    <hr className='br' />
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
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
  <div class="col-12">
  <label for="exampleFormControlTextarea1" class="form-label">Country</label>
   
    <hr className='br' />
    <select class="form-select" id="inlineFormSelectPref">
      <option selected>Choose...</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
  <div class="col-12">
    <label for="inputAddress2" class="form-label">Saraly</label>
    <hr className='br' />
    <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
  </div>
 
  
 
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign in</button>
  </div>
</form>
</div>
    </div>
    </div>

</div>
  )
}
