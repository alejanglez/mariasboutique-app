import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">
              Maria's Boutique
            </Link>
          </div>
          <div>
            <Link to="/cart">
            Cesto
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                      <Link to="/profile">Perfil de Utilizador</Link>
                  </li>
                  <li>
                    <Link to="/orderhistory">Histórico</Link>
                  </li>
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sair
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Autenticar</Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">
                  Admin <i className="fa fa-caret-down"></i>
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li>
                    <Link to="/productlist">Produtos</Link>
                  </li>
                  <li>
                    <Link to="/orderlist">Encomendas</Link>
                  </li>
                  <li>
                    <Link to="/userlist">Utilizadores</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
        ></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <PrivateRoute
            path="/profile"
            component={ProfileScreen}
        ></PrivateRoute>
        <AdminRoute
            path="/productlist"
            component={ProductListScreen}
            exact
        ></AdminRoute>
        <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
            exact
        ></AdminRoute>
        <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
        <AdminRoute
            path="/user/:id/edit"
            component={UserEditScreen}
        ></AdminRoute>
              
        <Route path="/" component={HomeScreen} exact></Route>    
        </main>	      
        <footer className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12 segment-one">
                    <h3>Divinector</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 segment-two">
                    <h2>Divinector</h2>
                    <ul>
                      <li><Link to="/"></Link>Event</li>
                      <li><Link to="/"></Link>Support</li>
                      <li><Link to="/"></Link>Hosting</li>
                      <li><Link to="/"></Link>Carrer</li>
                      <li><Link to="/"></Link>Blog</li>
                    </ul>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12 segment-three">
                    <h2> Follow Us</h2>
                      <p>Segue-nos no Facebbok para estares a par das novidades.</p>
                      <Link to="https://www.facebook.com/Marias-Boutique-1961138343971954"><i className="fa fa-facebook"></i></Link>
                  </div>
                </div>
              </div>
              <p className="footer-bottom-text">Todos os direitos reservados</p>
        </footer>	    	    
      </div>
    </BrowserRouter>            
  )
}

export default App;
