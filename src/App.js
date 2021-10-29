import logo from './logo.svg';
import './App.css';
import Header from './components/Shared/Header/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import AuthProvider from './context/AuthProvider';
import Offerings from './components/Home/Offerings/Offerings';
import Login from './components/Register/Login/Login';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/offerings">
              <Offerings></Offerings>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
