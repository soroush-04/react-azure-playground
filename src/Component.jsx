import React, {useState} from "react"

function Component() {
    const [car, setCar] = useState(
        {year:2024, 
        make:'Ford', 
        model:'Mustang'});
    
    function handleYearChange() {
        setCar(c => ({...c, year: event.target.value}))
    }

    function handleModelChange() {
        setCar(c => ({...c, model: event.target.value}))
    }

    function handleMakeChange() {
        setCar(c => ({...c, make: event.target.value}))
    }
        
    return(
    <div>
        <p>Your car is {car.year}, {car.model}, {car.make}</p>

        <input type="number" value={car.year} onChange={handleYearChange}/><br />
        <input type="text" value={car.model} onChange={handleModelChange}/><br />
        <input type="text" value={car.make} onChange={handleMakeChange}/><br />
    </div>
    );
}

export default Component