import React, {Component} from 'react';

class App extends Component {
  bjr = () => {
    console.log("Bonjour");
  };
  
  render(){
    return (
      <div className="App">
        <h1>Exercice 8</h1>
        <button onDoubleClick={this.bjr}>Click On Me</button>
      </div>
    );
  };
};


export default App;