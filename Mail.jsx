import React from 'react'

function Mail() {
  return (
    <div>
    <form >
        
        <div className='px-2 py-2' >
            <input className='border-black-100  outline md:outline-1 ' type ='text' placeholder='Enter Your email' >
            </input>

        </div>
        </form>
        <div className='px-2 py-2'>*Feedback</div>
      
        <div >
    
       
        
     
      
    </div>
        <form className='px-2 py-2'>

            <textarea className='border-black-100 outline md:outline-1  ' type='text' placeholder='My idea for this page is....' >
            </textarea>
           </form >
           <div >
            
            <button className='btn btn-blue font-serif text-sm border border-black rounded-sm  bg-slate-300 px-0 py-0 ml-3'>Send</button>
            
            <button className='ml-2 mr-2 text-blue-900'> <u>Cancel</u> </button>
            
            
            </div>
       <div>
        
       </div>
       
       
        </div>

    
    
  )
}

export default Mail
