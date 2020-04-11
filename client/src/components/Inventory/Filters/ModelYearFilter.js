import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class ModelYearFilter extends React.Component {
  render() {
    const cars = this.props.cars;
    const modelYearOptions = [...new Set(cars.map((car) => car.modelyear))];
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          {modelYearOptions.map((value, index) => {
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

export default ModelYearFilter;
