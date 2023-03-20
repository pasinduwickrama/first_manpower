
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Job from './components/Job/Job';
import CvAcount from './components/VAcancy/cv/CvAcount';
import EditCv from './components/VAcancy/cv/EditCv';

import Vacancy from './components/VAcancy/Vacancy';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
         <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/va' element={<Vacancy />} />
          <Route path='/ca' element={<CvAcount />} />
          <Route path='/ed' element={<EditCv />} />
          <Route path='/job' element={<Job />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
