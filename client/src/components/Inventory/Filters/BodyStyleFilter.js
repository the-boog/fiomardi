import React from "react";
import { Table, Checkbox } from "semantic-ui-react";

class BodyStyleFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell style={{ display: "flex", flexDirection: "column" }}>
          <Checkbox label="Sedan" style={{ padding: "5px" }} />
          <Checkbox label="SUV" style={{ padding: "5px" }} />
        </Table.Cell>
      </>
    );
  }
}

export default BodyStyleFilter;
