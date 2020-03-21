import React from "react";
import { Table } from "semantic-ui-react";

class MakeFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell>
          <div onClick={this.props.test}>0-5000</div>
          <div>5000-10000</div>
        </Table.Cell>
      </>
    );
  }
}

export default MakeFilter;
