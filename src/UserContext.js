import React from 'react';

const {Provider, Consumer} = React.createContext();

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


export {UserProvider, Consumer as  UserConsumer};