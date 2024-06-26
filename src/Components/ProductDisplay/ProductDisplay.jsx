import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/Shopcontext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart, productAvailability } = useContext(ShopContext);

  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-image">
          <img className='productdisplay-main-img' src={product.image} alt='' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-new">
            ${product.new_price}
          </div>
        </div>
        <div className="product_available">
          available: {productAvailability[product.id]}
        </div>
        <button
          onClick={() => { addToCart(product.id) }}
          disabled={productAvailability[product.id] === 0}
        >
          {productAvailability[product.id] === 0 ? 'Out of Stock' : 'Add To Cart'}
        </button>
      </div>
    </div>
  );
}

export default ProductDisplay;
