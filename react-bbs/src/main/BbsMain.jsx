import React, { Component } from "react";
import BbsInsert from "./BbsInsert";
import BbsList from "./BbsList";

const BBS_INSERT_URL = "http://localhost:5000/api/insert";
const BBS_FETCH_URL = "http://localhost:5000/api/bbsList";

class BbsMain extends Component {
  timer = "";

  state = {
    state1: "",
    state2: "",
    bbsList: [
      { id: 0, b_writer: "홍길동", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 1, b_writer: "이몽룡", b_date: "2020-11-13", b_subject: "게시판" },
      { id: 2, b_writer: "성춘향", b_date: "2020-11-13", b_subject: "게시판" },
    ],
  };

  componentDidMount() {
    this.fetchBbsList();

    // setInterval(callback, time)
    // 최초의 callback함수가 실행되고 이후에 time만큼 시간이 지난 후
    // 또 callback 함수를 계속해서 실행하라
    // 5초에 한번씩 서버의 데이터를 가져와라
    this.timer = setInterval(() => this.fetchBbsList(), 5000);
  }

  // react에서 setInterval()을 사용하여 어떤 함수를 실행하면
  // 반드시 WillUnmount() 메서드에서
  // react가 종료되기 전에 timer를 제거해주어야 한다.
  componentWillUnmount() {
    this.timer = null;
  }

  // JS에 표준으로 내장된 ajax method
  fetchBbsList = () => {
    this.setState({ ...this.state, isFetch: true });
    fetch(BBS_FETCH_URL)
      .then((res) => {
        // response 객체가 통째로 수신된 상태
        // response 객체 중에서 body 부분만 JSON으로 변환하여 return
        return res.json();
      })
      .then((result) => {
        // 앞의 then()에서 return한 데이터를 result변수에 받고
        // bbsList에 데이터를 적용
        this.setState({
          bbsList: result,
          isFetch: false,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { bbsList, state1, state2 } = this.state;

    return (
      <div>
        <BbsInsert insertURL={BBS_INSERT_URL} />
        <p>{this.state.isFetch ? "데이터 가져오는중..." : "완료!"}</p>
        <BbsList bbsList={bbsList} state1={state1} state2={state2} />
      </div>
    );
  }
}

export default BbsMain;
