import './App.css';
import Landing from './components/Landing';
import './styles/Main.css';
import About from './components/About';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import {BrowserRouter as Router, Switch, Route,HashRouter } from 'react-router-dom';
import Journey from './components/Journey';
import Blogs from './components/Blogs';
import Error from './components/Error';

function App() {
  return (
    <div className="dark-theme">
      <HashRouter >
        <Navigation />
        <Switch>

          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/timeline" component={Journey} />
          <Route exact path="/blog" component={Blogs} />
          <Route  path="*" component={Error} />
        </Switch>

      </HashRouter>
     
    </div>

  );
}

export default App;
