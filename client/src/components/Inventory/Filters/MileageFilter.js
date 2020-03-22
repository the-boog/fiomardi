import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class MileageFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox label="0-10,000" style={{ padding: "5px" }} />
          <Checkbox label="10,000-20,000" style={{ padding: "5px" }} />
        </Table.Cell>
      </>
    );
  }
}

export default MileageFilter;
