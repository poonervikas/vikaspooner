import './App.css';
import Landing from './components/Landing';
import './styles/Main.css';
import Skills from './components/Skills';
import About from './components/About';

function App() {
  return (
    <div className="dark-theme">
      <Landing/>
      <Skills/>
      <About/>
    </div>
    
  );
}

export default App;
