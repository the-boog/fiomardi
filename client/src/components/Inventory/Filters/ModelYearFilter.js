import React from "react";
import { Table } from "semantic-ui-react";

class MakeFilter extends React.Component {
  render() {
    return (
      <>
        <Table.Cell>
          <div onClick={this.props.test}>2010</div>
          <div>2013</div>
        </Table.Cell>
      </>
    );
  }
}

export default MakeFilter;
