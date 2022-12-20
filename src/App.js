import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Products from "./pages/Products/Products";
import './App.scss';
import Announcement from './components/Announcement/Announcement'

const Layout = () => {
  return (
    <div className="app">
      <Announcement />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
    
  );
}

export default App;
// import { BrowserRouter, Routes, Route,Outlet } from "react-router-dom";
// import Home from './pages/Home/Home';
// import Products from './pages/Products/Products';
// import Product from './pages/Product/Product';
// import Footer from './components/Footer/Footer';
// import './App.scss';
// import Announcement from './components/Announcement/Announcement';
// import Navbar from './components/Navbar/Navbar';


// function App() {
//   return (
//     <div className="App">
//      <Announcement/>
//      <Navbar/>
     
//         <BrowserRouter>
//       <Routes>
//       <Route path="/" element=<Home/> />
//           <Route path="./pages/Products/Products.jsx" element=<Products/> />
//           <Route path="./pages/Product/Product.jsx" element=<Product/> />
//           <Route path="*" element={<h1>404 Page not found</h1>} />
//       </Routes>
//     </BrowserRouter>
//     <Footer/>
//     </div>
//   );
// }

// export default App;
