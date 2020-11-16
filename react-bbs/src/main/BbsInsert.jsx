import React, { Component } from "react";
import "../css/BbsInsert.css";
import axios from "axios";

class BbsInsert extends Component {
  constructor(props) {
    super(props);
    this.state = props.bbsData;
  }

  state = {
    b_writer: "",
    b_subject: "",
    b_content: "",
    isUpdate: false,
    b_id: 0,
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  bbsSave = () => {
    const { insertURL, updateURL } = this.props;
    const url = this.state.isUpdate ? updateURL : insertURL;
    axios
      .post(url, {
        b_id: this.state.b_id,
        b_writer: this.state.b_writer,
        b_subject: this.state.b_subject,
        b_content: this.state.b_content,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  render() {
    if (this.props.bbsData.isUpdate) {
      this.state = this.props.bbsData;
      console.log("update");
    }

    const { b_writer, b_subject, b_content } = this.state;

    return (
      <div className="input-form">
        <input
          name="b_writer"
          value={b_writer}
          onChange={this.handleOnChange}
          placeholder="작성자"
        />
        <input
          name="b_subject"
          value={b_subject}
          onChange={this.handleOnChange}
          placeholder="제목"
        />
        <input
          name="b_content"
          value={b_content}
          onChange={this.handleOnChange}
          placeholder="내용"
        />
        <button onClick={this.bbsInsert}>저장</button>
      </div>
    );
  }
}

export default BbsInsert;
