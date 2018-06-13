import React, { Component } from "react";
import { DragSource } from "react-dnd";
import iType from "./iTypes";

class Item extends Component {
  state = { isHover: false };
  render() {
    const {
      item,
      connectDragSource,
      connectDragPreview,
      isDragging
    } = this.props;
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
        //   onPointerOver={this.onEnter}
        //   onPointerLeave={this.onLeave}
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
    return {
      item: props.item,
      compo: compo
    };
  },
  endDrag(props, monitor, compo) {
    return {
      item: props.item,
      compo: compo,
      fucker: true
    };
  }
};

function collect(connect, monitor) {
  return {
    isDragging: monitor.isDragging(),
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview()
  };
}

export default DragSource(iType.DEPARTMENT, departmentSource, collect)(Item);
