import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

class Home extends React.Component {
  render() {
    return (
      <>
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
            thumbWidth={10}
            showThumbs={true}
            autoPlay={true}
            showIndicators={true}
            infiniteLoop={true}
            width={"900px"}
          >
            <div>
              <img src="https://static.carsdn.co/cldstatic/wp-content/uploads/2020-Honda-Fit.jpg" />
              {/* <p className="legend">Interior</p> */}
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
        </div>
      </>
    );
  }
}

export default Home;
