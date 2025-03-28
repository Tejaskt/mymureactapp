import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props)
        {/*props is use to pass the data from one component to another components*/}
        this.state = { counter: 0 }
    }

    incr() {
        if (this.state.counter >= 5) {
            this.setState({ msg: "Sorry > 5" })
            
        } else {
            this.setState({ counter: this.state.counter + 1, msg: '' })
        }

    }


    decr() {
        if (this.state.counter <= 0) {
            this.setState({ msg: "Sorry < 0" })
        } else {
            this.setState({ counter: this.state.counter - 1, msg: '' })
        }
    }

    render() {
        return (
            <>
                <h1> Counter</h1>
                Value is {this.state.counter}
                <br />
                <input type="button" value="+"
                    onClick={this.incr.bind(this)} 
                    disabled={this.state.counter>=5}
                    />

                <input type="button" value="-"
                    onClick={this.decr.bind(this)}
                    disabled={this.state.counter<=0} />

                <input type='button' value="X" onClick={() => this.setState({ counter: 0 })} />
                <p style={{ color: 'red' }}>{this.state.msg}</p>
            </>
        )
    }
}

export default Counter