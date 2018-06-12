import React, { Component } from "react";
import "./App.css";
import DepartmentList from "./Components/DepartmentList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class={{ display: "flex" }}>
          <DepartmentList />
        </div>
      </div>
    );
  }
}

export default App;
