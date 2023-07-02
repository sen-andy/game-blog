import './App.css';
import './Animation.css';
import Nav from './Components/Nav/Nav';
import Grid from './Components/Grid/Grid';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div id="wrap">
      <Nav />
      <Login />
      <Grid />
      <Footer />
    </div>
  );
}

export default App;
