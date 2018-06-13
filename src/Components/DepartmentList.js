import React, { Component } from "react";
import departmentList from "../mock/data";
import Item from "./Item";

export default class DepartmentList extends Component {
  render() {
    return (
      <div
        style={{
          width: 400,
          height: 500,
          overflow: "auto",
          backgroundColor: "rgba(210,150,102,0.5)"
        }}
      >
        {departmentList.map(item => (
          <Item key={item.departmentId} item={item} />
        ))}
      </div>
    );
  }
}
