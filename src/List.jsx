
function List() {
    const fruits = [
        {id: 1, name:'apple', calories: 95}, 
        {id:2, name:'orange', calories:44}, 
        {id:3, name:'banana', calories:110}
    ];

    // fruits.sort((a, b) => a.name.localeCompare(b.name)); //for reverse just swap a and b
    // fruits.sort((a,b) => a.calories - b.calories);

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100)

    const listItems = fruits.map(fruit => <li key={fruit.id}>
         {fruit.name}: &nbsp;
         <b>{fruit.calories}</b>
         </li>);

    return(
        <ol>{listItems}</ol>
    );
}

export default List