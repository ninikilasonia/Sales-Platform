import React, { useState, useMemo } from 'react';
import './Popular.css';
import data_product from '../Assets/all_product';
import Item from '../Item/Item';
import SortDropdown from '../SortDropdown/SortDropdown';

const Popular = () => {
  const [searchInput, setSearchInput] = useState('');
  const [sortOption, setSortOption] = useState('');

  const filteredAndSortedProducts = useMemo(() => {
    let filteredProducts = data_product;

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
  }, [searchInput, sortOption]);

  return (
    <div className='popular '>
      <h1>Products</h1>
      <hr/>
      <div className="popular-indexSort">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchInput} 
          onChange={(e) => setSearchInput(e.target.value)} 
          className="popular-search"
        />
        <SortDropdown onSortChange={setSortOption} />
      </div>
      <div className="popular-item">
        {filteredAndSortedProducts && filteredAndSortedProducts.length > 0 ? (
          filteredAndSortedProducts.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              available = {item.available}            
            />
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default Popular;
