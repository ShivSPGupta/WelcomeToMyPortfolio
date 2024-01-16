import './App.scss';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import Portfolio from './containers/portfolio';
import Resume from './containers/resume';
import Skills from './containers/skills';
import Navbar from './components/NavBar';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import particles from './utils/particles';


function App() {

  const location = useLocation();
  console.log(location);

  const handleInit = async (main)=>{
    await loadFull(main)
  }

  const renderParticleJsInHomePage = location.pathname === "/";

  return (
    <div className="App">
    {/* particles js */}

    {
      renderParticleJsInHomePage && 
      <Particles id='particles' options={particles} init={handleInit}/>
    }
    

    {/* navbar */}
    <Navbar/>

    {/* main page content */}

    <div className='App__main-page-content'>
    <Routes>
      <Route index path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/resume' element={<Resume/>}/>
      <Route path='/skills' element={<Skills/>}/>
      </Routes>
    </div>

    </div>
  );
}

export default App;
