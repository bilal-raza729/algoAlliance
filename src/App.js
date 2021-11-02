
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/homes';
import Error from './components/error';
import Strength from './components/stength';
import Partner from './components/partner';
import News from './components/news';


function App() {
  return (
    <Router>
         <Switch>
             <Route exact path="/" component={Home}/>
             <Route exact path="/strength" component={Strength}/>
             <Route exact path="/partner" component={Partner}/>
             <Route exact path="/news" component={News}/>

             <Route path="*" component={Error}/>
         </Switch>
    </Router>
  );
}

export default App;