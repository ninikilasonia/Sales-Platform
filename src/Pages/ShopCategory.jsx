import React, { useContext, useState, useMemo } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/Shopcontext';
import Item from '../Components/Item/Item';
import SortDropdown from '../Components/SortDropdown/SortDropdown';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = all_product;

    if (searchInput) {
      filteredProducts = filteredProducts.filter(product => 
        product.name.toLowerCase().includes(searchInput.toLowerCase())
      );
    }

    if (sortOption === 'price-asc') {
      filteredProducts.sort((a, b) => a.new_price - b.new_price);
    } else if (sortOption === 'price-desc') {
      filteredProducts.sort((a, b) => b.new_price - a.new_price);
    }

    return filteredProducts;
  }, [all_product, searchInput, sortOption]);

  return (
    <div className='shop-category'>
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>

        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
          className="shopcategory-search"
        />

        <SortDropdown onSortChange={setSortOption} />
      </div>
      <div className="shopcategory-products">
        {filteredAndSortedProducts.map((item, i) => {
          if (props.category === item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} available={item.available} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export default ShopCategory;
