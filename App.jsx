
import React from 'react'
import Functionalinputs from './Components/Functionalinputs'
import './index.css'

function App() {
  return (
<div  className='starting'>
  <div className='corner'>
<sup className='star1'>*</sup> <span>Compulsory Fields</span>
</div>


    <div className='header'>
      
       
      <div className='header1'>
        Grievances Form - for Complaints relating to content and
      </div>
      
      <div className='header2'>
        Consumer Complaints.
      </div>
      <hr className='line'></hr>
      

      <Functionalinputs/>
    </div>
    </div>
  )
}

export default App
          