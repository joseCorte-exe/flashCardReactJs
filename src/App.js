import './App.css';

import Courses from './components/courses/index.jsx';
import Header from './components/header/index.jsx';
import Home from './components/home/index.jsx';
import Cadastro from './pages/index.jsx';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {


  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/" exact component={Home}/>
        <Route path="/courses" component={Courses}/>
        <Route path='/cadastro/novo' component={Cadastro}/>
        <Route path='/cadastro/editar/:colecaoId' component={Cadastro}/>
      </div>
    </Router>
    
  );
}

export default App;