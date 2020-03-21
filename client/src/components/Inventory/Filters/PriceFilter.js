import React from "react";
import { Table } from "semantic-ui-react";

class MakeFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell>
          <div onClick={this.props.test}>Honda</div>
          <div>Toyota</div>
        </Table.Cell>
      </>
    );
  }
}

export default MakeFilter;
