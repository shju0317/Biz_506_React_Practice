import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";

class BbsItem extends Component {
  handleClick = (id) => {
    const { fetchBbs } = this.props;

    if (window.confirm("정말 삭제할까요?")) {
      axios
        .delete(`http://localhost:5000/api/delete/${id}`)
        .then((result) => {
          console.log(result);
          fetchBbs();
        })
        .catch((err) => console.log(err));
    }
  };

  render() {
    const { index, bbs, handleUpdate } = this.props; // parent에서 보내주는 index,bbs 데이터를 받겠다

    return (
      <tr>
        <td>{index + 1}</td>
        <td>{bbs.b_writer}</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{bbs.b_date_time}</Moment>
        </td>
        <td
          onClick={() => handleUpdate(bbs.b_id)}
          style={{ cursor: "pointer" }}
        >
          {bbs.b_subject}
        </td>
        <td
          onClick={() => this.handleClick(bbs.b_id)}
          style={{ cursor: "pointer" }}
        >
          &times;
        </td>
      </tr>
    );
  }
}

export default BbsItem;
