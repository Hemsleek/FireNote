import { Switch, Route } from 'react-router-dom'

import GetStarted from './components/GetStarted'
import LandingPage from './components/LandingPage'

import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path='/' exact component={LandingPage} />
        <Route path='/get_started' component={GetStarted} />
      </Switch>
    </div>
  );
}

export default App;
