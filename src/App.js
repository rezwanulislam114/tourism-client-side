import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import AddOffer from './pages/AddOffer/AddOffer';
import Login from './pages/Authentication/Login/Login';
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
import ManageServices from './pages/ManageServices/ManageServices';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Footer from './pages/Shared/Footer/Footer';
import Header from './pages/Shared/Header/Header';
import SingleService from './pages/SingleService/SingleService';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
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
          <PrivateRoute path="/add-offer">
            <AddOffer></AddOffer>
          </PrivateRoute>
          <PrivateRoute path="/manage-services">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <PrivateRoute path="/cart">
            <Cart></Cart>
          </PrivateRoute>
          <PrivateRoute path="/offer/:id">
            <SingleService></SingleService>
          </PrivateRoute>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
