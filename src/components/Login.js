import React, { useState } from "react";
import { useHistory } from 'react-router';

function Login() {
    const [emailInput, setEmailInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');
    
    const history = useHistory();
    
    const handlePasswordChange = (e) => {
        setPasswordInput(e.target.value);
    }
    
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        let hardcodedCred = {
            password: 'password'
        }
    
        if (passwordInput === hardcodedCred.password) {
            //combination is good. Log them in.
            //this token can be anything. You can use random.org to generate a random string;
            const token = '123456abcdef';
            sessionStorage.setItem('auth-token', token);
            //go to /users route which required auth to access
            history.push('/users');
        } else {
            //bad combination
            alert('wrong email or password combination');
        }
    }
    
    return (
        <div className="login-page">
            <h2>Login In</h2>
            <form autoComplete="off" onSubmit={handleLoginSubmit}>
                <div className="form-group">
                    <input
                    type="password"
                    autoComplete="new-password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={passwordInput}
                    onChange={handlePasswordChange}
                    />
                </div>
                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
        </div>
    );
}

export default Login;