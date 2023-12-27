import React from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const InvoiceView = () => {
  return (
    <div>
      <Link to="/Home" className='no-underline text-[initial] flex'>
        <ArrowLeftIcon /> Go Back
      </Link>
      <div className='header flex'>
        <div className='left flex'>
          <span>Status</span>
          <div className='status-button flex'>
            <span className='bg-[#33d69f]'>Paid</span>
            <span>Draft</span>
            <span className='bg-[#ff8f00]'>Pending</span>
          </div>
        </div>
        <div className='righy flex'>
          <button className='dark-purple'>Edit</button>
          <button className='red'>Delete</button>
          <button className='green'>Mark as Paid</button>
        </div>
      </div>
    </div>
  )
}

export default InvoiceView
