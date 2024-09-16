
function Button() {
    let count = 0;

    const handleClick = (e) => e.target.textContent = "wow";

    return(
        <>
            <button onClick={(e) => handleClick(e)}>CLICK ME</button>
        </>
    );
}

export default Button