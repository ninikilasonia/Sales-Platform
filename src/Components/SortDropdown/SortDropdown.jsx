import React, { useState } from 'react';
import './SortDropdown.css';

const SortDropdown = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSortChange = (sortOption) => {
    onSortChange(sortOption);
    setIsOpen(false);
  };

  return (
    <div className="sort-dropdown-container">
      <button className="sort-button" onClick={() => setIsOpen(!isOpen)}>
        Sort by
      </button>
      {isOpen && (
        <div className="sort-dropdown">
          <button onClick={() => handleSortChange('price-asc')}>Price: Low to High</button>
          <button onClick={() => handleSortChange('price-desc')}>Price: High to Low</button>
        </div>
      )}
    </div>
  );
};

export default SortDropdown;
