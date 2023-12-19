import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/Contact';
import Careers from './components/Careers';

import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}> </Route>
        <Route path='contact' element={<Contact />}> </Route>
        <Route path='job' element={<Careers />}> </Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
