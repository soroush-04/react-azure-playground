import Student from "./Student.jsx"

function App() {
    return(
        <>
            <Student name="sam" age= {30} isStudent= {true} ></Student>
            <Student name="Sara" age={25} isStudent= {false} />
            <Student/>

        </>
    );
}

export default App