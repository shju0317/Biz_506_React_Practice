import React, { Component } from "react";
import axios from "axios";

class CarInsert extends Component {
  constructor(props) {
    super(props);
    this.state = props.carData;
  }

  state = {
    car_id: 0,
    car_start_date: "",
    car_end_date: "",
    car_distance: "",
    car_price: "",
    car_place: "",
  };

  handleKeyPress = (e) => {
    console.log(e.key);
    if (e.key === "Enter") {
      const { carInsert } = this.props;
      carInsert(this.state.car_start_date);
      carInsert(this.state.car_end_date);
      carInsert(this.state.car_distance);
      carInsert(this.state.car_price);
      carInsert(this.state.car_place);
    }
  };

  carSave = () => {
    const { insertURL, updateURL } = this.props;
    const url = this.state.isUpdate ? updateURL : insertURL;
    axios
      .post(url, {
        car_id: this.state.car_id,
        car_start_date: this.state.car_start_date,
        car_end_date: this.state.car_end_date,
        car_distance: this.state.car_distance,
        car_price: this.state.car_price,
        car_place: this.state.car_place,
      })
      .then((result) => console.log(result))
      .catch((err) => console.log(err));
  };

  render() {
    const {
      car_start_date,
      car_end_date,
      car_distance,
      car_price,
      car_place,
    } = this.state;

    return (
      <section className="w3-container-fluid">
        <div className="form">
          <input
            name="car_start_date"
            value={car_start_date}
            placeholder="시작일시"
          />
          <input
            name="car_end_date"
            value={car_end_date}
            placeholder="종료일시"
          />
          <input
            name="car_distance"
            value={car_distance}
            placeholder="현재거리"
          />
          <input name="car_price" value={car_price} placeholder="소요비용" />
          <input
            name="car_place"
            value={car_place}
            onKeyPress={this.handleKeyPress}
            placeholder="장소"
          />
        </div>
      </section>
    );
  }
}

export default CarInsert;
