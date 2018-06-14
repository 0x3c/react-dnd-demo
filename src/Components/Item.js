import React, { Component } from "react";
import { DragSource } from "react-dnd";
import iType from "./iTypes";

class Item extends Component {
  state = { isHover: false };
  render() {
    const { item, connectDragSource } = this.props;
    const { isHover } = this.state;

    return connectDragSource(
      <div
        style={
          isHover
            ? {
                backgroundColor: "lightblue",
                padding: 10,
                cursor: "-webkit-grab"
              }
            : { padding: 10 }
        }
        onPointerOver={this.onEnter}
        onPointerLeave={this.onLeave}
      >
        {item.name}
      </div>
    );
  }
  onEnter = _ => {
    this.setState({
      isHover: true
    });
  };
  onLeave = _ => {
    this.setState({
      isHover: false
    });
  };
}

const departmentSource = {
  beginDrag(props, monitor, compo) {
    return props.item;
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource()
  };
}

export default DragSource(iType.DEPARTMENT, departmentSource, collect)(Item);
