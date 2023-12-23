import { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import HeightIcon from '@mui/icons-material/Height';


const InvoiceModal = ({ setInvoice }) => {
  const [dueDate, setDueDate] = useState('');

  const initialDate = new Date();

  const [dateValue, setDateValue] = useState(initialDate);

  const handleDateChange = (event) => {
    const newDateValue = new Date(event.target.value);
    setDateValue(newDateValue);
  };
  
  const close = () => {
     setInvoice(false)
  }

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;

    if (selectedOption === 'next30Days' || selectedOption === 'next60Days') {
      const currentDate = new Date();
      let daysToAdd = selectedOption === 'next30Days' ? 30 : 60;
      const nextDueDate = new Date(currentDate.setDate(currentDate.getDate() + daysToAdd));

      // Format the date as 'YYYY-MM-DD'
      const formattedDate = nextDueDate.toISOString().slice(0, 10);
      
      // Update the state with the formatted date
      setDueDate(formattedDate);
    } else {
      // Handle other options if needed
      setDueDate('');
    }
  };

  

  const [inputFields, setInputFields] = useState([]);

  const addNewInvoiceItem = () => {
    setInputFields([...inputFields, { id: inputFields.length }]);
  };

  // const addItemToCartAndNavigateToCartPage = (item) => {
  //   setCheckoutItem((prev) => {
  //     return [...prev, item]
  //   })
  // }

  const deleteInvoiceItem = (id) => {
    setInputFields((prev) => {
      return prev.filter((item) => {
        return item.id !== id
      })
    })
  }

  // const [values, setValues] = useState(Array(inputFields.length).fill(''));

  // const handleChange = (index, event) => {
  //   const newValues = [...values];
  //   newValues[index] = event.target.value;
  //   setValues(newValues);
  // };

   
  return (
    <div className=' fixed top-0 left-0 bg-[transparent] h-screen overflow-scroll min-[900px]:left-[90px]'>
      <form className='relative p-[56px] max-w-[700px] w-full bg-[#141625] text-white
       shadow-[10px_4px_6px_-1px_rgba(0,0,0.2),_0_2px_4px_-1px_rgba(0_0_0_0.06)] '>
        <h1 className='mb-[48px] text-white'>New Invoice</h1>
          {/* bill form */}
        <div className='mb-[48px] flex flex-col'>
           <h4 className='text-[#7c5dfa] text-[12px] mb-[24px]'>Bill Form</h4>
           <div className='mb-[24px] flex flex-col'>
              <small className='text-[12px] mb-[6px]'>Street Address</small>
              <input name="street-adddress"  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
            </div>
            <div className='gap-[16px] flex'>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <small className='text-[12px] mb-[6px]'>City</small>
                <input name="city" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <small className='text-[12px] mb-[6px]'>Zip Code</small>
                <input name="zip-code" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col flex-[1]'>
                <small className='text-[12px] mb-[6px]'>Country</small>
                <input name="country" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
            </div>
        </div>

       {/* bill to */}
       <div className='bill-to flex flex-col'>
         <h4 className='text-[#7c5dfa] text-[12px] mb-[24px]'>Bill to</h4>
         <div className='mb-[24px] flex flex-col'>
           <small className='text-[12px] mb-[6px]'>Client Name</small>
           <input name="client-name" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='mb-[24px] flex flex-col'>
           <small className='text-[12px] mb-[6px]'>Client Email</small>
           <input name="client-email" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='mb-[24px] flex flex-col'>
           <small className='text-[12px] mb-[6px]'>Street Address</small>
           <input name="street-address"  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
         </div>
         <div className='gap-[16px] flex'>
              <div className='mb-[24px] flex flex-col'>
                <small className='text-[12px] mb-[6px]'>City</small>
                <input name="city" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col'>
                <small className='text-[12px] mb-[6px]'>Zip Code</small>
                <input name="zip-code" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
              <div className='mb-[24px] flex flex-col'>
                <small className='text-[12px] mb-[6px]'>Country</small>
                <input name="country"  type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
              </div>
            </div>
       </div>

       {/* invoice work details */}
       <div className='gap-6 flex flex-col'>
        <div className='gap-6 flex'>
          <div className='mb-[24px] flex flex-col flex[1]'>
            <small className='text-[12px] mb-[6px]'>Invoice Date</small>
            <input
              name="invoice-date"
              onChange={handleDateChange}
              type="date"
              value={dateValue.toISOString().slice(0, 10)}
              className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none'
            />
          </div>
          <div className='mb-[24px] flex flex-col flex-[1]'>
            <small className='text-[12px] mb-[6px]'>Payment Due</small>
            <input name="payment-due"   type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
          </div>
        </div>
        <div className='mb-[24px] flex flex-col'>
          <small  className='text-[12px] mb-[6px]'>Payment Terms</small>
          <select name="payment-terms"  onChange={handleSelectChange} className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none'>
            <option  value="next30Days" >Next 30 Days</option>
            <option  value="next60Days" >Next 60 Days</option>
          </select>
        </div>
        <div className='mb-[24px] flex flex-col'>
          <small className='text-[12px] mb-[6px]'>Product Description</small>
          <input name="product-description" type="text" className='w-full bg-[#1e2139] text-white rounded-md p-[12px_4px] border-none focus:outline-none' />
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
              // <input key={field.id} type="text" name="raph" placeholder={`Enter text ${field.id + 1}`} />
               <div key={index} className='gap-4 text-[12px] relative mb-[24px] flex'>
                  {/* <span>{item.name}</span> */}
                  <input name="text" type="text" className='bg-[#1e2139] p-[5px] basis-6/12 text-left text-white rounded-md border-none focus:outline-none' />
                  <input name="text" type="text" className='bg-[#1e2139] p-[5px] basis-[10%] text-left text-white rounded-md border-none focus:outline-none' />
                  <input name="text" type="text" className='bg-[#1e2139] p-[5px] basis-1/5 text-left text-white rounded-md border-none focus:outline-none'/>
                  <small className='basis-1/5 self-center flex'>something</small>
                  <DeleteIcon onClick={() => deleteInvoiceItem(item.id)} className='absolute  right-0 w-[12px] h-[16px] cursor-pointer' />
               </div>
                // <div key={id} className='gap-4 text-[12px] relative mb-[24px] flex'>
                //   <input type="text" className='bg-[#1e2139] p-[5px]' />
                //   <input type="text" className='bg-[#1e2139] p-[5px]' />
                //   <input type="text" className='bg-[#1e2139] p-[5px]' />
                //   <small className='basis-1/5 self-center flex'>something</small>
                //   <DeleteIcon onClick={() => deleteItem(id)} className='absolute  right-0 w-[12px] h-[16px] cursor-pointer' />
                // </div>
            ))}

          </div>
          {/* {inputFields.map((field) => (
            <input key={field.id} name="something" type="text" />
          ))} */}
          {/* <table className='w-full'>
            <tbody>
            <tr className='gap-4 text-[12px] mb-4 flex'>
              <th className='basis-6/12 text-left'>Item Name</th>
              <th className='basis-[10%] text-left'>Qty</th>
              <th className='basis-1/5 text-left'>Price</th>
              <th className='basis-1/5 self-center text-left'>Total</th>
            </tr>
            </tbody>

            {inputFields.map((id) => (
              <tbody >
                <tr className='gap-4 text-[12px] relative mb-[24px] flex'>
                  <td className='basis-6/12' ><input key={id} type="text" className='bg-[#1e2139] p-[5px]' /></td>
                  <td className='basis-[10%]'><input key={id} type="text" className='bg-[#1e2139] p-[5px]' /></td>
                  <td className='basis-1/5' ><input key={id} type="text" className='bg-[#1e2139] p-[5px]' /></td>
                  <td className='basis-1/5 self-center flex'>something</td>
                  <DeleteIcon onClick={() => deleteItem(id)} className='absolute  right-0 w-[12px] h-[16px] cursor-pointer' />
                </tr>
              </tbody>
            ))}
          </table> */}
          <div onClick={addNewInvoiceItem} className='flex text-white bg-[#252945] items-center justify-center w-full rounded-2xl p-[10px_20px] cursor-pointer'>
            <HeightIcon className='mr-1' />
            Add New Item
          </div>
        </div>
       </div>

        {/* save/Exit */}
        <div className='mt-[60px] flex'>
            <div className='left flex-[1]'>
              <button onClick={close} className='bg-[#ec5757] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Cancel</button>
            </div>
            <div className='justify-end flex flex-[1]'>
              <button  className='bg-[#252945] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Save Draft</button>
              <button  className='bg-[#7c5dfa] cursor-pointer p-[16px_24px] rounded-2xl border-none text-[12px] mr-[8px] text-white'>Create Invoice</button>
            </div>
        </div>
      </form>
    </div>
  )
}

export default InvoiceModal

// onst deleteItem = (id) => {
//   setCheckoutItem((prev) => {
//     return prev.filter((item) => {
//   c    return item.id !== id
//     })
//   })
// }