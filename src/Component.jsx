
import React, {useState, useEffect, useRef} from "react";

function Component() {
    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);

    useEffect(() => {
        console.log("component rendered")
        console.log(inputRef1);
    });

    function handleClick1() {
        inputRef1.current.focus();
        inputRef1.current.style.backgroundColor = 'grey';
        inputRef2.current.style.backgroundColor = '';
        inputRef3.current.style.backgroundColor = '';
    }

    function handleClick2() {
        inputRef2.current.focus();
        inputRef2.current.style.backgroundColor = 'grey';
    }

    function handleClick3() {
        inputRef3.current.focus();
        inputRef3.current.style.backgroundColor = 'grey';
    }

    return(
        <div>
            <button onClick={handleClick1}>
                click me
            </button>
            <input ref={inputRef1}/>

            <button onClick={handleClick2}>
                click me 2
            </button>
            <input ref={inputRef2}/>

            <button onClick={handleClick3}>
                click me 3
            </button>
            <input ref={inputRef3}/>
        </div>
    );
}

export default Component