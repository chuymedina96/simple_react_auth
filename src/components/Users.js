import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router';

const styles= {
    textAlign: "center",
    marginTop: "100px"
}

function Users() {
    const history = useHistory()

    if (!sessionStorage.getItem('auth-token')) {
        console.log('no auth token set');
        history.push('/');
    } else {
        const authToken = '123456abcdef';
        if (sessionStorage.getItem('auth-token') === authToken) {
            console.log('good token. Log in.')
        } else {
            console.log('bad token.')
            history.push('/login');
        }
    }
    return (
        <div style={styles}>
            <h1>Users Pages. View all Users below. Auth Required for this page</h1>
        </div>
    );
}


export default Users;