import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Navigationbar from './navbar/Navbar.js';
import Profile from './components/profile/Profile.js';
import MyAdditionForm from './components/addNumbers/AddNumbers.jsx';
import axios from "axios";


const options = {
  method: 'GET',
  url: 'https://bb-finance.p.rapidapi.com/news/list',
  params: {id: 'mark'},
  headers: {
    'X-RapidAPI-Key': '70d94a8e13msh98f14944d29f21fp16d458jsne617648bbd68',
    'X-RapidAPI-Host': 'bb-finance.p.rapidapi.com'
  }
};
axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
function App() {
  
  return (
    
    <>
    <Navigationbar/>
    <BrowserRouter>
        <Routes>
          <Route index element={<Profile />} />
          <Route path="/AddNumbers" element={<MyAdditionForm />} />
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
