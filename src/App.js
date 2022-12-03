import './App.css';
import { BrowserRouter, Routes, Route,Outlet,Link } from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.scss';

// const Layout = () =>{
//   return(
//     <div className="app">
//       <Navbar />
//       <Outlet/>
//       <Footer/>
//     </div>
//   )
// }

function App() {
  return (
    <div className="App">
        <Navbar />
        <BrowserRouter>
      <Routes>
      <Route path="/" element=<Home/> />
          <Route path="/Products" element=<Products/> />
          <Route path="/Product" element=<Product/> />
          <Route path="*" element={<h1>404 Page not found</h1>} />
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
