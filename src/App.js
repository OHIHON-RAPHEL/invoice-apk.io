import { useState, useEffect } from 'react'
// import Navigation from './Navigation'
// import InvoiceModal from './InvoiceModal'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import Home from './Home'
import { ref, onValue } from 'firebase/database';
import MainApp from './MainApp'

import InvoiceView from './pages/invoiceview/InvoiceView'

const App = ({ database }) => {

  const [isMobile, setIsMobile] = useState(false);
  const [invoice, setInvoice] = useState(false);
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);

  const [editInvoice, setEditInvoice] = useState(false)

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
  }, []);


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
    <Routes>
      <Route path="/entry/:id"  element={<InvoiceView  entries={entries} setEntries={setEntries} database={database} setEditInvoice={setEditInvoice} editInvoice={editInvoice} setInvoice={setInvoice} />} />
      <Route index element={<MainApp database={database} isMobile={isMobile} invoice={invoice} setInvoice={setInvoice} showExitConfirmation={showExitConfirmation} entries={entries} setShowExitConfirmation={setShowExitConfirmation} setEditInvoice={setEditInvoice} />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App