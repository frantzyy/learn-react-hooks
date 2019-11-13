import React from 'react';

// allows us to export the full UserContext as well as each idividual component.
// https://egghead.io/lessons/react-use-the-usecontext-hook-to-consume-context-in-function-components
let UserContext;
const {Provider, Consumer} = UserContext = React.createContext();

// const [currentUser, setCurrentUser] = useState("chris");



class UserProvider extends React.Component {
    state = {
        currentUser : 'joe'
    }

    handleLogin = user => {
        this.setState({current: user});
    }

    handleLogout = user => {
        this.setState({currentUser: null});
    }

    render() {
        return (
            <Provider value={{
                user : this.state.currentUser
            }}>
                {this.props.children}
            </Provider>
        )
    }
}


export {UserProvider, Consumer as  UserConsumer, UserContext};