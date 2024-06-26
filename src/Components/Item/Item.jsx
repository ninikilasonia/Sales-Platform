import React, { useContext } from 'react';
import './Item.css';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/Shopcontext';

const Item = (props) => {
  const { productAvailability } = useContext(ShopContext);

  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={props.image} alt='' /></Link>
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
          ${props.new_price}
        </div>
        <div className="available">available: {productAvailability[props.id]}</div>
      </div>
    </div>
  );
}

export default Item;
