import React, { useState,useEffect } from 'react'
import carlogo from '../assets/car.webp'

const Main = () => {
    const main_style={
        minHeight : '70vh',
    }

    const [vehicles, setVehicles]=useState([]);

    console.log(vehicles);

    const url="http://localhost:8000/vehicles"

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setVehicles(data))
    },[]);

  return (
    <section style={main_style}>

        <div>
            <button>All Vehicles</button>
            <button>New Vehicles</button>
            <button>Used Vehicles</button>
        </div>

        {vehicles && vehicles.map((vehicle)=> (
        <div className='product-card' key={vehicle.id}>
            <img src={carlogo} alt="" />
            <div className="product-details">
                <div className="product-title">{vehicle.name}</div>
                <div className="product-description">{vehicle.brand}</div>
                <div className="product-price">{vehicle.year}</div>
                <div> <span className={vehicle.new?"new":"old"}>{vehicle.new?"NEW":"USED"}</span>  </div>
            </div>
        </div>
    )) }
      
    </section>
  )
}

export default Main
