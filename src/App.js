import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import InvoiceModal from './InvoiceModal'
import './App.css'
import Home from './Home'

const App = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);


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

        <div className=' w-full h-full flex'>
          <Navigation />
           {invoice &&(<div className=' flex[1] relative flex flex-col '>
            <div className="invoice">
               <InvoiceModal setInvoice={setInvoice} setShowExitConfirmation={setShowExitConfirmation} />
            </div>
          </div>)}
          <Home setInvoice={setInvoice} showExitConfirmation={showExitConfirmation} />
        </div>
      </div>
      )}
    </div>
  )
}

export default App