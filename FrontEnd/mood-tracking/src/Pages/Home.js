import './Home.css';
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
import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer,toast } from 'react-toastify';


function Home() {
  
  const faceArray = [{src: face1, id: 'face1'},{src: face2, id: 'face2'}, {src: face3, id: 'face3'}]
  const [date, setDate] = useState(new Date(new Date().setHours(0,0,0,0)));//const [date, setDate] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('');

  const location = useLocation();
  const { userId } = location.state || {};
  const userid = userId || 0;

  const navigate = useNavigate();
  
  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log('userid ', userid);
    console.log('date ', date);
    console.log('selectedOption ', selectedOption);

    const requestBody = {
      id: {
        userId: userid,
        date: date
      },
      day_mood: selectedOption
    }

      const response = await fetch('http://localhost:8080/api/mood/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (response.ok) {
      toast.success('Mood saved successfully'); // Display toast message on successful save
    } else {
      toast.error('Failed to save mood'); // Display error toast message on failure
    }

    console.log('response ', response);

  
  };

  const handleChangeMood = () => {
    navigate('/UpdateMood', { state: { userId } });
  };

  const handleDeleteMood = () => {
    navigate('/DeleteMood', { state: { userId } });
  };

  const handleReadMood = () => {
    navigate('/ReadMoods', { state: { userId } });
  };




    return (
      <div>

      <ToastContainer/>
      <form onSubmit={handleSubmit}>
      
        
        <h1>MOOD TRACKING</h1>
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
        
        <div align="center" className="moodTable">
        <p>Choose an option:</p>
      <label>
        <img src={face1}></img>
        <input
          type="radio"
          value="Option 1"
          checked={selectedOption === "Option 1"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face2}></img>
        <input
          type="radio"
          value="Option 2"
          checked={selectedOption === "Option 2"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face3}></img>
        <input
          type="radio"
          value="Option 3"
          checked={selectedOption === "Option 3"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
        <img src={face4}></img>
        <input
          type="radio"
          value="Option 4"
          checked={selectedOption === "Option 4"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face5}></img>
        <input
          type="radio"
          value="Option 5"
          checked={selectedOption === "Option 5"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face6}></img>
        <input
          type="radio"
          value="Option 6"
          checked={selectedOption === "Option 6"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
        <img src={face7}></img>
        <input
          type="radio"
          value="Option 7"
          checked={selectedOption === "Option 7"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face8}></img>
        <input
          type="radio"
          value="Option 8"
          checked={selectedOption === "Option 8"}
          onChange={handleRadioChange}
        />
      </label>
      <br></br>
      <label>
      <img src={face9}></img>
        <input
          type="radio"
          value="Option 9"
          checked={selectedOption === "Option 9"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
        <img src={face10}></img>
        <input
          type="radio"
          value="Option 10"
          checked={selectedOption === "Option 10"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face11}></img>
        <input
          type="radio"
          value="Option 11"
          checked={selectedOption === "Option 11"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face12}></img>
        <input
          type="radio"
          value="Option 12"
          checked={selectedOption === "Option 12"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face13}></img>
        <input
          type="radio"
          value="Option 13"
          checked={selectedOption === "Option 13"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
        <img src={face14}></img>
        <input
          type="radio"
          value="Option 14"
          checked={selectedOption === "Option 14"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face15}></img>
        <input
          type="radio"
          value="Option 15"
          checked={selectedOption === "Option 15"}
          onChange={handleRadioChange}
        />
      </label>
      <label>
      <img src={face16}></img>
        <input
          type="radio"
          value="Option 16"
          checked={selectedOption === "Option 16"}
          onChange={handleRadioChange}
        />
      </label>


        
        </div>
  
  
        <div>
          <table className='buttonSet'>
            <tr>
            <td>

            <button className='btnSpecify' type='submit'>
              SUBMIT
            </button>
            </td>
            </tr>
          </table>
          <table id='moodRead'>
            <tr>
            <td>
            <button className='btnSpecify' onClick={handleChangeMood}>
              Change Mood
            </button>
            </td>

            <td>
            <button className='btnSpecify' onClick={handleDeleteMood}>
              Delete Mood
            </button>
            </td>

            <td>
            <button className='btnSpecify' onClick={handleReadMood}>
              Get my mood on specific day
            </button>
            </td>

            <td>
            <Link to='/'>
              <button className='btnSpecify'>
                  BACK
              </button>
            </Link>
            </td>
            </tr>
          </table>
            
        </div>
        </form>
      </div>
    );
  }
   
  export default Home;