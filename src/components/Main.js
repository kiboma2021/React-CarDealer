import React, { useState } from 'react'

const Main = () => {
    const main_style={
        minHeight : '70vh',
    }

    const [url, setUrl]=useState("http://localhost:8000/vehicles/")

  return (
    <section style={main_style}>
        {url}
        {url.map(vehicle=> (
            <div>
                <span>{vehicle.name}</span>
            </div>
        )) }



      
    </section>
  )
}

export default Main
