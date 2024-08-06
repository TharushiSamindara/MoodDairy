import './DeleteMood.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useState, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';
import { useLocation, useNavigate  } from 'react-router-dom';

export default function DeleteMood() {
    const [date, setDate] = useState(new Date(new Date().setHours(0,0,0,0)));//useState(new Date());


    const location = useLocation();
    const { userId } = location.state || {};
    const userid = userId || 0;

    const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('userid ', userid);
    console.log('date ', date);
    const requestBody = {
      id: {
        userId: userid,
        date: date
      },
    }
      const response = await fetch('http://localhost:8080/api/mood/deleteMood', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      toast.success('Mood deleted successfully.'); // Display toast message on successful save
    } else {
      toast.error('Failed to delete mood'); // Display error toast message on failure
    }

    console.log('response ', response);
  };

  const handleBack = () => {
    navigate('/Home', { state: { userId } });
  };

    return (
    <div>
        <h1>DELETE MOOD</h1>
        <br/>
        <ToastContainer/>
        <form onSubmit={handleSubmit}>
        

        <table>
          

          <tr>
            <td>
            Enter Date:
            </td>
            <td>
            <DatePicker selected={date} onChange={(date) => setDate(date)} value={date} />
            </td>
          </tr>
        </table>

        <ToastContainer/>
        <br/><br/><br/><br/>
        <table align='center'>
        <tr>
        <td>
        <button>
                SUBMIT
        </button>
        </td>
        <td>
        <button onClick={handleBack}>
            BACK
        </button>
        </td>
        </tr>
        </table>
        </form>
    </div>
  )
}
