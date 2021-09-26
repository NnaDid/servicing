import './App.css';
import { HomePage } from './container/HomePage';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { CustomerAccessPage } from './components/customerAccessPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
              <Route path ='/' exact component ={HomePage}/>
              <Route path ='/customer/access' component ={CustomerAccessPage}/>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
