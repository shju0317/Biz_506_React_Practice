import React, { Component } from "react";
import CarItem from "./CarItem";

class CarList extends Component {
  render() {
    const { carList } = this.props;

    // const cItemList = carList.map((car) => {
    //   <CarItem />;
    // });

    return (
      <section className="w3-container-fluid w3-margin">
        <table className="car-list w3-table w3-table-all">
          <thead>
            <tr>
              <th>No</th>
              <th>구분</th>
              <th>시작일시</th>
              <th>종료일시</th>
              <th>현재거리</th>
              <th>소요비용</th>
              <th>장소</th>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
      </section>
    );
  }
}

export default CarList;
