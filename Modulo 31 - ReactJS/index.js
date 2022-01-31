const root = document.querySelector("#root");

t1 = React.createElement("h1", {id:"Título principal"}, "Hello World!");
t2 = React.createElement("h4", {id:"Título complementar"}, "Hello World!");

const headline = React.createElement("div", null, t1, t2);

ReactDOM.render(headline, root);