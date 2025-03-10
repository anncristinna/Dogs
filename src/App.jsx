import React from 'react';
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Photo from './Components/Photo/Photo.jsx'
import Login from './Components/Login/Login';
import { UserStorage } from './UserContext.jsx'
import User from './Components/User/User.jsx';
import ProtectedRoute from './Components/Helper/ProtectedRoute.jsx';
import UserProphile from './Components/User/UserProphile.jsx';
import NotFound from './Components/NotFound.jsx';

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
              <Route path='foto/:id' element={<Photo />}/>
              <Route path='perfil/:user' element={<UserProphile />} />
              <Route path='*' element={<NotFound/>}/>
            </Routes>
          </main>
          <Footer />
        </UserStorage>
      </BrowserRouter>
    </div>
  );
};

export default App;
