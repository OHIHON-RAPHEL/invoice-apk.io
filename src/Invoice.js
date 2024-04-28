import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Link} from 'react-router-dom'

const Invoice = ({ entry, isPaid }) => { 
  return ( 
    <Link to={`/entry/${entry.id}`} className='no-underline cursor-pointer gap-16  mb-[16px] text-white rounded-[20px] p-[28px_32px] bg-[#1e2139] items-center flex'>
      <div className=' flex items-center gap-16'>
        <span className='uppercase  text-[14px]'>{entry.id}</span>
        <span className='duedate  text-[14px]'>{entry.paymentDue}</span>
        <span className='person text-[14px] '>{entry.clientName}</span>
      </div>
      <div className='flex gap-16 items-center '>
        <span className=' text-[16px] font-[600px]'>{entry.price}</span>
        <div className='status-button flex'>
          {isPaid ? <span className='bg-[#33d69f] p-2 cursor-pointer rounded-md w-24 text-center'>Paid</span> :
          <span className='bg-[#ff8f00] p-2 cursor-pointer rounded-md w-24 text-center'>Pending</span>}
        </div>
        
        <div className='icon'>
          <ArrowRightIcon />
        </div>
      </div>
    </Link>
  )
}

export default Invoice
