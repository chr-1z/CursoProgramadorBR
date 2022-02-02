import React from 'react';

class Counter extends React.Component {

    // 1° método do ciclo de vida - construtor
    constructor(props) {
        super(props);

        this.state = { count: this.props.count};
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
    }

    add() {
        // this.setState( { count: this.state.count + 1 } ); //maneira errada, pois pode bugar o valor de state e não mostrar o valor real na tela
        // this.setState((state) => {return { count: this.state.count + 1 }});
        
        // ver se altera no console via callback
        this.setState((state) => { return { count: state.count + 1 }}, () => {
            console.log(this.state);
            localStorage.setItem("state", JSON.stringify(this.state));
        });

    }

    remove() {
        // this.setState( { count: this.state.count - 1 } ); //maneira errada, pois pode bugar o valor de state e não mostrar o valor real na tela
        this.setState((state) => {return { count: this.state.count - 1 }});

    }

    shouldComponentUpdate() {
        return true;
    }

    // é executado depois que o componente for mostrado na tela 
    componentDidMount() {
        
    }

    // por exemplo um todo list - quando um componente vai sair da tela
    componentWillUnmount() {

    }

    render() {
        return (
            <div>
                <h1>Counter: {this.state.count} </h1>
                <button onClick={this.add} className="botaoAdd"> Add </button>
                {" "}
                <button onClick={this.remove} className="botaoRem"> Remove </button>
            </div>
        );
    }

}

export default Counter;