import logo from './logo.svg';
import './App.css';
import Users from './pages/Users';
import Footer from './components/Footer'
import { useState } from 'react';
import Admin from './pages/Admin';
import { ItemsProvider } from './context/itemsContext';
import { CartProvider } from './context/CartContext';

function App() {

  const [isUser, setIsUser] = useState(true);

  const changeRole = () => {
    if (isUser) {
      setIsUser(false);
      console.log("Admin");
    }
    else {
      setIsUser(true);
      console.log("User");
    }
  };

  return (

    <div>
      <ItemsProvider>
        <CartProvider>
        {isUser ? <Users user={isUser}/> : <Admin user={isUser} />}
        <Footer user={isUser} changeRole={changeRole} />
        </CartProvider>
      </ItemsProvider>
    </div>
  );
};
export default App;
