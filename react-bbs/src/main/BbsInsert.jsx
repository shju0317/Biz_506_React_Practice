import React, { Component } from "react";
import "../css/BbsInsert.css";

class BbsInsert extends Component {
  render() {
    return (
      <div className="input-form">
        <input placeholder="작성자" />
        <input placeholder="제목" />
        <input placeholder="내용" />
        <button>저장</button>
      </div>
    );
  }
}

export default BbsInsert;
