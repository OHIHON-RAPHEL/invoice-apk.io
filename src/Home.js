import { useState } from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import HeightIcon from '@mui/icons-material/Height';
import Invoice from './Invoice'
import IMG from './images/looking.png'
// import Modal from './Modal'

const Home = ({ setInvoice, showExitConfirmation, entries, isPaid }) => {
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
           <div onClick={toggleInvoice} className='items-center flex bg-[#7c5dfa] rounded-[40px] p-[8px_10px] cursor-pointer'>
            <div className='flex mr-2 rounded-[50%]  bg-white'>
              <HeightIcon className=''/>
            </div>
            <span className='text-[12px]'>New Invoice</span>
           </div>
        </div>
      </div>
      {entries.length > 0 ? (
        entries.map((entry, index) => (
        <div className='flex justify-center' key={index}>
          <Invoice entry={entry} isPaid={isPaid} />
        </div>))
      ) : (
        <div className='mt-[160px] items-center flex flex-col'>
          <img src={IMG} alt="" className='w-[214] h-[200px]' />
          <h3 className='text-[20px] mt-[40px] '>There is nothing here</h3>
          <p className='text-center  text-[12px] font-semibold'>Create a new invoice by clicking the New Invoice button and get started</p>
        </div>
      )}
    </div>
  )
}

export default Home
 