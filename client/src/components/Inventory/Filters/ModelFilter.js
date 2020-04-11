import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class ModelFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const modelOptions = [...new Set(cars.map((car) => car.kind))];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {modelOptions.map((value, index) => {
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

export default ModelFilter;
