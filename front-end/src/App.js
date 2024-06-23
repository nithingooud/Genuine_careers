import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { HomeComponent } from './components/Home';
import { JobDetailsComponent } from './components/JobDetails';
import { FooterComponent } from './components/Footer'
import AddJobDetails from './components/AddJob';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
        <Route path='/job' element={<JobDetailsComponent />} />
        <Route path='/addJob' element={<AddJobDetails />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );

}

export default App;
