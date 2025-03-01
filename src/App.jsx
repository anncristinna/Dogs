import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext.jsx'
import User from './Components/User/User.jsx';
import ProtectedRoute from './Components/Helper/ProtectedRoute.jsx';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <UserStorage>
          <Header />
          <main className='AppBody'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='login/*' element={<Login />} />
              <Route path='conta/*' element={<ProtectedRoute> <User /> </ProtectedRoute>} />
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
