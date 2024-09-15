
import List from "./List";

function App() {
    const fruits = [
        {id: 1, name:'apple', calories: '200'}, 
        {id:2, name:'orange', calories:44}, 
        {id:3, name:'banana', calories:110}
    ];

    const veggies = [
        {id:4, name:'potatp', calories: 232}, 
        {id:5, name:'corn', calories:32}, 
        {id:6, name:'carrot', calories:10}
    ];

    return(
        <>
            {fruits.length > 0 ? <List items={fruits} category="Fruits"/> : null}
            {veggies.length > 0 && <List items={veggies} category="Veggies"/>}
        </>
    );
}

export default App