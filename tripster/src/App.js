import logo from './logo.svg';
import './App.css';
import Navbar2 from './testcomponents/Navbar2';
import { Text } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import AllRoutes from './components/AllRoutes';



function App() {
  return (
    <div>
      <Navbar />
      <AllRoutes />
      <Footer />
    </div>
  );
}

export default App;
