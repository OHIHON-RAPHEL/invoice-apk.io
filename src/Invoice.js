import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const Invoice = () => { 
  return (
    <div className='invoice flex'>
      <div className='left flex'>
        <span className='tracking-number'>id</span>
        <span className='duedate'>duedate</span>
        <span className='person'>clientname</span>
      </div>
      <div className='right flex'>
        <span className='price'>total</span>
        <div className='status-button flex'>
          <span className='bg-[#33d69f]'>Paid</span>
          <span>Draft</span>
          <span className='bg-[#ff8f00]'>Pending</span>
        </div>
        <div className='icon'>
          <ArrowRightIcon />
        </div>
      </div>
    </div> 
  )
}

export default Invoice
