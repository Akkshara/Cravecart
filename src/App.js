//mongodb://localhost:27017
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './screens/Home';
import {BrowserRouter as Router, Routes , Route} from "react-router-dom";
import Login from './screens/Login';
// import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Signup from './screens/Signup.js';
import { AuthProvider } from './AuthContext';
import { CartProvider } from './CartContext.js';
import MyCart from './screens/MyCart.js';
import LoginModal from './screens/LoginModal.js';
import Payment from './screens/Payment.js';
import MyOrders from './screens/MyOrders.js';
// import HeroSection from './components/HeroSection.js';

function App() { 

  return (
    <AuthProvider>
      <CartProvider>
   <Router>
    <div>
      <Routes>
        <Route  exact path='/' element ={<Home/>}/>
        <Route  exact path='/login' element ={<Login/>}/>
        <Route  exact path='/mylogin' element ={<LoginModal/>}/>
        <Route  exact path='/createuser' element ={<Signup/>}/>
        <Route  exact path='/mycart' element ={<MyCart/>}/>
        <Route  exact path='/payment' element ={<Payment/>}/>
        <Route  exact path='/myorders' element ={<MyOrders/>}/>



      </Routes>
    </div>
   </Router>
   </CartProvider>
   </AuthProvider>
  );
}

export default App;
