import React from 'react'
import Popular from '../Components/Popular/Popular';
import './CSS/Shop.css'

export const Shop = () => {
  return (
    <div>
      <h1 className='welcome'>Welcome to Our Shop</h1>
      <p className='par'>Discover a wide range of Cosplay costumes and props tailored to your needs. Use the search bar and filters to find exactly what you're looking for.</p>
      <Popular />
    </div>
  )
}

export default Shop