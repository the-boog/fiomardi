import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class BodyStyleFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const bodyStyleOptions = [...new Set(cars.map((car) => car.body))];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {bodyStyleOptions.map((value, index) => {
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

export default BodyStyleFilter;
