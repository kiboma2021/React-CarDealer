import { Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import Contact from './components/Contact';
import Careers from './components/Careers';

import './App.css';
import PageNotFound from './components/PageNotFound';
import CareersFin from './components/CareersFin';
import CareersWeb from './components/CareersWeb';
import CareersHr from './components/CareersHr';



function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main />}> </Route>
        <Route path='contact' element={<Contact />}> </Route>
        <Route path='job' element={<Careers />}>
            <Route path='finance' element={<CareersFin />}> </Route>
            <Route path='web' element={<CareersWeb />}> </Route>
            <Route path='hr' element={<CareersHr />}> </Route>
        </Route>
        <Route path='*' element={<PageNotFound />}> </Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
