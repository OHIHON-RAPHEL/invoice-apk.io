import React from 'react'
import Navigation from './Navigation'
import InvoiceModal from './InvoiceModal'
import Home from './Home'

const MainApp = ({ setFormData, formData, database, isMobile, invoice, setInvoice, showExitConfirmation, entries, setShowExitConfirmation, setEditInvoice, editInvoice }) => {
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
          {invoice && (
          <div className=' flex[1] relative flex flex-col '>
            <InvoiceModal database={database} setInvoice={setInvoice} setShowExitConfirmation={setShowExitConfirmation} setEditInvoice={setEditInvoice} invoice={invoice} entries={entries} />
          </div>)}
          <Home setInvoice={setInvoice} showExitConfirmation={showExitConfirmation} entries={entries} />
        </div>
      </div>
      )}
    </div>
  )
}

export default MainApp
