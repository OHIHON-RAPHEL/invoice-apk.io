import { useState, useEffect} from 'react'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import {Link} from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';

  
const InvoiceView = ({database, entryId}) => {
  const { id } = useParams();
  const [entries, setEntries] = useState(null);

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
  

  return (
    <div>
      {/* {entries.map((entry, index) => (
      <div key={index}> */}

      <Link to="/Home" className='no-underline text-[initial] flex'>
        <ArrowLeftIcon /> Go Back
      </Link>
      <div className='header flex'>
        <div className='left flex'>
          <span>Status</span>
          <div className='status-button flex'>
            <span className='bg-[#33d69f]'>Paid</span>
            <span>Draft</span>
            <span className='bg-[#ff8f00]'>Pending</span>
          </div>
        </div>
        <div className='righy flex'>
          <button className='dark-purple'>Edit</button>
          <button className='red'>Delete</button>
          <button className='green'>Mark as Paid</button>
          <button className='orange'>Mark as Pending</button>
        </div>
      </div>
      <div className='invoice-details flex flex-col'>
        <div className='top flex'>
          <div className='left flex'>
            <p>{entryId}</p>
            {/* <p>{entry.productDescription}</p> */}
            bhhbsnjsjn
          </div>
          <div className='right flex flex-col'>
            {/* <p>{entry.clientStreetAddress}</p>
            <p>{entry.clientCity}</p>
            <p>{entry.clientZipCode}</p>
            <p>{entry.clientCountry}</p> */}
          </div>
        </div>
      </div>

      {/* </div>))} */}

    </div>
  )
}

export default InvoiceView
