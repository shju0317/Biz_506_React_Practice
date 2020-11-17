import React, { Component } from "react";
import Moment from "react-moment";
import axios from "axios";

class CarItem extends Component {
  state = {};
  render() {
    const { car } = this.props;

    return (
      <tr>
        <td>1</td>
        <td>연료주유</td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{car.car_start_date}</Moment>
        </td>
        <td>
          <Moment format="YYYY-MM-DD HH:mm:ss">{car.car_end_date}</Moment>
        </td>
        <td>525,000</td>
        <td>500</td>
        <td>요앞</td>
      </tr>
    );
  }
}

export default CarItem;
