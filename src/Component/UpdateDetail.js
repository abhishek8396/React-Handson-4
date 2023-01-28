import React from 'react'

const UpdateDetail = () => {
  return (
    <>
    <div className='updatecontainer'>
      
      <input className='samecontainer' type='text' placeholder='Name' name='Name'/>
      
    
      <input className='samecontainer' type='text' placeholder='Age' name='Age'/>
      
      
      <input className='samecontainer' type='text' placeholder='Course' name='Course'/>
      
      
      <input className='samecontainer' type='text' placeholder='Batch' name='Batch'/>
      
      
      
    </div>
    <div className='buttoncontainer'>
      <button>Submit</button>
      <button>Cancel</button>
    </div>
    </>
  )
}

export default UpdateDetail
