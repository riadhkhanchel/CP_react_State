//import logo from './logo.svg';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       fullName:"",
       bio :"",
       imgSrc:"",
       profession:"",
       show:"False",
       timerIDs:0,
    }
  }

  handlebio = () => {
    this.setState({
      fullName:"Riadh Khanchel",
      bio :"This is a small biography about me",
      profession :"Professor of Quantitative methods",
      show:"True",

    })
  }

  componentDidMount() {
    console.log("componentDidMount")
  }
  componentDidUpdate () {
    console.log("componentDidUpdate")
 
  }
  
  
  render() {
    return <div className="App">
      <h1>welcome to my web Page</h1>
      name: {this.state.fullName}<br/>

      bio :{this.state.bio} <br/>

      profession: {this.state.profession}<br/>

      {this.timerID}<br/>
      <p><button onClick={(show) => this.handlebio}>  Toggle </button></p>
      

       

      </div>;
  }
}

export default App;
