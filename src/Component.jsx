import React, {useState, useEffect}  from "react";

function Component() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState('Green');

    useEffect(() => {
        document.title = `count ${count} ${color}`;
    }, [count]);

    function addCount() {
        setCount(c => c+1);
    }

    function subtractCount() {
        setCount(c => c-1);
    }

    function changeColor() {
        setColor(c => c === "Green" ? "Red" : "Green");
    }

    return(<>
        <p style={{color: color}}>Count: {count}</p>
        <button onClick={addCount}>Add</button>
        <button onClick={subtractCount}>Subtract</button>
        <br />
        <button onClick={changeColor}>change color</button>
    </>);
}

export default Component