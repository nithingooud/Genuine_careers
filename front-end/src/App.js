import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import { HomeComponent } from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <NavbarComponent />
      <Routes>
        <Route path='/' element={<HomeComponent />} />
      </Routes>
    </BrowserRouter>
  );

}

export default App;
