import { useState, useEffect } from 'react'
import Navigation from './Navigation'
import InvoiceModal from './InvoiceModal'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import { ref, onValue } from 'firebase/database';

const App = ({ database }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);

  const [entries, setEntries] = useState([]);
   
  useEffect(() => {

    const entriesRef = ref(database, 'entries');

    onValue(entriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const entriesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setEntries(entriesArray)
      }
    });
  }, );



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
    <BrowserRouter>
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
               <InvoiceModal database={database} setInvoice={setInvoice} setShowExitConfirmation={setShowExitConfirmation} />
            </div>
          </div>)}
          <Home setInvoice={setInvoice} showExitConfirmation={showExitConfirmation} entries={entries} />
        </div>
      </div>
      )}
    </div>
    <Routes>
      {/* <Route path='' element={<c/>}/> */}
    </Routes>
    </BrowserRouter>
  )
}

export default App