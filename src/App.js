import { Route } from 'react-router-dom';
import About from './components/About/About.jsx';
import Main from './components/Main/Main.jsx'

function App() {
  return (
    <div>
      <Route exact path="/" component={Main}/>
      <Route exact path="/About" component={About}/>
    </div>
  );
}

export default App;
