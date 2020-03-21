import React from "react";
import { Table } from "semantic-ui-react";

class BodyStyleFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell>
          <div onClick={this.props.test}>Sedan</div>
          <div>SUV</div>
        </Table.Cell>
      </>
    );
  }
}

export default BodyStyleFilter;
