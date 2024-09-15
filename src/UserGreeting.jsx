
import PropTypes from 'prop-types'

function UserGreeting(props) {
    const welcomeMessgae = <h2 className="welcome-message">wlecome {props.username} </h2>
    const loginPrompt = <h2 className="login-prompt">sign in {props.username}</h2> 


    return(props.isLoggedIn ? welcomeMessgae : loginPrompt);
}

UserGreeting.prototype = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: true,
    username: 'Username0'
}
export default UserGreeting