import React, { Component } from "react";
import BbsItem from "./BbsItem";
import "../css/BbsList.css";

class BbsList extends Component {
  render() {
    const bbsList = [
      { id: 0, b_writer: "홍길동", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 1, b_writer: "이몽룡", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 2, b_writer: "성춘향", b_date: "2020-11-13", b_subject: "게시판" },
    ];
    const bbsItemList = bbsList.map((bbs, index) => {
      return <BbsItem index={index} bbs={bbs} />;
    });

    return (
      <table className="bbs-list">
        <thead>
          <tr>
            <th>No</th>
            <th>작성자</th>
            <th>작성일시</th>
            <th>제목</th>
            <th>&hearts;</th>
          </tr>
        </thead>
        <tbody>{bbsItemList}</tbody>
      </table>
    );
  }
}

export default BbsList;