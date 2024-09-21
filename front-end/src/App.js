import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { JobsComponent } from './components/JobComponents/Jobs';
import { JobDetailsComponent } from './components/JobComponents/JobDetails';
import AboutUsComponent from './components/AboutUs';
import { FooterComponent } from './components/Footer'
import AddJobDetails from './components/JobComponents/AddJob';
import InterviewExperienceComponent from './components/InterviewExperience';
import ServicesComponent from './components/Services'
import CompanyForm from './components/JobComponents/AddCompany';
import HomeComponent from './components/Home';
import HandWrittenNotes from './components/handWrittenNotes/HandWrittenNotes';
import BookContent from './components/handWrittenNotes/BookContent';
import MyBlogPage from './components/myBlogs/myBlog';
import AddBlog from './components/myBlogs/addBlog';
import BlogDetails from './components/myBlogs/blogComponent';


function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <NavbarComponent />
        <main className="flex-grow">
          <Routes>
            <Route path='/' element={<HomeComponent />} />
            <Route path='/jobs' element={<JobsComponent />} />
            <Route path='/job' element={<JobDetailsComponent />} />
            <Route path='/about' element={<AboutUsComponent />} />
            {/* <Route path='/addJob' element={<AddJobDetails />} />
            <Route path='/addBlog' element={<AddBlog />} /> */}
            <Route path='/interviewExperience' element={<InterviewExperienceComponent />} />
            {/* <Route path='/addCompany' element={<CompanyForm />} /> */}
            <Route path='/services' element={<ServicesComponent />} />
            <Route path="/handwritten-notes" element={<HandWrittenNotes />} />
            <Route path="/handwritten-book" element={<BookContent />} />
            <Route path="/my-blogs" element={<MyBlogPage />} />
            <Route path="/blog-component" element={<BlogDetails />} />

          </Routes>
        </main>
        {/* <FooterComponent /> */}
      </div>
    </BrowserRouter>
  );

}

export default App;
