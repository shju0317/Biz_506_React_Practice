import React, { Component } from "react";
import BucketInsert from "./BucketInsert";
import BucketList from "./BucketList";

class BucketMain extends Component {
  /* id 변수는
  state가 아닌 일반형 변수이다
  일반형변수는 코드 내에서 자유롭게 값을 변경하여 사용할 수 있다
  여기에서는 bucketList의 b_id값의 PK값을 만들기 위해 사용한다
  */
  id = 1;
  // 리액트에서는 state형 변수를 절대 직접 변경하지 않는다
  state = {
    bucketList: [
      {
        b_id: 0,
        b_flag: 0,
        b_start_date: "2020-11-10",
        b_title: "리액트 정복",
        b_end_date: "2020-11-12",
        b_end_check: true,
        b_cancel: true,
      },
      {
        b_id: 0,
        b_flag: 1,
        b_start_date: "2020-11-12",
        b_title: "여행",
        b_end_date: "2020-12-23",
        b_end_check: false,
        b_cancel: false,
      },
    ],
  };

  /* Life Cycle Method
  클래스방식에선 내가 원하는대로 수정가능.
  React의 Class type Component에서는 여러가지 내장 method가 있다
  데이터의 변화가 발생하면 정해진 순서에 따라 내정method가 실행되면서
  화면을 rendering한다
  이러한 method들을 life cycle method라고 한다.

  렌더링: 어떤 데이터를 사용자에게 보여주기위해 그리는 것(Spring에선 ${})
  프록시(옵저버):  어떤 데이터의 사용자가 알지 못하는 변화를 감시하는 것. 감춰져있음.
   */
  // 화면이 이미 완성된 상태에서
  // 데이터가 변화했을 때 rerendering하려고 할 때 실행되는 메서드
  // insert, update, delete되었을 때 실행되는 메서드
  // 실제 DB와 연동을 하면 이 메서드에서 Ajax로 서버에 데이터를 전송하고
  // 서버에서는 CRUD를 수행한다.
  // 이 메서드가 React에 의해 호출될 때
  // state변수의 변화를 감지할 수 있다
  // state변수에 변화가 있어서 화면이 렌더링될 때
  // 변화되기 이전 데이터가 pre* 매개변수에 담겨서 전달된다
  // 이 데이터와 현재 데이터를 비교하여 달라졌을 경우
  // DB에 저장 등의 일을 수행하여 효율을 높일 수 있다
  componentDidUpdate(preProps, preState) {
    const preString = JSON.stringify(preState.bucketList);
    const thisString = JSON.stringify(this.state.bucketList);

    if (preString !== thisString) {
      localStorage.setItem("bucketList", thisString);
    }
  }

  // 현재 컴포넌트가 모두 마운트되고
  // (마운트: 컴포넌트가 다른 컴포넌트에 붙는 것)
  // 렌더링이 되기 바로 직전에 호출되는 메서드
  // 서버로부터 데이터를 요청하여 가져오는 코드
  componentDidMount() {
    const loadBucketList = localStorage.getItem("bucketList"); // String
    // 문자열일 경우 null, ""이 아니면 논리적으로 true가 된다
    if (loadBucketList) {
      const jsonBucketList = JSON.parse(loadBucketList);
      this.setState({ bucketList: jsonBucketList });
      this.id = jsonBucketList.length;
    }
  }

  bucketInsert = (bucket_title) => {
    const date = new Date();
    const bucket = {
      b_id: ++this.id,
      b_flag: 9,
      b_start_date: date.toString(),
      b_title: bucket_title,
      b_end_date: "",
      b_end_check: false,
      b_cancel: false,
    };

    // 일반적인 JS코드에서는
    // bucketList.push(bucket)

    // react의 선언적 철학: 절대 state형 변수는 직접 변경하지 말라
    // case1
    //this.setState({ bucketList: this.state.bucketList.concat({ ...bucket }) });

    // case2 : 전개연산자를 사용하는 방법
    this.setState({ bucketList: [...this.state.bucketList, bucket] });
  };

  handleFlagClick = (id) => {
    const flagBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        const flag = bucket.b_flag + 1;
        return { ...bucket, b_flag: flag };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: flagBucketList });
  };

  updateBucket = (id, title) => {
    const updateBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        return { ...bucket, b_title: title };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: updateBucketList });
  };

  handleCancel = (id) => {
    const cancelBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        return { ...bucket, b_cancel: !bucket.b_cancel };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: cancelBucketList });
  };

  handleComplete = (id) => {
    const date = Date();
    const compBucketList = this.state.bucketList.map((bucket) => {
      if (bucket.b_id === Number(id)) {
        if (bucket.b_end_check) {
          return {
            ...bucket,
            b_end_date: date.toString(),
            b_end_check: !bucket.b_end_check,
          };
        }
        return { ...bucket, b_end_date: date.toString(), b_end_check: true };
      } else {
        return bucket;
      }
    });
    this.setState({ bucketList: compBucketList });
  };

  /*
  class컴포넌트에서 child 컴포넌트에 state형 변수를 보낼 때는
  보낼변수명={this.state.변수명}

  함수를 보낼 때,
  보낼함수명={this.함수명}
  */
  render() {
    return (
      <div>
        <p>
          <BucketInsert bucketInsert={this.bucketInsert} />
        </p>
        <p>
          <BucketList
            bucketList={this.state.bucketList}
            handleFlagClick={this.handleFlagClick}
            updateBucket={this.updateBucket}
            handleCancel={this.handleCancel}
            handleComplete={this.handleComplete}
          />
        </p>
      </div>
    );
  }
}

export default BucketMain;
