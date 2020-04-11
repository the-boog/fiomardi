import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class MakeFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const makeOptions = [...new Set(cars.map((car) => car.make))];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {makeOptions.map((value, index) => {
            return (
              <Checkbox
                key={index}
                label={value}
                onClick={() => this.props.filterOptions(value)}
                style={{ padding: "5px" }}
              />
            );
          })}
        </Table.Cell>
      </>
    );
  }
}

export default MakeFilter;
