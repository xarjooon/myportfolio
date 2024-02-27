import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import Socialinks from './Components/Socialinks';
import About from './Components/About';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import MyProjects from './Components/MyProjects';



function App() {
  
  return (
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <MyProjects/>
     
      <Skills/>
      <Contact/>
      
      <Socialinks/>
    </div>
     );
}

export default App;
