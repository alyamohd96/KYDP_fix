//import { Home } from '@mui/icons-material';
import './App.css';
import Login from './components/Login';
import Home from './components/Home';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Navigate, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');


  useEffect(() => {
    const loggedInStatus = localStorage.getItem('isLoggedIn');
    const storedUsername = localStorage.getItem('username');  
    
    if (loggedInStatus && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  // const navigate = useNavigate();

  // function to handle log out button 
  const handleLogout = () => {
    
    // set local storage of isLoggedIn to false and isLoggedIn state to false
    localStorage.setItem('isLoggedIn', false);
    setIsLoggedIn(false);

    // set local storage of isLoggedIn to false and isLoggedIn state to false
    localStorage.setItem('username', '');
    setUsername('');
    
    // // navigate to login page
    // navigate('/login');
  };

  return (
    
    <Router>
      <Routes>
        <Route 
          path="/login"
          element= { isLoggedIn ? <Navigate to="/home" /> : <Login setIsLoggedIn={setIsLoggedIn} setUsername={setUsername} />}
        />
        
        <Route 
          path="/home"
          element = { isLoggedIn ? <Home handleLogout={handleLogout}/> : <Navigate to="/login" />} 
        />

        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
