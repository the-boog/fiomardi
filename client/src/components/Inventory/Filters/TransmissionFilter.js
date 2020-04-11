import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class TransmissionFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const transmissionOptions = [
      ...new Set(cars.map((car) => car.transmission)),
    ];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {transmissionOptions.map((value, index) => {
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

export default TransmissionFilter;
