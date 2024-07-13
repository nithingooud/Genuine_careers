import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { HomeComponent } from './components/Home';
import { JobDetailsComponent } from './components/JobDetails';
import AboutUsComponent from './components/AboutUs';
import { FooterComponent } from './components/Footer'
import AddJobDetails from './components/AddJob';
import InterviewExperienceComponent from './components/InterviewExperience';
import ServicesComponent from './components/Services'
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
        <main className="flex-grow pt-16">
          <Routes>
            <Route path='/' element={<HomeComponent onDrawerOpen={handleDrawerOpen} onDrawerClose={handleDrawerClose} />} />
            <Route path='/job' element={<JobDetailsComponent onDrawerOpen={handleDrawerOpen} onDrawerClose={handleDrawerClose} />} />
            <Route path='/about' element={<AboutUsComponent onDrawerOpen={handleDrawerOpen} onDrawerClose={handleDrawerClose} />} />
            <Route path='/addJob' element={<AddJobDetails />} />
            <Route path='/interviewExperience' element={<InterviewExperienceComponent />} />
            <Route path='/addCompany' element={<CompanyForm />} />
            <Route path='/services' element={<ServicesComponent />} />
          </Routes>
        </main>
        <FooterComponent isDrawerOpen={isDrawerOpen} />
      </div>
    </BrowserRouter>
  );

}

export default App;
