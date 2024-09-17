import React, {useState} from "react"

function Component() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(prevCount => prevCount+1);
        setCount(prevCount => prevCount+1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>decrement</button>
            <button className="counter-button" onClick={increment}>increment</button>
            <button className="counter-button" onClick={reset}>reset</button>
        </div>
    );
}

export default Component