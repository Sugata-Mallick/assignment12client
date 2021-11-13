import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking/Booking';
import Login from './Pages/Login/Login/Login';
import Header from './Pages/Shared/Header/Header';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageService from './Pages/ManageServices/ManageService';
import Dashboard from './Dashboard/Dashboard';
import Explores from './Explore/Explores';
import Purchase from './Purchase/Purchase';
import Pay from './Dashboard/Pay/Pay';

import Review from './Pages/Home/Review/Review';
import Reviews from './Pages/Home/Review/Reviews';
import AddModel from './Explore/AddModel';
import Registrasion from './Pages/Login/Login/Registrasion';





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
            <Route path="/registrasion">
              <Registrasion></Registrasion>
            </Route>
         
            <Route path="/dashboard">
              <Dashboard></Dashboard>
            </Route>
            <Route path="/explores">
             <Explores></Explores>
            </Route>
            <PrivateRoute path="/addService">
              <AddService></AddService>
            </PrivateRoute>
        <PrivateRoute path ="/manageService">
          <ManageService></ManageService>
        </PrivateRoute>
            <PrivateRoute path="/booking/:serviceId">
              <Booking></Booking>
            </PrivateRoute>
            <Route path="/purchase/:exploreId">
              <Purchase></Purchase>
            </Route>
  <PrivateRoute  path="/pay">
    <Pay></Pay>
  </PrivateRoute>
 
  


  <PrivateRoute  path="/review">
    <Review></Review>
  </PrivateRoute>
  <PrivateRoute  path="/reviews">
    <Reviews></Reviews>
  </PrivateRoute>
  <PrivateRoute  path="/addModel">
    <AddModel></AddModel>
  </PrivateRoute>


       
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
