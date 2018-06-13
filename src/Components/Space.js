import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import iType from "./iTypes";

const squareTarget = {
  drop(props, monitor, component) {
    // if (monitor.didDrop()) {
    //   console.log("dropped");
    //   const item = monitor.getItem();
    //   console.log(props);
    //   console.log(item);
    //   component.setState({ name: "fucker" });
    //   return {
    //     item: item
    //   };
    // }
    return {
      data: monitor.getItem()
    };
  },
  hover(props) {
    return { gender: "hover" };
  },
  canDrop(props) {
    return { age: 18 };
  }
};

function collect(connect, monitor) {
  return {
    isOver: monitor.isOver(),
    connectDropTarget: connect.dropTarget(),
    data: monitor.getItem()
  };
}

class Space extends Component {
  render() {
    const { connectDropTarget, isOver } = this.props;
    console.log(this.props);
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
        Space
      </div>
    );
  }
}
export default DropTarget(iType.DEPARTMENT, squareTarget, collect)(Space);
