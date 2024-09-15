import userPic from './assets/picture.jpg'

function Card() {
    return(
        <div className="card">
            <img className="card-picture" src= {userPic} alt="user pic" />
            <h2>Username</h2>
            <p>Description here</p>
        </div>
    );
}

export default Card