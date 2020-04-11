import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class DrivetrainFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const drivetrainOptions = [...new Set(cars.map((car) => car.drivetrain))];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {drivetrainOptions.map((value, index) => {
            return (
              <Checkbox
                key={index}
                onClick={() => this.props.filterOptions(value)}
                label={value}
                style={{ padding: "5px" }}
              />
            );
          })}
        </Table.Cell>
      </>
    );
  }
}

export default DrivetrainFilter;
