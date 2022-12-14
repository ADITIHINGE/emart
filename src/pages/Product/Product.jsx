import React from 'react';
import { useState } from 'react';
import './Product.scss';
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import BalanceIcon from "@mui/icons-material/Balance";

const Product = () => {
  const [selectedImg, setSelectedImg]= useState(0)
   const [quantity, setQuantity]= useState(1)

  const images=[
    "https://images.pexels.com/photos/10426491/pexels-photo-10426491.jpeg?auto=compress&cs=tinysrgb&w=1600",
    "https://images.pexels.com/photos/12179283/pexels-photo-12179283.jpeg?auto=compress&cs=tinysrgb&w=1600",
  ];

  return (
    <div className="product">
     <div className="left">
      <div className="images">
        <img src={images[0]} alt="" onClick={e=>setSelectedImg(0)}/>
        <img src={images[1]} alt="" onClick={e=>setSelectedImg(1)}/>
      </div>
      <div className="mainImg">
       <img src={images[selectedImg]} alt=""/>
      </div>
     </div> 
     <div className="right">
      <h1>Title</h1>
      <span className="price">$199</span>
      <p>
        Lorem ipsum dolor, sit amet consectetur, adipiscing elit. Ullam ad
        earum laudantium ,fuga sit minima aut voluptatem obcaecati omnis
        laborum vitae expedita in, est eius perspiciatis maiores. Id, sed 
        voluptas?
      </p>
      <div className="quantity">
      <button onClick={()=>setQuantity((prev) => (prev === 1 ? 1 : prev -1))}>-</button>
       {quantity}
        <button onClick={()=>setQuantity((prev)=>prev + 1)}>+</button>
      </div>
      <button className="add">
       <AddShoppingCartIcon/> ADD TO CART
      </button>
      <div className="link">
        <div className="item">
          <FavoriteBorderIcon style={{cursor:"pointer"}}/> ADD TO WISH LIST
        </div>
        <div className="item">
         <BalanceIcon /> ADD TO COMPARE
        </div>
      </div>
      <div className="info">
        <span>Vendor:polo</span>
        <span>Product type: T-shirt</span>
        <span>Tag: T-Shirt, Women, Top</span>
      </div>
      <hr/>
      <div className="info">
        <span style={{marginTop:"5px",marginBottom:"13px"}}>DESCRIPTION</span>
        <hr/>
        <span style={{marginTop:"-5px",marginBottom:"15px"}} >ADDITIONAL INFORMATION</span>
        <hr/>
        <span style={{marginTop:"-1px"}}>FAQ</span>
      </div>
      </div> 
    </div>
  )
}

export default Product;