import React, { Component } from 'react';

import Logo from '../../assets/logo.png';
import User1 from '../../assets/user1.jpg';
import User2 from '../../assets/user2.jpg';
import User3 from '../../assets/user3.jpg';
import User4 from '../../assets/user4.jpg';
import AddUser from '../../assets/add-user.png';

import { Container } from './styles';

class User extends Component {
    render() {
        return (
            <Container>
                <header>
                    <img src={Logo} alt="logo" />
                </header>

                <div className="user-content">
                    <h1>Who's watching?</h1>

                    <ul>
                        <li>
                            <img className="userAvatar" src={User1} alt="user" />
                            <span>User</span>
                        </li>
                        <li>
                            <img className="userAvatar" src={User2} alt="user" />
                            <span>User</span>
                        </li>
                        <li>
                            <img className="userAvatar" src={User3} alt="user" />
                            <span>User</span>
                        </li>
                        <li>
                            <img className="userAvatar" src={User4} alt="user" />
                            <span>User</span>
                        </li>
                        <li>
                            <img className="AddUser" src={AddUser} alt="user" />
                            <span>Add Profile</span>
                        </li>
                    </ul>

                    <button>Manage Profiles</button>
                </div>

            </Container>
        )
    }
}

export default User;
