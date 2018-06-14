import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import iType from "./iTypes";

const squareTarget = {
  drop(props, monitor, component) {
    const item = monitor.getItem();
    const items = component.state.items;
    items.push(item);
    component.setState({ items });
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget()
  };
}

class Space extends Component {
  state = { items: [] };
  render() {
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div
        style={{
          width: 500,
          backgroundColor: isOver
            ? "rgba(150,150,150,0.2)"
            : "rgba(150,150,150,0.5)",
          height: 500
        }}
      >
        {this.state.items.map(item => <h5>{item.name}</h5>)}
      </div>
    );
  }
}
export default DropTarget(iType.DEPARTMENT, squareTarget, collect)(Space);
