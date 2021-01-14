import React, {Component} from 'react';

class App extends Component {
  bjr = () => {
    console.log("Bonjour");
  };

  state = {
    nombre: 1
  }
  
  number = (e) => {
    console.log(e.target);
  }

  render(){
    return (
      <div className="App">
        <h1 onMouseOver={this.number}>Exercice 8</h1>
        <button onDoubleClick={this.bjr}>Click On Me</button>
      </div>
    );
  };
};


export default App;