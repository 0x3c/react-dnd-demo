import React, { Component } from "react";
import "./App.css";
import DepartmentList from "./Components/DepartmentList";
import Space from "./Components/Space";
import { DragDropContext } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ display: "flex", justifyContent: "flex-start" }}>
          <DepartmentList />
          <Space />
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
