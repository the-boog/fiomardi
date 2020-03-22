import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class MakeFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox label="Fit" style={{ padding: "5px" }} />
          <Checkbox label="Camry" style={{ padding: "5px" }} />
        </Table.Cell>
      </>
    );
  }
}

export default MakeFilter;
