import React from "react";
import axios from "axios";

class Car extends React.Component {
  state = {
    car: [],
  };
  componentDidMount() {
    axios
      .get(`/api/cars/${this.props.match.params.id}`)
      .then((res) => {
        this.setState({ car: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return <div style={{ backgroundColor: "red" }}>{this.state.car.make}</div>;
  }
}

export default Car;
