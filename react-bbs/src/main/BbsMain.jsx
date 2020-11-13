import React, { Component } from "react";
import BbsInsert from "./BbsInsert";
import BbsList from "./BbsList";

class BbsMain extends Component {
  render() {
    return (
      <div>
        <BbsInsert />
        <BbsList />
      </div>
    );
  }
}

export default BbsMain;
