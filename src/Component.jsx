import React, {useState, useEffect}  from "react";

function Component() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        console.log("event listener added")

        return() => {
            window.removeEventListener("resize", handleResize);
            console.log("event listener removed");
        }
    }, [])

    useEffect(() => {
        document.title = `size: ${width} x ${height}`;
    }, [width, height])

    function handleResize() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }


    return(<>
        <p>windoe width: {width}</p>
        <p>windoe hieght: {height}</p>
    </>);
}

export default Component