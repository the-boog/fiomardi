import React from "react";
import { Table } from "semantic-ui-react";

class MakeFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell>
          <div onClick={this.props.test}>Camry</div>
          <div>Fit</div>
        </Table.Cell>
      </>
    );
  }
}

export default MakeFilter;
