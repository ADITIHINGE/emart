import React from 'react';
import { Link } from 'react-router-dom';
import'./Card.scss';

const Card = ({item}) => {
  console.log(item);
  return (
   
    <Link className="link"to={`/product/${item.id}`}>
     <div className="card">
     <div className="image">
        {item.isNew &&<span>New Season</span>}
        <img src={item.img} alt="image" className="mainImg"/>
        <img src={item.img2} alt="image" className="secondImg"/>
        </div>
        <h2>{item.title}</h2>

        <div className="prices">
        <h3>${item.oldPrice}</h3> 
            <h3>${item.price}</h3>
        </div>
        <p>{item.reviews}</p>
    </div>
   
    </Link>
  );
};

export default Card;