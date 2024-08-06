import Login from './Pages/Login';
import SignIn from './Pages/SignIn';
import Home from './Pages/Home';
import UpdateMood from './Pages/UpdateMood';
import DeleteMood from './Pages/DeleteMood';
import ReadMoods from './Pages/ReadMoods';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (


    <BrowserRouter>
    
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/Home" element={<Home />}/>
        <Route path="/UpdateMood" element={<UpdateMood />} />
        <Route path="/DeleteMood" element={<DeleteMood />} />
        <Route path="/ReadMoods" element={<ReadMoods />} />
      </Routes>
    </BrowserRouter>
    

    
  );
}

export default App;