import './App.css';
import Landing from './components/Landing';
import './styles/Main.css';
import Skills from './components/Skills';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="dark-theme">
      <Landing/>
      <Skills/>
      {/* <About/> */}
    </div>
    
  );
}

export default App;
