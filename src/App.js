import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import Footer from './components/Footer/Footer';
import './App.scss';
import Announcement from './components/Announcement/Announcement';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
     <Announcement/>
     <Navbar/>
     
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
