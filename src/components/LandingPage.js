import React, { Component } from 'react'

const styles= {
    textAlign: "center",
    marginTop: "100px"
}

class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div style={styles}>
                <h2>Welcome to the landing page</h2>
            </div>
        );
    }
}

export default LandingPage;