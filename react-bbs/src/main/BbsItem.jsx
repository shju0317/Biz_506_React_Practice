import React, { Component } from "react";
import BbsList from "./BbsList";

class BbsItem extends Component {
  render() {
    const { index, bbs } = this.props; // parent에서 보내주는 index,bbs 데이터를 받겠다

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{bbs.b_writer}</td>
        <td>{bbs.b_date_time}</td>
        <td>{bbs.b_subject}</td>
        <td>&times;</td>
      </tr>
    );
  }
}

export default BbsItem;
