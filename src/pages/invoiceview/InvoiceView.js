import { useState, useEffect} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import InvoiceModal from '../../InvoiceModal'

  
const InvoiceView = ({database, entries, setEntries, setInvoice, setEditInvoice, editInvoice }) => {
  

  const { id } = useParams();
  
  // const pageEntry = entries

  useEffect(() => {

    const entriesRef = ref(database, `entries/${id}`);

    onValue(entriesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setEntries({
          id,
          ...data,
        });
      }
    });
  }, [id]);

  if (!entries) {
    return <div>Loading...</div>;
  }
  const toggleEdit = () => {
    setEditInvoice(true)
  }
  

  return (
    <div className='flex justify-center bg-[#141625] h-fit'>

    {editInvoice && (
     <div className=' flex[1] relative flex flex-col '>
       <InvoiceModal database={database} setInvoice={setInvoice} setEditInvoice={setEditInvoice} editIvoice={editInvoice}  />
     </div>)}

    <div className='mb-8 items-center text-white text-[12px]'>
      <Link to="/" className='no-underline text-[initial] flex mb-8 items-center text-white text-[12px]'>
        <ArrowLeftIcon className='mr-4 w-[7px] h-[10px]' /> Go Back
      </Link>
      {/* header */}
      <div className='flex bg-[#1e2139] rounded-[20px] w-[44rem] items-center p-[24px_32px] text-[12px]'>
        <div className=' flex items-center '>
          <span className='text-[#dfe3fa]'>Status</span>
          <div className='status-button flex ml-3'>
            {/* <span className='bg-[#33d69f]'>Paid</span>
            <span>Draft</span> */}
            <span className='bg-[#ff8f00] p-2 cursor-pointer rounded-md w-24 text-center'>Pending</span>
          </div>
        </div>
        <div className='flex flex-[1] justify-end'>
          <button onClick={toggleEdit} className='text-white  bg-[#500050] cursor-pointer p-[16px_24px] rounded-3xl border-none text-[12px] mr-[8px]'>Edit</button>
          <button className='red text-white bg-[#ec5757] cursor-pointer p-[16px_24px] rounded-3xl border-none text-[12px] mr-[8px]'>Delete</button>
          <button className='green text-white bg-[#33d69f] cursor-pointer p-[16px_24px] rounded-3xl border-none text-[12px]'>Mark as Paid</button>
          {/* <button className='orange text-white'>Mark as Pending</button> */}
        </div>
      </div>

      {/* invoice detaials */}
      <div className='bg-[#1e2139] rounded-[20px] w-[44rem] flex flex-col p-[48px] mt-[24px] mb-10'>
        <div className='top flex'>
          <div className='flex flex-col text-[12px]  text-[#dfe3fa] flex-[1]'>
            <p className='text-[12px] uppercase text-white mb-2'>
              <span className='text-[#888eb0]'>#</span>{entries.id}
            </p>
            <p className='text-16px '>{entries.productDescription}</p>
          </div>
          <div className='flex flex-col text-[12px] items-end text-[#dfe3fa] flex-[1]'>
            <p>{entries.clientStreetAddress}</p>
            <p>{entries.clientCity}</p>
            <p>{entries.clientZipCode}</p>
            <p>{entries.clientCountry}</p>
          </div>
        </div>
        <div className='flex mt-[50px] text-[#dfe3fa] gap-[16px] '>
          <div className='payment flex flex-col flex-[1]'>
            <h4 className='text-[12px] font-normal mb-[12px]'>InvoiceDate</h4>
            <p className='text-[16px] font-semibold'>{entries.invoiceDate}</p>
            <h4 className='text-[12px] font-normal mb-[12px] mt-[32px]'>PaymentDate</h4>
            <p className='text-[16px] font-semibold'>{entries.paymentDue}</p>
          </div>
          <div className='flex flex-col flex-[1] bill'>
            <h4 className='text-[12px] font-normal mb-[12px]'>Bill To</h4>
            <p className='text-[12px]'>{entries.clientName}</p>
            <p className='text-[12px] mt-5'>{entries.clientStreetAddress}</p>
            <p className=' text-[12px]'>{entries.clientCity}</p>
            <p className='text-[12px]'>{entries.clientZipCode}</p>
            <p className='text-[12px]'>{entries.clientCountry}</p>
          </div>
          <div className='flex-[2] flex flex-col'>
            <h4 className='text-[12px] font-normal mb-[12px]'>Send To</h4>
            <p>{entries.clientEmail}</p>
          </div>
        </div>
        <div className='flex flex-col mt-[50px] '>
          <div className='p-[32px] rounded-[20px_20px_0_0] bg-[#252945] billing-item'>
            <div className='flex text-[#dfe3fa] text-[12px] mb-[32px] heading '>
                <p className='flex-[3] text-left'>Item Name</p>
                <p className='text-right flex-[1]'>Qty</p>
                <p className='text-right flex-[1]'>Price</p>
                <p className='text-right flex-[1]'>Total</p>
            </div>
            <div className='item flex mb-[32px] text-[13px] text-white'>
                <p className='flex-[3] text-left'>{entries.itemName}</p>
                <p className='flex-[1] text-center'>{entries.qty}</p>
                <p className='flex-[1] text-center'>{entries.price}</p>
                <p className='mb-0 text-right'>{entries.price}</p>
            </div>
          </div>
          <div className='flex text-white p-[32px] bg-slate-950 items-center rounded-[0_0_20px_20px]'>
            <p className='flex-[1] text-[12px]'>Amount Due</p>
            <p className='flex-[1] text-[28px] text-right'>{entries.price}</p>
          </div>
        </div>
      </div>
    </div>

    </div>
  )
}

export default InvoiceView
