import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/Footer';
import HotelCard from './pages/HotelCard';
import HotelListingPage from './pages/HotelListingPage';
import TravelPage from './pages/TravelPage';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import AddCard from './pages/AddCard';
import FlightBookingAdmin from './pages/FlightBookingAdmin';
import Hotelbookingadmin from './pages/Hotelbookingadmin';


function App() {

  
  return (
    <BrowserRouter>
    <Header />
      <Routes>

      <Route path='/' element={<TravelPage/>} />
      <Route path='/HotelCard' element={<HotelCard/>} />
      <Route path='/HotelListingPage' element={<HotelListingPage/>} />
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/HotelCard' element={<HotelCard/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Addcard' element={<AddCard/>}/>
      <Route path='/FlightBookingAdmin' element={<FlightBookingAdmin/>}/>
      <Route path='/Hotelbookingadmin' element={<Hotelbookingadmin/>}/>
      


        
        <Route path='/signup'  element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
