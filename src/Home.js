import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import HeightIcon from '@mui/icons-material/Height';
import Invoice from './Invoice'
// import Modal from './Modal'

const Home = ({ setInvoice, showExitConfirmation }) => {
  const [filterMenu, setFilterMenu] = useState(false);

  const toggleMenu = () => {
    setFilterMenu(!filterMenu)
  }

  const toggleInvoice = () => {
     setInvoice(true)
  }

  return (

    <div className='text-white min-w-[80%] w-full'>
      <div className='flex justify-center p-4'> 
        <div className='flex flex-col flex-[0.3]'>
           <h1 className='text-2xl font-bold'>Invoices</h1>
           <span className='text-[12px]'>There are 4 total invoices</span>
        </div>
        
        <div className='flex-[0.3] flex justify-center items-center'>
           <div onClick={toggleMenu} className='filter flex items-center relative mr-[40px] cursor-pointer'> 
            <span className='text-[12px]'>Filter by status</span>
            <ArrowDropDownIcon className=' mr-12 w-[9px] h-[5px]' />
            {filterMenu && (<ul className='w-[120px] absolute top-[25px] list-none bg-[#1e2139] shadow-md '>
                <li className='cursor-pointer text-[12px] p-[10px_20px] hover:text-black hover:bg-white'>Draft</li>
                <li className='cursor-pointer text-[12px] p-[10px_20px] hover:text-black hover:bg-white'>Pending</li>
                <li className='cursor-pointer text-[12px] p-[10px_20px] hover:text-black hover:bg-white'>Paid</li>
                <li className='cursor-pointer text-[12px] p-[10px_20px] hover:text-black hover:bg-white'>Clear Filter</li>
            </ul>)}
           </div>
           <div className='items-center flex'>
            <div className='flex mr-2 rounded-[50%] p-[8px] items-center justify-center bg-white'>
              <HeightIcon className=''/>
            </div>
            <span onClick={toggleInvoice} className='cursor-pointer p-[8px_10px] bg-[#7c5dfa] rounded-[40px] text-[12px]'>New Invoice</span>
           </div>
        </div>
      </div>
      <div>
        <Invoice />
      </div>
       {/* <Modal showExitConfirmation={showExitConfirmation} /> */}
    </div>
  )
}

export default Home
