import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { HomeComponent } from './components/Home';
import { JobDetailsComponent } from './components/JobDetails';
import { FooterComponent } from './components/Footer'
import AddJobDetails from './components/AddJob';
import CompanyForm from './components/AddCompany';
import { useState } from 'react';


function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleDrawerOpen = () => setIsDrawerOpen(true);
  const handleDrawerClose = () => setIsDrawerOpen(false);
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomeComponent onDrawerOpen={handleDrawerOpen} onDrawerClose={handleDrawerClose} />} />
            <Route path='/job' element={<JobDetailsComponent />} />
            <Route path='/addJob' element={<AddJobDetails />} />
            <Route path='/addCompany' element={<CompanyForm />} />
          </Routes>
        </main>
        <FooterComponent isDrawerOpen={isDrawerOpen} />
      </div>
    </BrowserRouter>
  );

}

export default App;
