import React, { useState,useEffect } from 'react'
import carImage from '../assets/car.webp'

const Main = () => {
    const main_style={
        minHeight : '70vh',
    }

    const [vehicles, setVehicles]=useState([]);

    const url="http://localhost:8000/vehicles/"

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setVehicles(data))
    },[]);

  return (
    <section style={main_style}>
            {vehicles.map(vehicle=> (
            <div className='product-card' key={vehicle.id}>
                <img src={carImage} alt="Product Image" />
                <div class="product-details">
                    <div class="product-title">{vehicle.name}</div>
                    <div class="product-description">{vehicle.brand}</div>
                    <div class="product-price">{vehicle.year}</div>
                </div>
            </div>
        )) }



      
    </section>
  )
}

export default Main
