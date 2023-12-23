import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import InvoiceModal from './InvoiceModal'
import './App.css'
import Home from './Home'

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [invoice, setInvoice] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      const screenWidth = window.innerWidth;
      setIsMobile(screenWidth <= 750);
    };

    checkScreenWidth();
    window.addEventListener('resize', checkScreenWidth);
    return () => {
      window.removeEventListener('resize', checkScreenWidth);
    };
  }, []);

  return (
    <div>
      {isMobile ? (
        <div className='text-center justify-center items-center h-screen bg-[#141625] text-white'>
          <h2>sorry this app is not supported on mobile device</h2>
          <p className='mt-[16px]'>To use this app pls use a computer or tablet</p>
        </div>
      ) : (
      <div className='bg-[#141625] h-[100vh]  min-[900px]:flex-row'>

        <div className='bg-red-400 w-full h-full flex'>
          <Navigation />
          
           {invoice &&(<div className=' flex[1] relative flex flex-col '>
            <div className="invoice">
               <InvoiceModal setInvoice={setInvoice} />
            </div>
          </div>)}
          {/* <div className='text-white h-full max-w-[100px] w-[20%] bg-green-400'>
           <div className=' bg-cyan-600 p-2'> AREA </div>
          </div> */}
          <Home setInvoice={setInvoice} />
          {/* <div className='min-w-[80%] w-full p-4 flex flex-col gap-4 bg-yellow-200'>
            <div className='bg-orange-400 flex justify-center p-4'> 
              INVOIICE AREA 
            </div>
            <div className='bg-red-600 flex justify-center h-full'>MAIN AREA </div>
          </div> */}
        </div>
        {/* <Navigation />
        <div className='p-[20px] bg-yellow-600 flex[1] relative flex flex-col '>
          <transition className="invoice">
            <InvoiceModal invoice={invoice} setInvoice={setInvoice} />
          </transition>
        </div> */}
      </div>
      )}
    </div>
  )
}

export default App