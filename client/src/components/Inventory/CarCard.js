import React from "react";
import { Link } from "react-router-dom";
import { Card, Icon, Image, Button } from "semantic-ui-react";

class CarCard extends React.Component {
  render() {
    const cars = this.props.cars;
    console.log(this.props.cars);
    return (
      <>
        <Card
          style={{
            width: "100%",
            height: "200px",
            display: "flex",
            flexDirection: "row",
            borderTop: "solid 1.5px",
            borderBottom: "solid 1.5px",
          }}
        >
          <Image
            src="https://static.carsdn.co/cldstatic/wp-content/uploads/2020-Honda-Fit.jpg"
            wrapped
            ui={false}
            style={{ height: "170px", width: "250px" }}
          />
          <Card.Content>
            <Card.Header>{cars.make + " " + cars.kind}</Card.Header>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                padding: "5px",
                justifyContent: "space-between",
              }}
            >
              <Card.Description style={{ marginRight: "20px" }}>
                <Icon name="tachometer alternate"></Icon> Miles - {cars.miles}
              </Card.Description>
              <Card.Description style={{ marginRight: "20px" }}>
                <Icon name="tint"></Icon> {cars.color}
              </Card.Description>
              <Card.Description style={{ marginRight: "20px" }}>
                <Icon name="car"></Icon> {cars.make}
              </Card.Description>
              <Card.Description style={{ marginRight: "20px" }}>
                <Icon name="info circle"></Icon> DriveTrain - {cars.drivetrain}
              </Card.Description>
              <Card.Description style={{ marginRight: "20px" }}>
                <Icon name="sort amount up"></Icon> Transmission -{" "}
                {cars.transmission}
              </Card.Description>
            </div>
            <div
              style={{
                marginTop: "30px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <Button inverted color="green" floated="right">
                  Apply Now
                </Button>
                <Link to={`/inventory/${cars.id}`}>
                  <Button inverted color="orange" floated="right">
                    View Details
                  </Button>
                </Link>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  paddingTop: "6px",
                }}
              >
                <Button color="blue" floated="right">
                  Edit
                </Button>
                <Button color="red" floated="right">
                  Delete
                </Button>
              </div>
            </div>
          </Card.Content>
          <Card.Content extra style={{ marginRight: "20px" }}>
            <Icon name="dollar">{cars.price}</Icon>
          </Card.Content>
        </Card>
      </>
    );
  }
}

export default CarCard;
