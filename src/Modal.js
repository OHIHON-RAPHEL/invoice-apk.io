import React from 'react'


const Modal = ({ showExitConfirmation }) => {
  return (
    <div className=' z-100 fixed justify-center items-center h-screen w-full flex'>
      {showExitConfirmation && (<div className='rounded-[20px] p-[48px_32px] max-w-[450px] bg-[#252945] text-white'>
        <p className='text-center mb-5'>Are you sure ypou want to exit? Your changes will not be saved</p>
        <div className='mb-[24px] flex'>
          <button className='bg-[#7c5dfa] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] flex-[1]'>Return</button>
          <button className='bg-[#ec5757] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] flex-[1]'>Close</button>
        </div>
      </div>)}
    </div>
  )
}

export default Modal
