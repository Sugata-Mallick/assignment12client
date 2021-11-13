import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import MakeAdmin from '../hooks/MakeAdmin/MakeAdmin';

const Dashboard = () => {
    const { user, logOut } = useAuth();
    return (

        <div className="row ">
             <div className="col-3  vh-100 pt-5 bg-dark text-primary">
                  <Container >
                     
                  
                        <Nav.Link  className=" pt-2"  as={Link} to="/pay">Pay</Nav.Link>
                        <Nav.Link  className=" pt-2"  as={Link} to="/manageService">My Orders</Nav.Link>
                        <Nav.Link  className=" pt-2"  as={Link} to="/review">Reviews</Nav.Link>
                        <Nav.Link  className=" pt-2"  as={Link} to="/makeAdmin">MakeAdmin</Nav.Link>
                        
                        {user?.email ?
                            <Button  onClick={logOut} variant="light">Logout</Button> :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        {/* <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text> */}
                </Container>
  
</div>
    <div className="col-9 pt-5">
          <Router>  <Switch>
              <Route path="makeAdmin">
                <MakeAdmin></MakeAdmin>
            </Route>
            </Switch></Router>
        
        </div>
        </div>
      
      

    );
};

export default Dashboard;