import React from "react";
import axios from "axios";
import { Image } from "semantic-ui-react";
import "./node_modules/react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
    return (
      <div
        style={{
          backgroundColor: "#292929",
          height: "600px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Carousel
          showArrows={true}
          stopOnHover={true}
          autoPlay={true}
          showIndicators={false}
          infiniteLoop={true}
        >
          <div>
            <img src="https://static.carsdn.co/cldstatic/wp-content/uploads/2020-Honda-Fit.jpg" />
            <p className="legend">Interior</p>
          </div>
          <div>
            <img src="https://static.carsdn.co/cldstatic/wp-content/uploads/2020-Honda-Fit.jpg" />
            <p className="legend">Exterior</p>
          </div>
          <div>
            <img src="https://static.carsdn.co/cldstatic/wp-content/uploads/2020-Honda-Fit.jpg" />
            <p className="legend">Front Seat</p>
          </div>
        </Carousel>
        {/* <Image
          src="https://static.carsdn.co/cldstatic/wp-content/uploads/2020-Honda-Fit.jpg"
          size="small"
          ui={false}
          fluid
          style={{ height: "600px", width: "900px", marginLeft: "20px" }}
        /> */}
        {this.state.car.make}
      </div>
    );
  }
}

export default Car;
