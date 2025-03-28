import React from 'react'

class Home extends React.Component {

    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
                <h1>Welcome to the Home Page!</h1>
                <p>This is the default home page.</p>
            </div>
        )
    }
}

export default Home