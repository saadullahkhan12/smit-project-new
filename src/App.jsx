import './App.css';
import Signin from './Database/signin';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './pages/Header';
import Footer from './pages/footer';
import HotelCard from './pages/HotelCard';
import HotelListingPage from './pages/HotelListingPage';
import TravelPage from './pages/TravelPage';
import Dashboard from './pages/Dashboard';
import Signup from './pages/signup';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>

      <Route path='/' element={<TravelPage/>} />
      <Route path='/HotelCard' element={<HotelCard/>} />
      <Route path='/HotelListingPage' element={<HotelListingPage/>} />
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/HotelCard' element={<HotelCard/>}/>
      


        
        <Route path='/signin' element={<Signin/>} />
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
