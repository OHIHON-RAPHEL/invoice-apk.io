import React from 'react'
import ArticleIcon from '@mui/icons-material/Article';

const Navigation = () => {
  return (
    <div className='text-white h-full max-w-[100px] w-[20%] bg-[#1e2139]'>
      <div className=' rounded-[20px] bg-[#7c5dfa]  p-[24px] min-[900px]:w-full'>
         <ArticleIcon  className='text-blue-500 ' />
      </div>
      {/* <div className=' bg-cyan-600 p-2'> AREA </div> */}
    </div>
    // <div className='z-[99] flex flex-row bg-[#1e2139] min-[900px]:flex-col min-[900px]:min-h-full min-[900px]:min-w-[90px]
    //   rounded-[20px]'>
    //   <div className='flex rounded-[20px] bg-[#7c5dfa] justify-center p-[24px] min-[900px]:w-full'>
    //     <ArticleIcon  className='text-blue-500 w-[auto]' />
    //   </div>
    // </div>
  )
}

export default Navigation