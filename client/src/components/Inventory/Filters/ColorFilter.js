import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class ColorFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const colorOptions = [...new Set(cars.map((car) => car.color))];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {colorOptions.map((value, index) => {
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

export default ColorFilter;
