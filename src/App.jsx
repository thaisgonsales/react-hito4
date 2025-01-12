import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from "./components/Navbar";
/*import Register from "./components/Register"*/
/*import Login from "./components/Login"*/
/*import Home from './components/Home';*/
import Cart from './components/Cart';
import Footer from "./components/Footer";


const App = () => {
  return (
    <div>
      <Navbar />
      {/*<Home />*/}
      {/* <Register /> */}
      {/*<Login />*/}
      <Cart />
      <Footer />
    </div>
  );
};

export default App;
