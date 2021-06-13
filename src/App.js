import './App.css';
import Landing from './components/Landing';
import './styles/Main.css';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="dark-theme">
      <Router basename={process.env.PUBLIC_URL}>
        <Navigation />
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route path="/about" component={About} />

        </Switch>

      </Router>
     
    </div>

  );
}

export default App;
