import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate  } from 'react-router-dom';
import face1 from './Images/Moods/No01.png';
import face2 from './Images/Moods/No02.png';
import face3 from './Images/Moods/No03.png';
import face4 from './Images/Moods/No04.png';
import face5 from './Images/Moods/No05.png';
import face6 from './Images/Moods/No06.png';
import face7 from './Images/Moods/No07.png';
import face8 from './Images/Moods/No08.png';
import face9 from './Images/Moods/No09.png';
import face10 from './Images/Moods/No10.png';
import face11 from './Images/Moods/No11.png';
import face12 from './Images/Moods/No12.png';
import face13 from './Images/Moods/No13.png';
import face14 from './Images/Moods/No14.png';
import face15 from './Images/Moods/No15.png';
import face16 from './Images/Moods/No16.png';
import { ToastContainer,toast } from 'react-toastify';

export default function ReadMoods() {
  const [date, setDate] = useState(new Date(new Date().setHours(0,0,0,0)));
  const [responseData, setResponseData] = useState(null);

  const location = useLocation();
  const { userId } = location.state || {};
  const userid = userId || 0;

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('User ID: ', userid);
    console.log('Date: ', date);

    try {
      const params = new URLSearchParams();
      params.append('userId', userid);
      params.append('date', date);
      console.log('params ', params);

      const url = `http://localhost:8080/api/mood/readMood?${params}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.ok) {
        //const data = await response.json();
        console.log('Response: ', response);
        setResponseData(await response.text());
      } else {
        throw new Error('Failed to fetch data');
      }

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleBack = () => {
    navigate('/Home', { state: { userId } });
  };

  return (
    <div>
      <h1>How has your mood on a specific day?</h1>
      <br />

      <ToastContainer/>
      <form onSubmit={handleSubmit}>
        <table>
          <tbody>
            
            <tr>
              <td>Enter Date:</td>
              <td>
                <DatePicker selected={date} onChange={date => setDate(date)} />
              </td>
            </tr>
          </tbody>
        </table>

        <br />

        <div align='center'>
          <button type='submit'>SUBMIT</button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <button onClick={handleBack}>
                BACK
            </button>
        </div>
      </form>
      {responseData && (
        <div align="center">
          <h2>Response:</h2>
          <h4>{responseData}</h4>
        
        <table>
          <tr>
            <td>Option 1:<br/><img src={face1}></img></td>
            <td>Option 2:<br/><img src={face2}></img></td>
            <td>Option 3:<br/><img src={face3}></img></td>
            <td>Option 4:<br/><img src={face4}></img></td>
            <td>Option 5:<br/><img src={face5}></img></td>
            <td>Option 6:<br/><img src={face6}></img></td>
            <td>Option 7:<br/><img src={face7}></img></td>
            <td>Option 8:<br/><img src={face8}></img></td>
          </tr>
          <tr>
            <td>Option 9:<br/><img src={face9}></img></td>
            <td>Option 10:<br/><img src={face10}></img></td>
            <td>Option 11:<br/><img src={face11}></img></td>
            <td>Option 12:<br/><img src={face12}></img></td>
            <td>Option 13:<br/><img src={face13}></img></td>
            <td>Option 14:<br/><img src={face14}></img></td>
            <td>Option 15:<br/><img src={face15}></img></td>
            <td>Option 16:<br/><img src={face16}></img></td>
          </tr>
        </table>
        </div>
      )}
    </div>
  );
}
