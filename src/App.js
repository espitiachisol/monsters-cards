import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
//using function
// function App() {
//   //這是呈現在網站上的畫面
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>React is so cooollllllllllllllllll</p>
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
//inside class
// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       string: "Hello SOl",
//     };
//   }
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>{this.state.string}</p>
//           <button onClick={() => this.setState({ string: "hello react" })}>
//             Change Text
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    this.searchMonsterChange = this.searchMonsterChange.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  searchMonsterChange(e) {
    this.setState({ searchField: e.target.value });
    //TypeError: Cannot read property 'setState' of undefined
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonsters);

    return (
      <div className="App">
        <h1>MONSTERS ROLODEX</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.searchMonsterChange}
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
