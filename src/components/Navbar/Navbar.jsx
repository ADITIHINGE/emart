import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Flag_of_India from './Flag_of_India.png';
// import { Link } from 'react-router-dom';
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className='navbar' >
    <div className='wrapper'>
        <div className='left'>
          <div className='item'><img className="flag" src={Flag_of_India}/>
       <KeyboardArrowDownIcon /></div>  
       <div className='item'>
        <span>India</span><KeyboardArrowDownIcon /></div>
      <div className='item'>
        {/* <Link to="/products/1">women</Link> */}
       <a className='Link'href='/products/1'>Women</a>
      </div>
      <div className='item'>
       <a className='Link'href='/products/2'>Men</a>
      </div>
      <div className='item'>
       <a className='Link'href='/products/3'>Children</a>
      </div>
       </div>  

    <div className='center'>
        <a className='Link'style={{fontWeight: 'bold'}} href='/'>E<span style={{color: 'red'}}>-Shop</span></a>
        </div>  

        <div className='right'>
        <div className='item'><a className='Link'href='/'>Home</a></div>
        <div className='item'><a className='Link' href='/'>About</a></div> 
        <div className='item'><a className='Link'href='/'>Contact</a></div>
        <div className='item'><a className='Link'href='/'>Stores</a></div>
        <div className='icons'>
          <SearchIcon /> <PersonOutlineIcon/>
          <FavoriteBorderIcon /></div>
        <div className='cartIcons'>
            <ShoppingCartCheckoutIcon/><span>0</span></div>
        </div>
        </div>  
    </div>
  )
}

export default Navbar;