import React from 'react'
import ProgressBar from "@ramonak/react-progress-bar";
import './client2.css'
const Bar2 = () => {
    const bar = [
        {
            id:1,
            name:'Instagram',
            num:'65,367',
            bar:( <ProgressBar
                completed={85}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted4"
                labelClassName="label"
              />),
        },
        { 
            id:1,
            name:'Facebook',
            num:'12,109',
            bar:( <ProgressBar
                completed={85}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted5"
                labelClassName="label"
              />),
        },
        {
            id:1,
            name:'Twitter',
            num:'132,645',
            bar:( <ProgressBar
                completed={85}
                className="wrapper"
                barContainerClassName="containerr"
                completedClassName="barCompleted6"
                labelClassName="label"
              />),
        }
    ]
  return (
    <div>
        {bar.map((bar) => (
            <div class="container">    
            <div className='bat-tes'>
                <div className='bar-r'>{bar.name}</div>
                <div className='bar-l'>{bar.num}</div>
            </div>
                <div class="progress2 progress-moved">{bar.bar}</div> 
        </div>
        ))}
    </div>
  )
}

export default Bar2


