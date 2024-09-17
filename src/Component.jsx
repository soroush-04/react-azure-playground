import React, {useState} from "react"

function Component() {
    const [foods, setFoods] = useState(["pizza", "chips", "sushi"]);

    function handleAddFood() {
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods(f => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        setFoods(foods.filter((_, i) => i !== index))
    }

    return(
    <div>
        <h2>list of food</h2>
        <ol>
            {foods.map((food, index) => 
            <li key={index} onClick={() => handleRemoveFood(index)}> 
            {food} 
            </li>)}
        </ol>
        <input type="text" id="foodInput" placeholder="type here"/>
        <button onClick={handleAddFood}>add food</button>
    </div>
    );
}

export default Component