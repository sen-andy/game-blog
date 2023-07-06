import './App.css';
import './Animation.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './Components/Nav/Nav';
import Grid from './Components/Grid/Grid';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import PostForm from './Components/Post/PostForm';

import PrivateRoute from './PrivateRoute/PrivateRoute';

function App() {
  return (
    <>
      <div id="wrap">
        <Nav />
        <Routes>
          <Route path='/' element={<Grid />} />
          <Route path='/login' element={<Login />} />
          <Route path='/create' element={<PrivateRoute><PostForm /></PrivateRoute>} />
        </Routes>      
        <Footer />
      </div>
    </>
  );
}

export default App;
