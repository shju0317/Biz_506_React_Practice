import React, { Component } from "react";
import CarInsert from "./CarInsert";
import CarList from "./CarList";

class CarMain extends Component {
  state = {
    carData: {
      car_id: 0,
      car_start_date: "",
      car_end_date: "",
      car_distance: "",
      car_price: "",
      car_place: "",
    },
  };

  render() {
    return (
      <main className="car-main">
        <CarInsert />
        <CarList />
      </main>
    );
  }
}

export default CarMain;
