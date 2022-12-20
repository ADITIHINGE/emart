import React from 'react';
import './Cart.scss';
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const Cart = () => {

    const data=[
        {
            id: 1,
            img2: "https://images.pexels.com/photos/1972115/pexels-photo-1972115.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img: "https://images.pexels.com/photos/1163194/pexels-photo-1163194.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Long Sleeve Graphic T-Shirt",
           desc:"sjdhfsjhgfsjdbj",
            isNew: true,
            reviews: '4.4⭐' ,
            oldPrice: 800,
            price:500
        },
       
        {
            id: 2,
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            img2:"https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1600",
            title:"Hat",
            desc:"sdhfdhfbsfyu",
            isNew: true,
            reviews: '4.4⭐ ' ,
            oldPrice: 400,
            price:300
        }
    ]
  return (
    <div className="cart">
       <h1>Product in your cart</h1> 
    { data?.map(item=>(
     <div className="item" key={item.id}>
        <img src={item.img} alt="img" />
        <div className="details">
          <h1>{item.title}</h1>
          <p>{item.desc?.substring(0,100)}</p>   
          <div className="price">1 x ${item.price}</div>
        </div>
        <DeleteOutlinedIcon className="delete"/>
     </div>
   ))}
   
    <div className="total">
        <span>Subtotal</span>
        <span>$123</span>
    </div>
    <button>PROCEED TO CHECKOUT</button>
     <span className="reset">Reset Cart</span>
    </div>
  )
}

export default Cart;