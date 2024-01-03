import { useState} from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import HeightIcon from '@mui/icons-material/Height';

import { ref, push } from 'firebase/database';


const InvoiceModal = ({ setInvoice, setShowExitConfirmation, database, setEditInvoice, invoice, entries }) => {

  
  const close = () => {
     setInvoice(false);

     setEditInvoice(false)
  };


  const [dueDate, setDueDate] = useState('');

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;  

    if (selectedOption === 'next30Days' || selectedOption === 'next60Days') {
      const currentDate = new Date();
      let daysToAdd = selectedOption === 'next30Days' ? 30 : 60;
      const nextDueDate = new Date(currentDate.setDate(currentDate.getDate() + daysToAdd));

      const formattedDate = nextDueDate.toISOString().slice(0, 10);
      
      const g = {
        ...formData,
        paymentDue: formattedDate
      }
      setFormData(g)
    } else {
      setDueDate('');
    }
  };

  

  const [inputFields, setInputFields] = useState([]);

  const addNewInvoiceItem = () => {
    setInputFields([...inputFields, { id: inputFields.length }]);
  };


  const deleteInvoiceItem = (id) => {
    setInputFields((prev) => {
      return prev.filter((item) => {
        return item.id !== id
      })
    })
  }

  const [formData, setFormData] = useState({
        clientStreetAddress: "",
        clientCity: "",
        clientZipCode: "",
        clientCountry: "",
        clientName: "",
        clientEmail: "",
        invoiceDate: new Date().toISOString().slice(0, 10),
        paymentDue: dueDate,
        productDescription: "",
        itemName: "",
        qty: "",
        price: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (invoice) {
    const entriesRef = ref(database, 'entries');

    try {
      const newEntryData = await push(entriesRef, formData);

      console.log('Data submitted successfully with key:', newEntryData.key);
    } catch (error) {
      console.log(error);
    }
    
    setFormData({
        clientStreetAddress: "",
        clientCity: "",
        clientZipCode: "",
        clientCountry: "",
        clientName: "",
        clientEmail: "",
        paymentDue: "",
        productDescription: "",
        paymentTerms: "",
        itemName: "",
        qty: "",
        price: "",
    })

    setInvoice(false)

    return handleUpdateInvoice();
    
   }

  };

  const handleUpdateInvoice = () => {
    console.log("form data updated", formData);
    

    setEditInvoice(false)
  };

  // const invoiceRef = useRef(false);
  
  // const handleClickOutside = (event) => {
  //   if (invoiceRef.current && !invoiceRef.current.contains(event.target)) {
  //     setShowExitConfirmation(true);
  //   }
  // };

  // // Listen for click events outside the input field background
  // useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside);

  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

   
  return (
    <div onSubmit={handleSubmit} className=' fixed top-0 left-0 bg-[transparent] h-screen overflow-scroll min-[900px]:left-[90px]'>
      <form  className='relative p-[56px] max-w-[700px] w-full bg-[#141625] text-white
       shadow-[10px_4px_6px_-1px_rgba(0,0,0.2),_0_2px_4px_-1px_rgba(0_0_0_0.06)] '>
        {invoice ? <h1 className='mb-[48px] text-white font-bold text-2xl'>New Invoice</h1> : <h1 className='mb-[48px] text-white font-bold text-2xl'>Edit Invoice</h1>}
          {/* bill form */}
        <div className='mb-[48px] flex flex-col'>
           <h4 className='text-[#7c5dfa] text-[12px] mb-[24px]'>Bill Form</h4>
           <div className='mb-[24px] flex flex-col'>
              <small className='text-[12px] mb-[6px]'>Street Address</small>
              <input value={formData.clientStreetAddress} onChange={handleChange} name="clientStreetAddress"  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
            </div>
            <div className='gap-[16px] flex'>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <small className='text-[12px] mb-[6px]'>City</small>
                <input value={formData.clientCity} onChange={handleChange} name="clientCity" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <small className='text-[12px] mb-[6px]'>Zip Code</small>
                <input value={formData.clientZipCode} onChange={handleChange} name="clientZipCode" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <small className='text-[12px] mb-[6px]'>Country</small>
                <input value={formData.clientCountry} onChange={handleChange} name="clientCountry" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
            </div>
        </div>

       {/* bill to */}
       <div className='bill-to flex flex-col'>
         <h4 className='text-[#7c5dfa] text-[12px] mb-[24px]'>Bill to</h4>
         <div className='mb-[24px] flex flex-col'>
           <small className='text-[12px] mb-[6px]'>Client Name</small>
           <input value={formData.clientName} onChange={handleChange} name="clientName" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='mb-[24px] flex flex-col'>
           <small className='text-[12px] mb-[6px]'>Client Email</small>
           <input value={formData.clientEmail} onChange={handleChange} name="clientEmail" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='mb-[24px] flex flex-col'>
           <small className='text-[12px] mb-[6px]'>Street Address</small>
           <input value={formData.clientStreetAddress} onChange={handleChange} name="clientStreetAddress"  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='gap-[16px] flex'>
              <div className='mb-[24px] flex flex-col'>
                <small className='text-[12px] mb-[6px]'>City</small>
                <input value={formData.clientCity} onChange={handleChange} name="clientCity" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col'>
                <small className='text-[12px] mb-[6px]'>Zip Code</small>
                <input value={formData.clientZipCode} onChange={handleChange} name="clientZipCode" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col'>
                <small className='text-[12px] mb-[6px]'>Country</small>
                <input value={formData.clientCountry} onChange={handleChange} name="clientCountry"  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
            </div>
       </div>

       {/* invoice work details */}
       <div className='gap-6 flex flex-col'>
        <div className='gap-6 flex'>
          <div className='mb-[24px] flex flex-col flex[1]'>
            <small className='text-[12px] mb-[6px]'>Invoice Date</small>
            <div
              className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none'
            >
              {formData.invoiceDate}
            </div>
          </div>
          <div className='mb-[24px] flex flex-col flex-[1]'>
            <small className='text-[12px] mb-[6px]'>Payment Due</small>
            <input onChange={handleChange} value={formData.paymentDue}  name="paymentDue"   type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
          </div>
        </div>
        <div className='mb-[24px] flex flex-col'>
          <small  className='text-[12px] mb-[6px]'>Payment Terms</small>
          <select name="paymentTerms" onChange={handleSelectChange}  className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none'>
            <option  value="next30Days" >Next 30 Days</option>
            <option  value="next60Days" >Next 60 Days</option>
          </select>
        </div>
        <div className='mb-[24px] flex flex-col'>
          <small className='text-[12px] mb-[6px]'>Product Description</small>
          <input value={formData.productDescription} onChange={handleChange} name="productDescription" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
        </div>
        <div className='w-full'>
          <h3 className='mb-[16px] text-[18px] text-[#777f98]'>Item List</h3>
          <div className="w-full">
            <div className=' text-[12px] mb-4 flex'>
              <h4 className='basis-6/12 text-left'>Item Name</h4>
              <h4 className='basis-[10%] text-left'>Qty</h4>
              <h4 className='basis-1/5 text-center'>Price</h4>
              <h4 className='basis-1/5 self-center text-center'>Total</h4>
            </div>
            {inputFields.map((item, index) => (
               <div key={index} className='gap-4 text-[12px] relative mb-[24px] flex'>
                  <input value={formData.itemName} onChange={handleChange} name="itemName" type="text" className='bg-[#1e2139] p-[5px] basis-6/12 text-left text-white rounded-md border-none focus:outline-none' />
                  <input value={formData.qty} onChange={handleChange} name="qty" type="text" className='bg-[#1e2139] p-[5px] basis-[10%] text-left text-white rounded-md border-none focus:outline-none' />
                  <input value={formData.price} onChange={handleChange} name="price" type="text" className='bg-[#1e2139] p-[5px] basis-1/5 text-left text-white rounded-md border-none focus:outline-none'/>
                  <small className='basis-1/5 self-center flex'>{formData.price}</small>
                  <DeleteIcon onClick={() => deleteInvoiceItem(item.id)} className='absolute  right-0 w-[12px] h-[16px] cursor-pointer' />
               </div>
            ))}

          </div>
          <div onClick={addNewInvoiceItem} className='flex text-white bg-[#252945] items-center justify-center w-full rounded-2xl p-[10px_20px] cursor-pointer'>
            <HeightIcon className='mr-1' />
            Add New Item
          </div>
        </div>
       </div>

        {/* save/Exit */}
        <div className='mt-[60px] flex'>
            <div className='left flex-[1]'>
              <button type="button" onClick={close} className='bg-[#ec5757] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Cancel</button>
            </div>
            {invoice ?
            <div className='justify-end flex flex-[1]'>
              <button type="submit" className='bg-[#252945] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Save Draft</button>
              <button type="submit" className='bg-[#7c5dfa] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Create Invoice</button>
            </div> : <button onClick={handleUpdateInvoice} className='bg-[#7c5dfa] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Update Invoice</button>}
        </div>
      </form>
    </div>
  )
}

export default InvoiceModal