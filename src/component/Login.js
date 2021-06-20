import React from 'react';
import LoginService from '../services/login-service';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            username : '',
            password : ''
        }
    }

    //instance level methods
    handleSubmit = (e) => {
        e.preventDefault(); //stop the default behaviour of form submit
        //write logic to interact with REST API to submit form data
        console.log('Login Component state ', this.state);
        
        //invoking a rest api
        LoginService.login({
            username: this.state.username,
            password: this.state.password
        })
            .then( response => {
                console.log(' ****** Login Success ****', response.data);
                this.props.loginEvent(response.data.token);
            })
            .catch((error) => {
                console.log(" ***** Login failured *****");
            });

        
    }

    updateState = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    render() {
        return(
            
            <div className = "container">
                <h1>Sign-In</h1>
                <form onSubmit = { this.handleSubmit }>
                   <div className = "row">
                        <label>
                        <p>Username</p>
                        <input type = "text" 
                        name = 'username'
                        onChange = { this.updateState }
                        value = {this.state.username }
                        />
                        </label>
                    </div>
                    <div className = "row">
                            <label>
                                <p>Password</p>
                                <input type = "password"
                                name = 'password'
                                onChange = { this.updateState }
                                value = {this.state.password }/>
                            </label>
                    </div>
                    
                    <div>
                        <button className = "btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
        );

    }
}

export default Login;