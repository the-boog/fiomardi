import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class MakeFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox label="$2,000 - $3,000" style={{ padding: "5px" }} />
          <Checkbox label="$3,000 - $4,000" style={{ padding: "5px" }} />
        </Table.Cell>
      </>
    );
  }
}

export default MakeFilter;
