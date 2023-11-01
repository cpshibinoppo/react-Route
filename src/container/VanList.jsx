import React, { useEffect, useState } from 'react'

function VanList() {
    const [vans, setVans] = useState([]);
    useEffect(()=>{
        fetch("/api/vans")
        .then(res => res.json())
        .then(data => setVans(data.vans))
    },[]);
    
    const vansElement = vans.map(van => (
        <div key={van.id} className="van-tile">
        <img src={van.imageUrl} />
        <div className="van-info">
            <h3>{van.name}</h3>
            <p>${van.price}<span>/day</span></p>
        </div>
        <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
    ))
  return (
    <div>
        {vansElement}
    </div>
  )
}

export default VanList