// import { Badge } from "@material-ui/core";
// import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import './Navbar.scss';

// import { mobile } from "../responsive";

// const Container = styled.div`
//   height: 60px;
//   ${mobile({ height: "50px" })}
// `;

// const Wrapper = styled.div`
//   padding: 10px 20px;
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   ${mobile({ padding: "10px 0px" })}
// `;

// const Left = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
// `;

// const Language = styled.span`
//   font-size: 14px;
//   cursor: pointer;
//   ${mobile({ display: "none" })}
// `;

// const SearchContainer = styled.div`
//   border: 0.5px solid lightgray;
//   display: flex;
//   align-items: center;
//   margin-left: 25px;
//   padding: 5px;
// `;

// const Input = styled.input`
//   border: none;
//   ${mobile({ width: "50px" })}
// `;

// const Center = styled.div`
//   flex: 1;
//   text-align: center;
// `;

// const Logo = styled.h1`
//   font-weight: bold;
//   ${mobile({ fontSize: "24px" })}
// `;
// const Right = styled.div`
//   flex: 1;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
//   ${mobile({ flex: 2, justifyContent: "center" })}
// `;

// const MenuItem = styled.div`
//   font-size: 14px;
//   cursor: pointer;
//   margin-left: 25px;
//   ${mobile({ fontSize: "12px", marginLeft: "10px" })}
// `;





const Navbar = () => {
  return (
    <div className='navbar' >
      <div className='wrapper'>
            <div className='left'>
          <span className='language'>IN</span>
          <div className='searchContainer'>
            <input className='input' style={{border:0.1,height:25, width: 120, paddingTop:-500,fontSize: 16}} placeholder="Search"/>
            <SearchIcon style={{color:"gray",fontSize: 18,marginLeft:-20}} />
          </div>
        </div>
        <div className='center'>
          <a className='logo'style={{fontWeight: 'bold'}} href='/'>Fashion-<span style={{color: 'red'}}>Clues</span></a>
        </div>
        <div className='right'>
          <div><a  className='menuItems' href='/'>Register</a></div>
          <div ><a  className='menuItems' href='/'>SignIn</a></div>
          <div className='cartIcons'>
              <ShoppingCartOutlinedIcon  /><span>{0}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;







// import React from 'react';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import SearchIcon from '@mui/icons-material/Search';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
// // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
// import Flag_of_India from './Flag_of_India.png';
// // import { NavLink } from 'react-router-dom';
// import "./Navbar.scss";

// const Navbar = () => {
//   return (
//     <div className='navbar' >
//     <div className='wrapper'>
//         <div className='left'>
//           <div className='item'><img className="flag" src={Flag_of_India}/>
//        <KeyboardArrowDownIcon /></div>  
//        <div className='item'>
//        <SearchIcon /> 
//         <span>India</span><KeyboardArrowDownIcon /></div>
//       <div className='item'>
  
//        </div>  

//     <div className='center'>
//         <a className='Link'style={{fontWeight: 'bold'}} href='/'>Fashion-<span style={{color: 'red'}}>Clues</span></a>
//         </div>  

//         <div className='right'>
//         <div className='item'><a className='Link'href='/'>Home</a></div>
//         <div className='item'><a className='Link' href='/'>About</a></div> 
//         <div className='item'><a className='Link'href='/'>Contact</a></div>
//         <div className='item'><a className='Link'href='/'>Register</a></div>
//         <div className='item'><a className='Link'href='/'>Login</a></div>
//         <div className='icons'>
         
//           <PersonOutlineIcon /> 
//            {/* <FavoriteBorderIcon />  */}
//           </div>
//         <div className='cartIcons'>
//             <ShoppingCartCheckoutIcon/><span>0</span></div>
//         </div>
//         </div>  
//     </div>
//     </div>
//   )
// }

// export default Navbar;