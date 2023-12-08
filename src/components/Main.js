import React, { useState,useEffect,useCallback } from 'react'
import carlogo from '../assets/car.webp'

const Main = () => {
    const main_style={
        minHeight : '70vh',
    }

    const [vehicles, setVehicles]=useState([]);

    console.log(vehicles);

    const [url,setUrl] =useState("http://localhost:8000/vehicles")


    const fetchVehicles = useCallback(async() => {
        const response = await fetch(url);
        const data = await response.json();
        setVehicles(data);

    },[url]);
    useEffect(() => {
        fetchVehicles();

    },[fetchVehicles]);

  return (
    <section style={main_style}>

        <div className='filter-btns'>
            <button onClick={()=> setUrl("http://localhost:8000/vehicles")}>All Vehicles</button>
            <button onClick={()=> setUrl("http://localhost:8000/vehicles?new=true")}>New Vehicles</button>
            <button onClick={()=> setUrl("http://localhost:8000/vehicles?new=false")}>Used Vehicles</button>
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
