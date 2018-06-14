# react-dnd labs

## 流程

拖拽元素 : Drag Source  
目标元素 : Drop Target
DragSource 和 DropTarget 分别需要 `connect.dragSource()` 、`connect.dropTarget()`包裹才能拖拽。
两种元素父元素需 `DragDropContext(HTML5Backend)` 包裹。

DragSource beginDrag 返回值 --传递--> DropTarget drop(若 拖拽元素释放在 dropTarget 上回触发 drop) ---处理传来的值(component.setState)-->DragTarget
