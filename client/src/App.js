import { useState, useEffect } from 'react';
import './App.css';
import './Animation.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import PostForm from './Components/PostForm/PostForm';

import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  const [ sessionToken, setSessionToken ] = useState(undefined)

  useEffect(() => {
      if(localStorage.getItem("token")) {
          setSessionToken(localStorage.getItem("token"))
      }
  }, []);

  const updateLocalToken = token => {
    localStorage.setItem("token", token);
  }

  return (
    <>
      <div id="wrap">
        <Nav />
        <Routes>
          <Route path='/' element={<Home isHome={true} />} />
          <Route path='/posts' element={<Home isHome={false} />} />
          <Route path='/login' element={<Login updateLocalToken={updateLocalToken} />} />
          <Route path='/create' element={
            <PrivateRoute>
              <PostForm sessionToken={sessionToken} />
            </PrivateRoute>}
          />
        </Routes>      
        <Footer />
      </div>
    </>
  );
}

export default App;
