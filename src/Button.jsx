
function Button() {
    const styles = {
            backgroundColor: "hsl(200, 100%, 50%)",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
    }
    
    return(
        <button style = {styles} >click me</button>
    );
}

export default Button