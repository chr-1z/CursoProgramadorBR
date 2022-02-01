import React from 'react';

class Counter extends React.Component {

    constructor(props) {
        super(props);

        this.state = { count: this.props.count};
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add() {
        //this.setState( { count: this.state.count + 1 } ); //maneira errada, pois pode bugar o valor de state e não mostrar o valor real na tela
        this.setState((state) => {return { count: this.state.count + 1 }});

    }

    remove() {
        //this.setState( { count: this.state.count - 1 } ); //maneira errada, pois pode bugar o valor de state e não mostrar o valor real na tela
        this.setState((state) => {return { count: this.state.count - 1 }});

    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.add}> Add </button>
                {" "}
                <button onClick={this.remove}> Remove </button>
            </div>
        );
    }

}

export default Counter;