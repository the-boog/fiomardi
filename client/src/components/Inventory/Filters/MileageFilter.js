import React from "react";
import { Table } from "semantic-ui-react";

class MileageFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell>
          <div onClick={this.props.test}>0-10,000</div>
          <div>40,000 - 50,000</div>
        </Table.Cell>
      </>
    );
  }
}

export default MileageFilter;
