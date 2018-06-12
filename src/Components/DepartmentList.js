import React, { Component } from "react";
const depList = [
  {
    departmentId: 573765368832000,
    name: "苏州慧筑信息科技",
    parentId: 0,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-07 19:44:40"
  },
  {
    departmentId: 574708097400832,
    name: "土建",
    parentId: 573765368832000,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:21:11"
  },
  {
    departmentId: 574708164509696,
    name: "装饰",
    parentId: 573765368832000,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:21:15"
  },
  {
    departmentId: 574708231618560,
    name: "运维",
    parentId: 573765368832000,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:21:19"
  },
  {
    departmentId: 574708315504640,
    name: "测试",
    parentId: 573765368832000,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:21:24"
  },
  {
    departmentId: 574708432945152,
    name: "建模",
    parentId: 573765368832000,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:21:31"
  },
  {
    departmentId: 574708567162880,
    name: "桌面",
    parentId: 573765368832000,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:21:39"
  },
  {
    departmentId: 574708835598336,
    name: "笑嘻嘻",
    parentId: 573765368832000,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 14:43:58"
  },
  {
    departmentId: 574709104033792,
    name: "笑嘻嘻1",
    parentId: 574708835598336,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:22:11"
  },
  {
    departmentId: 574709154365440,
    name: "笑嘻嘻2",
    parentId: 574708835598336,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:22:14"
  },
  {
    departmentId: 574709204697088,
    name: "笑嘻嘻3",
    parentId: 574708835598336,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:22:17"
  },
  {
    departmentId: 574709322137600,
    name: "笑嘻嘻2-1",
    parentId: 574709154365440,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:22:24"
  },
  {
    departmentId: 574709372469248,
    name: "笑嘻嘻2-2",
    parentId: 574709154365440,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:22:27"
  },
  {
    departmentId: 574709422800896,
    name: "笑嘻嘻2-3",
    parentId: 574709154365440,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 11:22:30"
  },
  {
    departmentId: 574919322550272,
    name: "笑嘻嘻4",
    parentId: 574708835598336,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 14:51:01"
  },
  {
    departmentId: 574959252324352,
    name: "嘛麦皮",
    parentId: 574709204697088,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-08 15:30:41"
  },
  {
    departmentId: 577833776803840,
    name: "土建2222",
    parentId: 577833692917760,
    description: "",
    isDeleted: 0,
    created: 0,
    lastmod: "2018-06-10 15:06:17"
  }
];
const Item = ({ item }) => <div>{item.name}</div>;

export default class DepartmentList extends Component {
  render() {
    return (
      <div style={{ width: 400 }}>
        {depList.map(item => <Item item={item} />)}
      </div>
    );
  }
}
