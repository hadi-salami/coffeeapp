import { Navbar } from './Components/NavBar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import About from './pages/About';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About/>} />
        </Routes>
        </>
        
  
      
      
      
    
   
      
  );
}

export default App;