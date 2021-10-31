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
import PrivateRoute from './components/Register/PrivateRoute/PrivateRoute';
import NotFound from './components/NotFound/NotFound';
import AddService from './components/AddService/AddService';
import MyOrders from './components/MyOrders/MyOrders';
import PlaceOrder from './components/Home/PlaceOrder/PlaceOrder';
import Footer from './components/Shared/Footer/Footer';
import About from './components/Home/About/About';
import ManageOrders from './components/ManageOrders/ManageOrders';
import Contact from './components/Home/Contact/Contact';

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
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <Route path="/contact">
              <Contact></Contact>
            </Route>
            <Route path="/offerings">
              <Offerings></Offerings>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
            <PrivateRoute exact path="/orderDetail/:orderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
